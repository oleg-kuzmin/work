//# array.lastIndexOf() (ПОИСК ПОСЛЕДНЕГО ИНДЕКСА ЭЛЕМЕНТА)
// Ищет item, начиная с индекса from, и возвращает последний индекс, на котором был найден искомый элемент.

//# Синтаксис
element.lastIndexOf(searchElement, fromIndex);

//* 1. Элемент: searchElement - искомый элемент

//* 2. Число: fromIndex - позиция, начиная с которой необходимо проверять (опционально)
/*
- Равен 0 по умолчанию.
- Если передать в качестве аргумента положительное значение или 0, поиск начнётся с этого индекса и до конца массива.
- Если передать отрицательное значение, поиск начнётся с этого индекса, отсчитанного от конца массива и будет происходить до конца массива. Для этого случая индекс начала поиска можно рассчитать по формуле — длинна массива/строки + переданное отрицательное число. Например, длинна массива/строки — 10, переданный аргумент — -2. Начало поиска с позиции — 8, т. к. 10 + (-2) = 8.
- Если второй аргумент больше длины массива/строки, то метод всегда будет возвращать false.
*/

//# Возвращает
//* Число с индексом.
// Возвращает индекс последнего найденного элемента или -1, если ничего не нашлось.

//# Пример
//* Строка
const string = 'Мама мыла раму';
console.log(string.lastIndexOf('ы')); // 6

//* Массив
const array = ['Петя', 'Настя', 'Артур', 'Лена', 'Лена', 'Настя'];
console.log(array.lastIndexOf('Лена')); // 4
