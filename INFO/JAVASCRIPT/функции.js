// TODO function declaration (заранее объявленная) хранит в себе контекст
function getName() {
  return 'Oleg'     // Oleg
}
function getName() {
  const name = 'Oleg';
  return this.name; // Oleg
}

// вызов функции
getName();

// Параметры по умолчанию text = "текст не добавлен"
function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
}
showMessage("Аня"); // Аня: текст не добавлен

// Параметры по умолчанию text = anotherFunction()
function showMessage(from, text = anotherFunction()) {
  alert( from + ": " + text );
  // anotherFunction() выполнится только если не передан text
  // результатом будет значение text
}

// TODO function expression (функиональное выражение) создается как переменная
const getName = function() {
  return 'Oleg'
}

// TODO Стрелочные функции
// выражение в правой части
let sum = (a, b) => a + b;

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum2 = (a, b) => {
  // ...
  return a + b;
}

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;

// в стрелочной функции нет контекста
const getName = () => {
  const name = 'Oleg';
  return this.name; // вернет name из уровня выше
}
// все что пишется в скобках называется аргументами функции
// в качестве аргумента может быть переменная, объект, массив, если аргумент один скобки можно опустить
const getPriceX2 = (argument) => {
  return argument * 2;
}
const getPriceCar = (carName) => {
  if (carName === 'Lada') return 1000000;
  if (carName === 'Porshe') return 9000000;
  return null;
}








