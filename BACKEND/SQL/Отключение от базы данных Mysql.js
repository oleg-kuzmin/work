//# Отключение от базы данных Mysql
// После того, как выполнится необходимые запросы на получение данных

connection.end(err => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log('Database connect');
  }
});