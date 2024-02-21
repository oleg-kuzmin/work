//# (ОБЪЯВЛЕНИЕ ОБЪЕКТА, МАССИВА)
/*
- Для объектов TS проверяет только минимальное наличие всех ключей из интерфейса, если свойств в объекте больше - ошибки не будет.
*/

//* интерфейс для объекта
interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew: boolean;
}

//* объект без интерфейса
const object: { x: string; y: string } = { x: '123', y: '123' };

//* объект с интерфейсом
const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: false,
};

//* массив без интерфейса
const numbers1: string[] = []; // используется чаще
const numbers2: string[][] = []; // массив массивов
const numbers3: Array<string> = []; // используется реже
const numbers4: (number | string | boolean)[] = [1, 2, 3, '123', true]; // любой из трех типов

//* массив с интерфейсом
const cars: Car[] = [];

//* Record
// Иногда бываю задачи, где не важно знать о ключах объекта (например, они динамически добавляются и удаляются), но важно знать, что в значениях лежат только числа (например делаем счетчик чего-то). В таких случаях поможет тип Record.

const counter: Record<string, number> = {
  apple: 1,
  orange: 8,
  banana: 6,
};
counter.kivi = 4; // TS разрешит добавить новый ключ, но будет следить за соблюдением <string, number>
