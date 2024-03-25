//# Типы для параметров функции
//* Строка
function log1(name: string) {
  console.log('Hello', name);
}

//* Строка (опциональный параметр)
function log2(name?: string) {
  console.log('Hello', name || 'anonym');
}

//* Объект
// TS в параматрах-объектах проверяет наличие только ключей-параметров, наличие других ключей не проверяет.
function sum(pont: { x: string; y: string }): void {
  console.log(pont.x);
  console.log(pont.y);
}

//* Сallback
const fn1 = (сb: () => string): string => {
  return сb();
};

//* Сallback
// Можно указать через type.
type Callback = () => string;
const fn2 = (сb: Callback): string => {
  return сb();
};

//* Параметры по умолчанию
function createPoint(x = 0, y = 0): [number, number] {
  return [x, y];
}

//* Неопределенное число параметров
function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}
