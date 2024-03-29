//# array.reduce() (СВЕДЕНИЕ К ОДНОМУ ЗНАЧЕНИЮ)
/*
- На первой итерации промежуточное значение — первый элемент массива. Но это значение можно задать самостоятельно. Тогда действия с массивом начнутся с него.
- Метод reduce перебирает элементы массива и сводит его к одному значению.
- Первый аргумент метода reduce — колбэк.
- А вот вторым нужно задать промежуточное значение previousValue при первой итерации.
- Работает как forEach: перебирает элементы массива и выполняет для каждого свой код.
- У колбэка reduce те же аргументы, но добавляется один новый.
- Он ставится на первое место, а «старые» идут за ним: текущий элемент, индекс и исходный массив.
- Запись return previousValue + item означает: «прибавь текущий элемент массива к тому, что получилось на предыдущей итерации».
*/

//# Синтаксис
array.reduce(function (previousValue, item, index, array) {}, initialValue);
//* 1. previousValue - Промежуточное значение
// На каждой итерации этот аргумент равен тому, что в прошлый раз вернул колбэк.

//* 2. item - Текущий элемент массива
// Текущий элемент массива используется часто, поэтому и стоит на первом месте. Если другие аргументы не нужны, достаточно прописать его.

//* 3. index - Индекс текущего элемента
// Второй аргумент колбэка — фактически счётчик цикла for.

//* 4. array - Исходный массив
// Исходный массив как аргумент пригодится, когда нужно обратиться к свойствам этого исходного массива.

//* 5. initialValue - начальное значение (обязательное для массива или объекта)
// Вторым аргументом можно передать строку, число, пустой объект, массив. Когда на выходе нужен массив или объект, второй аргумент обязателен. Для числа или строки - нет.

//# Возвращает
//* Итоговый элемент.

//# Пример
//* массив чисел
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce(function (previousValue, item) {
  return previousValue + item;
});
console.log(sum); // 45

//* массив чисел и начальное значение число
const winsAndLoses = [190, 117, -381, -394, -36, 137, -473, 372, -383];
const total = winsAndLoses.reduce(function (previousValue, item) {
  return previousValue + item;
}, 1000);
console.log(total); // 149

//* массив строк и начальное значение объект
const order = ['яблоко', 'банан', 'апельсин', 'банан', 'яблоко', 'банан'];
const result = order.reduce(function (previousValue, item) {
  if (!previousValue[item]) {
    previousValue[item] = 1; // если ключа ещё нет в объекте, значит это первое повторение
  } else {
    previousValue[item] += 1; // иначе увеличим количество повторений на 1
  }
  return previousValue; // вернём изменённый объект
}, {});

console.log(result); // { яблоко: 2, банан: 3, апельсин: 1 }

//* количество ключей
function countKey(object, array) {
  return array.reduce(function (res, item) {
    if (obj[item]) {
      res += 1;
    }
    return res;
  }, 0);
}
