//# Обработка Promise - then
// Если мы заинтересованы только в результате успешного выполнения задачи, то в then можно передать только одну функцию. В индустрии используется только первый аргумент (для обработки успешного завершения операции).

//# Синтаксис
promise.then(
  function (result) {
    // обработает успешное выполнение
  },
  function (error) {
    // обработает ошибку
  }
);

//* function (result)
// Функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.

//* function (error)
// Функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.

//# Цепочка then
// then возвращает новый Promise.

fetch('https://www.anapioficeandfire.com/api/houses')
  .then(function (response) {
    return response.json();
  })
  .then(function (overlord) {
    console.log(overlord.name);
  })
  .catch(function (error) {
    console.log(`Ошибка: ${error.message}`);
  })
  .finally(function () {
    console.log('Операция завершилась');
  });
