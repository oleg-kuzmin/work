//# Импорт по умолчанию
import renderItems from './render-items.js';

//# Импорт одного файла
import { str } from './lib.js';

//# Импорт нескольких файлов
import { str, myFunc } from './script-01.js';

//# Импорт всех файлов
import * as data from './data.js';

//# Импорт с переименованием
import { array as arr, arrSquared as sq } from './data.js';

//# Экспорт по умолчанию
export default function renderItems() {}

//# Экспорт одного файла (именованный)
export function renderItems() {}

//# Экспорт после создания
const array = [1, 2, 3, 4];
export { array }; // экспорт нескольких значений

//# Экспорт с переименованием
const arrSquared = arr.map(item => item * item);
export { arrSquared as sq };
