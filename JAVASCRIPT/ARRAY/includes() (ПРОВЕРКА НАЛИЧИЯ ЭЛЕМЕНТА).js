//# string.includes() (ПРОВЕРКА НАЛИЧИЯ ЭЛЕМЕНТА)
//# array.includes() (ПРОВЕРКА НАЛИЧИЯ ЭЛЕМЕНТА)
/*
- Этот метод определён у массивов и строк.
- Для массивов: проверяет, есть ли искомый элемент в массиве.
- Для строк: проверяет, есть ли искомая подстрока в строке.
- Будьте внимательны при передаче в includes() объектов. Если два объекта выглядят одинаково, это не обязательно один объект, потому что объекты хранятся по ссылке.
*/

//# Синтаксис
//* 1. Элемент: searchElement - значение, которое нужно проверить
//* 2. Число: fromIndex - позиция, начиная с которой необходимо проверять (опционально)
/*
- Равен 0 по умолчанию.
- Если передать в качестве аргумента положительное значение или 0, поиск начнётся с этого индекса и до конца массива.
- Если передать отрицательное значение, поиск начнётся с этого индекса, отсчитанного от конца массива и будет происходить до конца массива. Для этого случая индекс начала поиска можно рассчитать по формуле — длинна массива/строки + переданное отрицательное число. Например, длинна массива/строки — 10, переданный аргумент — -2. Начало поиска с позиции — 8, т. к. 10 + (-2) = 8.
- Если второй аргумент больше длинны массива/строки, то метод всегда будет возвращать false.
*/

element.includes(searchElement, fromIndex);

//# Возвращает
//* BOOLEAN-значение.
// Возвращает true, если искомый элемент нашёлся и false — если нет.

//# Пример
//* Строка
const text = 'Посмотри, ведь это рядом наша панда. Мы бежим с тобой как-будто от гепарда.';
console.log(text.includes('панда')); // true

//* Массив
const dead = ['Джон Сноу', 'Джофри', 'Нед Старк', 'Король ночи'];
const isAryaDead = dead.includes('Арья Старк');
console.log(isAryaDead); // false
