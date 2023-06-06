//# настройка сервера
// 1. Установить модули (cors нужен для использования политики cors на локальном компьтере)
//* npm install express
//* npm install cors

// 2. Импортировать модули в файл js
import express from 'express';
import cors from 'cors';

// 3. Настройка
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server start on ${PORT}`);
});
