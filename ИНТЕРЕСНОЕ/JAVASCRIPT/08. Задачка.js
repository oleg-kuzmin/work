//# script1
/*
- проверить что из набора букв можно составить T I N K O F F
- нет лишних букв, должны быть использованы все буквы

1. Строка - количество наборов t (1 <= t <= 100)
2. Единственная строка каждого набора входных данных содержит одну непустую строку из больших латинских букв длиной не более 20 символов — привезённый набор букв.

Для каждого набора входных данных, в отдельной строке, выведите Yes или No
Вы можете выводить каждую букву в любом регистре (строчную или заглавную).
*/

const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
const searchedValues = ['T', 'I', 'N', 'K', 'O', 'FF'];
let numberOfLine = 0;
let maxLine;
let arrayRes = [];

rl.on('line', value => {
  if (numberOfLine === 0) {
    maxLine = Number(value);
    numberOfLine++;
  } else {
    arrayRes.push(isValidKit(value));
    numberOfLine++;
    if (numberOfLine === maxLine + 1) {
      arrayRes.forEach(element => {
        console.log(element);
      });
      rl.close();
    }
  }
});

function isValidKit(string) {
  let isValid;

  if (string.length !== 7) {
    isValid = false;
  } else isValid = searchedValues.every(item => string.includes(item));

  return isValid ? 'Yes' : 'No';
}
