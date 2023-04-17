//# Экспорт из модуля
//* Экспорт и импорт по умолчанию
// Отличие импорта по умолчанию — фигурные скобки не ставятся.
// Здесь не важно, как называется функция в файле экспорта.
// Она может быть вообще анонимной, что невозможно при обычном экспорте.
export default function renderItems() {
  // код функции
}
import renderItems from './render-items.js';
renderItems();

//* Экспорт в момент создания
// При импорте такого значения мы используем имя, которое дали при создании.
// Поэтому экспорт в момент объявления называют именованным экспортом.
export const str = 'Я переменная из модуля script-01.js';
export function myFunc() {
  console.log('Я функция из модуля script-01.js');
}
export class Song {
  constructor() {}
}

//* Экспорт после создания
const array = [1, 2, 3, 4];
const arrSquared = arr.map((item) => item * item);
export { array, arrSquared }; // экспорт нескольких значений

//* Экспорт с другим именем (директива export as)
const array1 = [1, 2, 3, 4];
const arrSquared1 = arr.map((item) => item * item);
export { array1 as arr, arrSquared1 as sq };
