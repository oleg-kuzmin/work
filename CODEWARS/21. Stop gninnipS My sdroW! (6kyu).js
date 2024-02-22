//# Stop gninnipS My sdroW! (6kyu)
/*
- Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но со всеми словами, в которых пять или более букв перевернуты (точно так же, как название этой ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.

Examples:
"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test"       --> "This is a test"
"This is another test" --> "This is rehtona test"
*/

//* мое решение
function spinWords(string) {
  return string
    .split(' ')
    .map(item => (item.length >= 5 ? item.split('').reverse().join('') : item))
    .join(' ');
}

//* лучшее на сайте
function spinWords(words) {
  return words
    .split(' ')
    .map(function (word) {
      return word.length > 4 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
}
