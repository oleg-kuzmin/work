//# Подключение к базе данных Mysql
// 1. Установить модуль
//* npm install mysql

// 2. Импортировать модуль в файл js
import mysql from 'mysql';

// 3. Настроить подключение к базе данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'horse',
});

// 4. Подключиться к базе
connection.connect(err => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log('Database connect');
  }
});
