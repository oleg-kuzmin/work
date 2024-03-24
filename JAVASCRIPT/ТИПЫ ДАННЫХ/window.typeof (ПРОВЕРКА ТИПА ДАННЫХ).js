//# window.typeof (ПРОВЕРКА ТИПА ДАННЫХ)
/*
- Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.
- Если передается выражение, то нужно заключать его в скобки, т.к. typeof имеет более высокий приоритет, чем бинарные операторы.
*/

//# Возвращает
//* Строку с именем типа.

//# Number
typeof 42; // 'number'
typeof 4.2; // 'number'
typeof -42; // 'number'
typeof Infinity; // 'number' (нужно проверять через Number.isFinite)
typeof -Infinity; // 'number' (нужно проверять через Number.isFinite)
typeof NaN; // 'number' (нужно проверять через Number.isNaN)

//# BigInt
typeof 9007199254740991n; // 'bigint'
typeof BigInt(9007199254740991); // 'bigint'

//# String
typeof ''; // 'string'
typeof 'string'; // 'string'
typeof '12345'; // 'string'
typeof 'true'; // 'string'

//# Boolean
typeof true; // 'boolean'
typeof false; // 'boolean'

//# Undefined
typeof undefined; // 'undefined'

//# Symbol
typeof Symbol('id'); // 'symbol'

//# Array
typeof [1, 2, 3]; // 'object' (нужно проверять через Array.isArray)

//# Object
typeof { key: 'value' }; // 'object'
typeof null; // 'object' (официально признанная ошибка)

//# Function
const multiply = () => a * b;
typeof multiply; // 'function' (формально это неверно, но может быть удобным на практике)
