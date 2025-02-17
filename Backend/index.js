const express = require("express");
const redis = require("redis");
const cors = require("cors");  // Импортируем CORS

const app = express();
const PORT = 3001;

// Разрешаем все запросы с других источников
app.use(cors());

async function start() {
    const client = redis.createClient({ url: "redis://192.168.201.24:6378" });
    await client.connect();
    
    const subscriber = client.duplicate();
    await subscriber.connect();
    
    let mes;  // Используем переменную mes

    await subscriber.subscribe("test", (message) => {
        try {
            console.log("Received message:", message);
            mes = JSON.parse(message);  // Присваиваем полученное сообщение переменной mes
        } catch (error) {
            console.error("Ошибка при обработке сообщения:", error);
        }
    });

    app.get("/", (req, res) => {
        if (mes) {  // Используем mes вместо message
            console.log(mes)
            res.json(mes); // Отправляем объект, который будет правильно интерпретирован на клиенте
        } else {
            res.status(404).json({ error: "No messages received yet" });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

start().catch(console.error);
