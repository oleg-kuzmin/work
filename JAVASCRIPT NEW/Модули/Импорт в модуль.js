//# Импорт в модуль
//* Экспорт и импорт по умолчанию
// Отличие импорта по умолчанию — фигурные скобки не ставятся.
// Здесь не важно, как называется функция в файле экспорта.
// Она может быть вообще анонимной, что невозможно при обычном экспорте.
export default function renderItems() {
  // код функции
}
import renderItems from './render-items.js';
renderItems();

//* Импорт одного файла
import { str } from './lib.js'; // нужно использовать как объект {}
console.log(str);

//* Импорт нескольких файлов
import { str, myFunc } from './script-01.js'; // несколько элементов из одного файла
console.log(myFunc);

//* Импорт всех файлов
// Если импортировать нужно всё, что экспортирует модуль, имена объектов можно не перечислять, а просто поставить *.
// Но лучше не импортировать через *. Такой код сложнее читать: не видно, что конкретно импортируется из файла data.js.
import * as data from './data.js';
console.log(data.array);
console.log(data.arrSquared);

//* Имя модуля: директива import as
import { array as arr, arrSquared as sq } from './data.js'
console.log(arr);
console.log(sq);
