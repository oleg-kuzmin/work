//# array.map() (СОЗДАНИЕ МАССИВА ИЗ ДРУГОГО, БЕЗ МУТАЦИИ)
/*
- Метод map создаёт новый массив на основе существующего.
- В качестве аргумента map, как и forEach, принимает функцию.
- Эта функция должна вернуть значение, которое станет элементом нового массива.
- Результат работы функции — то, что указано после ключевого слова return.
- Если не прописать return, функция сработает, но вернёт undefined.
- Метод map нельзя применить к массивоподобным объектам.
*/

//# Синтаксис
array.map(function (item, index, array) {});
//* 1. item - Текущий элемент массива
// Текущий элемент массива используется часто, поэтому и стоит на первом месте. Если другие аргументы не нужны, достаточно прописать его.

//* 2. index - Индекс текущего элемента
// Второй аргумент колбэка — фактически счётчик цикла for.

//* 3. array - Исходный массив
// Исходный массив как аргумент пригодится, когда нужно обратиться к свойствам этого исходного массива.

//# Пример
const firstArray = [0, 1, 2, 3, 4];
const secondArray = firstArray.map(function (item) {
  return item * 2; // [0, 2, 4, 6, 8]
});

const cars = [
  {
    color: 'red',
    type: 'sedan',
    registration: new Date('2023-10-02'),
  },
  {
    color: 'black',
    type: 'sedan',
    registration: new Date('2023-10-02'),
  },
  {
    color: 'green',
    type: 'minivan',
    registration: new Date('2023-10-02'),
  },
];

const resultType = cars.map(item => {
  return item.type;
});

const result = cars.map((item, index) => {
  return { type: item.type, index: index };
});
