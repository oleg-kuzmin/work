//# Как создать асинхронную функцию с промисом
//* 1. Создать функцию, которая будет выполнять асинхронную операцию:

function earnAllMoney() {}

//* 2. Вернуть из функции свежесозданный промис:

function earnAllMoney() {
  return new Promise(function (resolve, reject) {
    /* ... */
  });
}

//* 3. Аргументом в конструктор передать функцию, которая выполняет асинхронную операцию и переводит промис в состояние «успех» или «ошибка» в зависимости от результата:

function earnAllMoney() {
  return new Promise(function (resolve, reject) {
    const result = tryEarnAllMoney(); // асинхронная операция
    if (result.ok) {
      resolve(result); // успех → переводим промис в fulfilled и передаём результат
    } else {
      reject(new Error(result)); // ошибка → переводим промис в rejected
    }
  });
}


