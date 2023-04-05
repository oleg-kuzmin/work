//# .split()
/* Метод split() позволяет разбить строку на отдельные подстроки.
- Метод принимает аргументом разделитель, по которому нужно делить строку на подстроки.
- Чаще всего это нужно, чтобы разбить строку на слова.
- Возвращает массив получившихся подстрок. */

//# пример
//* деление по словам
const phrase = 'London is the capital of Great Britain.';
const arr = phrase.split(' ');
console.log(arr); // [ 'London', 'is', 'the', 'capital', 'of', 'Great', 'Britain.' ]

//* деление по буквам
const testPhraze = 'хлеб да соль';
console.log(testPhraze.split('')); // [ 'х', 'л', 'е', 'б', '', 'д', 'а', '', 'с', 'о', 'л', 'ь' ]

//* без разделителя - массив из 1 строки
const phrase2 = 'London is the capital of Great Britain.';
console.log(phrase.split()); // [ 'London is the capital of Great Britain.' ]

//* регулярное выражение или спецсимволы
const phrase3 = 'London is the\ncapital of\nGreat Britain.';
console.log(phrase.split('\n')); // [ 'London is the', 'capital of', 'Great Britain.' ]
