//# .split()
/* Метод split() позволяет разбить строку на отдельные подстроки. Чаще всего это нужно, чтобы разбить строку на слова.
- Возвращает массив получившихся подстрок.*/

//# пример
//* Метод принимает аргументом разделитель, по которому нужно делить строку на подстроки
const phrase = 'London is the capital of Great Britain.';
const arr = phrase.split(' ');
console.log(arr); // [ 'London', 'is', 'the', 'capital', 'of', 'Great', 'Britain.' ]

//* Если не указать разделитель, то результатом вернётся массив из исходной строки
const phrase2 = 'London is the capital of Great Britain.';
console.log(phrase.split()); // [ 'London is the capital of Great Britain.' ]

//* В качестве разделителя можно передавать регулярное выражение или спецсимволы
const phrase3 = 'London is the\ncapital of\nGreat Britain.';
console.log(phrase.split('\n')); // [ 'London is the', 'capital of', 'Great Britain.' ]
