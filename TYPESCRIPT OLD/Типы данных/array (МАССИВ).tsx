//# Списки
// Имеет разное количество элементов

//* С аннотацией
const listNumber: number[] = [1, 2, 3];

//* Без аннотации
const listNumber1 = [1, 2, 3];

//* Альтернативный способ
const listNumber2: Array<number> = [1, 2, 3];

//* Вложенные массивы
const listNumber3: number[][] = [
  [1, 2],
  [1, 2],
];

//* Разные типы данных
const listSomething: (string | number)[] = [];

//* Псевдоним
type Something = string | number;
const listSomething1: Something[] = [];

//# Кортежи (tuple)
// Имеет фиксированное количество элементов

//* Массив элементов
const tuple: [string, boolean, number] = ['abc', true, 123];

//* Массив кортежей
const tuple1: [string, boolean, number][] = [['abc', true, 123]];

//* Псевдоним
type SimpleCsv = [string, boolean, number];
const tuple2: SimpleCsv[] = [['abc', true, 123]];
