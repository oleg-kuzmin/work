//# union (Несколько типов)
// Могут быть составлены как из примитивов, так и из литералов.

//* Литералы
type Status = 'ok' | 'loading' | 'error';
const x: Status = 'error';

//* Массив чисел или строк
const arr: (number | string)[] = [];

//* Параметры функции
function printId(id: number | string): void {
  if (typeof id === 'string') console.log(id.toUpperCase());
  else console.log(id);
}
