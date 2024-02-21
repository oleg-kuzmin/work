//# union (ОБЪЕДИНЕНИЕ ТИПОВ ЧЕРЕЗ ИЛИ)
// Могут быть составлены как из примитивов, так и из литералов.

//* конкретные значения (литералы)
type Status = 'ok' | 'loading' | 'error';
const x: Status = 'error';

//* массив чисел или строк
const arr: (number | string)[] = [];

//* параметры функции
function printId(id: number | string): void {
  if (typeof id === 'string') console.log(id.toUpperCase());
  else console.log(id);
}
