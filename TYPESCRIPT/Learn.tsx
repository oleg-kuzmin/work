//* Тип данных void (определение отсутствующих типов)
// Например для функций, которые ничего не возвращают
const greetUser = (): void => {
  console.log('hello');
};

//* Тип данных array для чисел
const list2: Array<number> = [1, 2, 3];

//* Тип данных array для разного
let x: [string, number] = ['hello', 10];



//* Тип данных Enum
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 2

// Custom index for Enum Types
enum Directions2 {
  Up = 2,
  Down = 4,
  Left = 6,
  Right,
}

Directions2.Up; // 2
Directions2.Down; // 4
Directions2.Left; // 6
Directions2.Right; // 7

//* Тип данных Never (от этой функции результата мы не получим)
const msg = 'hello';
const error = (msg: string): never => {
  throw new Error(msg);
};

//* Тип данных Object
const create = (o: object | null): void => {};
