//# Break camelCase (6kyu)
/*
Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//* мое решение
function solution(string) {
  return string
    .split('')
    .map(item => {
      return item === item.toUpperCase() ? ' ' + item : item;
    })
    .join('');
}

//* лучше на сайте (думал использовать регулярки, ну а вдруг это не латиница?)
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

//* интересно
const solution = string => {
  return [...string]
    .map(char => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join('');
};
