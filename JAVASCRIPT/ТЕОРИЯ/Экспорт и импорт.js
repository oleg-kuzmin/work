//# По умолчанию
//* Импорт по умолчанию
import renderItems from './render-items.js';
//* Экспорт по умолчанию
export default function renderItems() {}

//# Именованный
//* Импорт одного файла
import { str } from './lib.js';
//* Импорт нескольких файлов
import { str, myFunc } from './script-01.js';
//* Экспорт одного файла
export function renderItems() {}

//# С переименованием
//* Импорт с переименованием
import { array as arr, arrSquared as sq } from './data.js';
//* Экспорт с переименованием
const arrSquared = arr.map(item => item * item);
export { arrSquared as sq };

//# Все файлы
//* Импорт всех файлов
import * as data from './data.js';
