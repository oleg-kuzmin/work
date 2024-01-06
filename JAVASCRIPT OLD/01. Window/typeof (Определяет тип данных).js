//# typeof (Определяет тип данных)
//* проверка выражения: нужны скобки
console.log(typeof (10 + 5)); // "number"

//* function
function multiply(a, b) {
  return a * b;
}
console.log(typeof multiply); // function

//* undefined
console.log(typeof undefined); // undefined

//# Не работает
//* null
console.log(typeof null); // object (официально признанная ошибка)

//* array
console.log(typeof [1, 2, 3]); // object (нужно делать через Array.isArray())

//* NaN
console.log(typeof NaN); // number (нужно делать через Number.isNaN())

//* Infinity
console.log(typeof Infinity); // number (нужно делать через Number.isFinite())
