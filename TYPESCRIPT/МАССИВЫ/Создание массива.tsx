//# Создание массива
//* Массив строк
const strings1: string[] = [];

//* Массив строк
const strings2: Array<string> = [];

//* Массив из массивов строк
const strings3: string[][] = [];

//* Массив union
const array: (number | string | boolean)[] = [1, 2, '123', true];

//* Массив из объектов с типом Car
interface Car {
  wheels: number;
  brand: string;
  type?: string;
  isNew?: boolean;
}

const cars: Car[] = [];
