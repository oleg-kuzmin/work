//# typeof - определяет тип данных и возвращает строку с именем типа
//* проверка на массив не получится: делается через Array.isArray()
const arr = [1, 2, 3];
console.log(typeof arr); // object

//* проверка на функцию: работает
function multiply(a, b) {
  return a * b;
}
console.log(typeof multiply); // function

//* проверка на null: официально признанная ошибка
console.log(typeof null); // object

//* проверка на undefined: работает
console.log(typeof undefined); // undefined

//* проверка на NaN: делается через Number.isNaN()
console.log(typeof NaN); // number

//* проверка на Infinity: делается через Number.isFinite()
console.log(typeof Infinity); // number

//* проверка выражения: нужны скобки
console.log(typeof (10 + 5)); // "number"
