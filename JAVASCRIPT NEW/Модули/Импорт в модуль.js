//# Импорт в модуль
import { str } from './lib.js'; // нужно использовать как объект {}
import { str, myFunc } from './script-01.js'; // несколько элементов из одного файла

console.log(str); // "Я переменная из модуля script-01.js"
myFunc(); // "Я функция из модуля script-01.js"
