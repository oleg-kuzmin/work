// TODO Метод reduce. Сведение массива.
  //числа или строки
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce(function (previousValue, item) {
  return previousValue + item; //прибавь текущий элемент массива к тому, что получилось на предыдущей итерации
});
console.log(sum);

  //числа или строки со вторым аргументом - начальным значением
const winsAndLoses = [190, 117, -381, -394, -36, 137, -473, 372, -383];
const total = winsAndLoses.reduce(function (previousValue, item) {
    return previousValue + item;
}, 1000); // Начальное значение передаём методу reduce как второй аргумент.
console.log(total); // 149. Чего ещё ожидать от азартных игр?

  //второй аргумент пустой объект
const order = ['яблоко', 'банан', 'апельсин', 'банан', 'яблоко', 'банан'];
const result = order.reduce(function (prevVal, item) {
  if (!prevVal[item]) { // если ключа ещё нет в объекте, значит это первое повторение
    prevVal[item] = 1;
  } else {     // иначе увеличим количество повторений на 1
    prevVal[item] += 1;
  }
  return prevVal; // и вернём изменённый объект
}, {}); // Начальное значение — пустой объект.
console.log(result); // { яблоко: 2, банан: 3, апельсин: 1 }