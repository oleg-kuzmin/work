//# TYPESCRIPT/(ОБЪЯВЛЕНИЕ ФУНКЦИИ).tsx
//* параметры
function sum(a: number, b: number) {
  return a + b;
}

//* параметр - объект
// TS проверяет наличие только ключей-параметров, другие ключи вторичны.
function sum2(pont: { x: string; y: string }): void {
  console.log(pont.x);
  console.log(pont.y);
}

//* явное указание типа возвращаемого значения
function sum3(a: number, b: number): number {
  return a + b;
}

//* стрелочная функция
const sum4 = (a: number, b: number): number => {
  return a + b;
};

//* параметр - callback
const fn2 = (сb: () => string): string => {
  return сb();
};

//* параметр - callback
type Callback = () => string;
const fn3 = (сb: Callback): string => {
  return сb();
};

//* явное указание типа void
function sum5(a: number, b: number): void {
  console.log(a, b);
}

//* необязательные параметры (опциональный оператор)
function log(name: string, userID?: string): void {
  console.log('Hello', name, 'with Id', userID);
}

//* параметры по умолчанию
function createPoint(x = 0, y = 0): [number, number] {
  return [x, y];
}

//* неопределенное число параметров - массив (спред-оператор)
function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}
