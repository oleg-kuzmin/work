//# .reduce()
// Метод reduce перебирает элементы массива и сводит его к одному значению. Первый аргумент метода reduce — колбэк. А вот вторым нужно задать промежуточное значение previousValue при первой итерации.

//# .reduce()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce(function (previousValue, item) {
  return previousValue + item;
});
console.log(sum);

//# Аргументы колбек-функции (1 аргумент метода)
//* Аргумент 1. Промежуточное значение
// Промежуточное значение — главная особенность reduce. На каждой итерации этот аргумент равен тому, что в прошлый раз вернул колбэк.

//* Аргумент 2. Текущий элемент массива
// Текущий элемент массива используется часто, поэтому и стоит на первом месте. Если другие аргументы не нужны, достаточно прописать его.

//* Аргумент 3. Индекс текущего элемента
// Второй аргумент колбэка — фактически счётчик цикла for. Его можно использовать, например, для расстановки позиций в списке.

//* Аргумент 4. Исходный массив
// Исходный массив как аргумент пригодится, когда нужно обратиться к свойствам этого исходного массива.

//# промежуточное значение previousValue при первой итерации (2 аргумент метода)
// Методу reduce вторым аргументом можно передать пустой объект, массив, строку, число.

// Создадим массив, хранящий в себе историю выигрышей и проигрышей одного игрока в казино.
const winsAndLoses = [190, 117, -381, -394, -36, 137, -473, 372, -383];

// Посчитаем, какая сумма денег останется у этого игрока к концу вечера, если вначале у него было с собой 1000.
const total = winsAndLoses.reduce(function (previousValue, item) {
  return previousValue + item;
}, 1000); // Начальное значение передаём методу reduce как второй аргумент.

console.log(total); // 149.

//# общая информация
/*
- Работает как forEach: перебирает элементы массива и выполняет для каждого свой код.
- У колбэка reduce те же аргументы, но добавляется один новый.
- Он ставится на первое место, а «старые» идут за ним: текущий элемент, индекс и исходный массив.
- Запись return previousValue + item означает: «прибавь текущий элемент массива к тому, что получилось на предыдущей итерации».
- На первой итерации промежуточное значение — первый элемент массива. Но это значение можно задать самостоятельно. Тогда действия с массивом начнутся с него. */
