const express = require("express");
const axios = require("axios");
const fs = require("fs");
const Database = require("better-sqlite3");
const cors = require("cors");

const app = express();
const port = 3001;

// Разрешаем CORS для Next.js
app.use(cors({ origin: "http://localhost:3000" }));

// ✅ Правильная ссылка для скачивания файла SQLite с Google Drive
const fileId = "1TKQuEGz9-5XZic_QBRKhB3yhQXiPmVKi";
const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`; 

// 🔹 Функция для скачивания SQLite файла
async function downloadFile(url, dest) {
  const writer = fs.createWriteStream(dest);

  try {
    const response = await axios({
      method: "get",
      url: url,
      responseType: "stream",
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    throw new Error("Ошибка скачивания файла: " + error.message);
  }
}

// 🔹 Функция для извлечения данных из SQLite
async function fetchDataFromSQLite(dbPath) {
  const db = new Database(dbPath);

  try {
    const rows = db.prepare("SELECT * FROM articles").all();
    return rows;
  } catch (error) {
    throw new Error("Ошибка чтения SQLite: " + error.message);
  } finally {
    db.close(); // ❗ Обязательно закрываем базу перед удалением файла
  }
}

// 🔹 API Endpoint для получения данных
app.get("/", async (req, res) => {
  const tempFilePath = "./temp.db";

  try {
    console.log("Скачивание файла...");
    await downloadFile(fileUrl, tempFilePath);

    console.log("Извлечение данных из SQLite...");
    const data = await fetchDataFromSQLite(tempFilePath);

    // Отправляем JSON клиенту
    res.json(data);
  } catch (error) {
    console.error("Ошибка:", error);
    res.status(500).json({ error: error.message || "Ошибка сервера" });
  } finally {
    // Удаляем временный файл, если он существует
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
      console.log("Файл удален:", tempFilePath);
    }
  }
});

// 🔹 Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
