//# Замыкания
//* 1. Функции возвращают новые функции.
//* 2. Возвращаемые функции помнят контекст где были созданы.

function createFunction() {
  const message = 'Hello world';

  function greeting() {
    console.log(message);
  }

  return greeting;
}

const helloWorld = createFunction();
// присвоили результат функции createFunction в переменную helloWorld
// а именно другую функцию greeting

helloWorld(); // выведет 'Hello world'
