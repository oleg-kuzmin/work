//# .filter()
// Метод filter отсеивает элементы массива по заданному признаку.

//# пример
const a = [1, 9, 2, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 5, 3];

// отберём элементы больше 5
const b = a.filter(function (item) {
  return item > 5;
});

console.log(b); // [9, 7, 8, 9]

//# Аргументы колбек-функции
//* Аргумент 1. Текущий элемент массива
// Текущий элемент массива используется часто, поэтому и стоит на первом месте. Если другие аргументы не нужны, достаточно прописать его.

//* Аргумент 2. Индекс текущего элемента
// Второй аргумент колбэка — фактически счётчик цикла for. Его можно использовать, например, для расстановки позиций в списке.

//* Аргумент 3. Исходный массив
// Исходный массив как аргумент пригодится, когда нужно обратиться к свойствам этого исходного массива.

//# общая информация
/*
- Как forEach и map, метод filter принимает колбэк в качестве аргумента.
- Этот колбэк будет вызван на каждом элементе.
- Он должен вернуть true или false в зависимости от того, хотим мы оставить текущий элемент массива или отфильтровать.
- Метод filter создаёт новый массив из элементов, для которых функция-фильтр вернула true. При этом исходный массив не меняется.
- Колбэк метода filter — те же три параметра, что и у map и forEach. Текущий элемент, его индекс и исходный массив. */
