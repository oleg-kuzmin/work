// создание сервера с помощью http модуля

// 1. Импорт модуля в js-файл
const http = require('http');

// 2. Создаем порт, который будет слушать сервер
const PORT = 3000;

// 3. Создаем сервер, используя метод createServer
// В качестве аргумента метод использует колбек-функцию, которая будет вызываться каждый раз, когда будет обращение к серверу.
// Колбек-функция принимает 2 аргумента: запрос и ответ.

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log(req.url, req.method);

  // метод setHeader - вспомогательная информация об ответе
  res.setHeader('Content-Type', 'text/plain'); // обычный текст
  res.setHeader('Content-Type', 'text/html'); // html-страница
  res.setHeader('Content-Type', 'application/json'); // при передаче JSON-формата

  // метод write - записываем ответ (можно использовать сколько угодно раз)
  res.write('<head><link rel="stylesheet" href="#"></head>')
  res.write('<h1>Hello, world!</h1>');
  res.write('<p>My name is Oleg</p>');

  // пример работы API - при запросе на сервер будут возвращаться данные, 
  // тк в ответе нам должен прийти JSON-формат, то оборачиваем данные с JSON.stringify

  const data = JSON.stringify([
    { name: 'Tommy', age: '40'},
    { name: 'Alex', age: '35'},
  ])

  // метод end - сообщает, что все нужные данные были добавлены в ответ для отправки 
  // контроль можно возвращать браузеру
  // если мы не возвращаем разметку, то в метод end передаем данные в JSON-формате
  res.end(data);
})

// 4. Для прослушивания используем метод listen
// Аргументы: порт, имя хоста, колбек-функция

server.listen(3000, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
}) 

