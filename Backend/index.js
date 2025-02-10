const express = require('express');
const axios = require('axios');
const fs = require('fs');
const Database = require('better-sqlite3');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Разрешаем CORS для Next.js
app.use(cors({ origin: 'http://localhost:3000' }));

// Настройка bodyParser для обработки запросов с правильной кодировкой
app.use(bodyParser.json({ type: 'application/json', charset: 'utf-8' }));

// URL для скачивания SQLite файла
const fileId = '1DDwR5spgCjBWQAWNZ0J3UgEZy7vGu-_z';
const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

// Функция для скачивания файла SQLite
async function downloadFile(url, dest) {
  const writer = fs.createWriteStream(dest);

  try {
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    throw new Error('Ошибка скачивания файла: ' + error.message);
  }
}

// Функция для извлечения данных из SQLite
function fetchDataFromSQLite(dbPath) {
  const db = new Database(dbPath, { verbose: console.log });

  try {
    // Убедимся, что база данных использует UTF-8
    db.pragma('encoding = "UTF-8"');

    // Читаем данные из таблицы articles
    const rows = db.prepare('SELECT * FROM articles ').all();

    // Проверяем, что данные корректно декодированы
    rows.forEach(row => {
      for (const key in row) {
        if (typeof row[key] === 'string') {
          row[key] = Buffer.from(row[key], 'utf8').toString('utf8');
        }
      }
    });

    return rows;
  } catch (error) {
    throw new Error('Ошибка чтения SQLite: ' + error.message);
  } finally {
    db.close();
  }
}

// API Endpoint для получения данных
app.get('/', async (req, res) => {
  const tempFilePath = './temp.db';

  try {
    console.log('Скачивание файла...');
    await downloadFile(fileUrl, tempFilePath);

    console.log('Извлечение данных из SQLite...');
    const data = fetchDataFromSQLite(tempFilePath);

    // Устанавливаем правильную кодировку для ответа
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    // Отправляем данные клиенту
    res.json(data);
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: error.message || 'Ошибка сервера' });
  } finally {
    // Удаляем временный файл, если он существует
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
      console.log('Файл удален:', tempFilePath);
    }
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});