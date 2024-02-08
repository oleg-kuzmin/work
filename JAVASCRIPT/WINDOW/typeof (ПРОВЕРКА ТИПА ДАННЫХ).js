//# window.typeof (ПРОВЕРКА ТИПА ДАННЫХ)
// Оператор typeof возвращает строку, указывающую тип операнда.

//# Возвращает
//* Строку с значением типа.

//# Number
typeof 42 === 'number';
typeof 4.2 === 'number';
typeof -42 === 'number';
typeof Infinity === 'number'; // нужно проверять через Number.isFinite()
typeof -Infinity === 'number'; // нужно проверять через Number.isFinite()
typeof NaN === 'number'; // нужно проверять через Number.isNaN()

//# BigInt
typeof 9007199254740991n === 'bigint';
typeof BigInt(9007199254740991) === 'bigint';

//# String
typeof '' === 'string';
typeof 'string' === 'string';
typeof 'number' === 'string';
typeof 'boolean' === 'string';

//# Boolean
typeof true === 'boolean';
typeof false === 'boolean';

//# Undefined
typeof undefined === 'undefined';

//# Object
typeof { key: 'value' } === 'object';
typeof [1, 2, 3] === 'object'; // нужно проверять через Array.isArray()
typeof null === 'object'; // официально признанная ошибка

//# Function
const multiply = () => a * b;
typeof multiply === 'function';

//# Symbol
typeof Symbol() === 'symbol';
