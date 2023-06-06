//# Запрос ко всей таблице
let query = 'SELECT * FROM `users`;';

// users - название таблицы

connection.query(query, (err, res, field) => {
  console.log(err); // ошибки
  console.log(res); // результат выполнения (возвращает массив объектов RowDataPacket)
  console.log(field); // поля с которыми работает (чаще не нужно)
});
