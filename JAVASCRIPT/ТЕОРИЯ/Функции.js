//# Функции
/*
- Если функцию передают как аргумент, её называют «колбэком».
- Если мы используем Function Declaration, то JavaScript перенесёт функции вверх текущей области видимости. Это называется «поднятие» (или hoisting).
- На практике это означает, что мы можем использовать Function Declaration до своего же объявления. Пишем — заработай, и где-то потом объясняем как.
- Обычно имя функции пишут стилем camelCase и используют в начале глагол. Отвечает на вопрос: что делает эта функция?.
- Как и массивы, функции в JavaScript — это объекты с дополнительными методами.
- Но при показе кода функции в консоли выводится только код функции.
*/

//# 1. function declaration
//* может принимать аргументы
function showMessage(user, message) {
  console.log(user + ': ' + message);
}

//* использование параметра по умолчанию
function showMessage(from, text = 'текст не добавлен') {
  console.log(from + ': ' + text);
}

//* использование в качестве параметра по умолчанию вызов другой функции (text = anotherFunction())
function showMessage(from, text = anotherFunction()) {
  console.log(from + ': ' + text);
  // если параметр text не передан, то выполнится функция anotherFunction()
}

//* рекурсивные функции (внутри функции вызывает сама себя)
function fac(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}
console.log(fac(3)); // 6

//# 2. function expression
const hello = function (name) {
  console.log(`Привет ${name}`);
};

//# 3. Стрелочные функции
// Стрелочными могут быть только функциональные выражения.

//* несколько параметров
const boatDeparture = (eater, food) => {
  console.log(`через речку в лодке поплывут ${eater} и ${food}`);
};
boatDeparture('козёл', 'капуста');

//* использование параметра по умолчанию
const showMessage = (from, text = 'текст не добавлен') => console.log(from + ': ' + text);

//* без параметров
const sayHi = () => alert('Привет');

//* короткая запись параметров
// Если у стрелочной функции один параметр, можно не заключать его в скобки
const boatArrival = survivor => {
  console.log(`до другого берега доберётся только ${survivor}`);
};

//* короткий return
// Если директива return — единственное действие в теле стрелочной функции, можно опустить и директиву return, и фигурные скобки
const shorterSingleAnecdote = anecdote => `я знаю только один анекдот: ${anecdote}`;

//* объект
// Если возвращаемое значение — объект, его нужно заключить в круглые скобки. Иначе то, что в фигурных скобках, движок воспримет как тело функции.
const colorHex = () => ({ white: '#FFF' });

//# arguments
// Переменная arguments создаётся внутри функции при объявлении и содержит все переданные аргументы. В строгом режим мы не можем менять значения аргументов, обращаясь к ним по индексам.

function consoleDog(dog) {
  console.log(arguments[0]);
}

consoleDog('Джек Рассел'); // "Джек Рассел"
