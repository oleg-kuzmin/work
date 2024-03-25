//# 05. Асинхронная функция с Promise
//* 1. Создать функцию, которая будет выполнять асинхронную операцию:
function earnAllMoney() {}

//* 2. Вернуть из функции объект - экземпляр класса Promise:
function earnAllMoney() {
  return new Promise(function (resolve, reject) {
    // ...
  });
}

//* 3. Создать функцию-исполнитель для вышеуказанного promise:
function earnAllMoney() {
  return new Promise(function (resolve, reject) {
    const result = doSomething(); // какая-то асинхронная операция

    if (result.ok) {
      resolve(result);
    } else {
      reject(new Error(result));
    }
  });
}
