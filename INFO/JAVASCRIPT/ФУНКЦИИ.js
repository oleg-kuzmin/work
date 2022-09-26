//Объявления
// function declaration (заранее объявленная) хранит в себе контекст
function getName() {
  return 'Oleg'     // Oleg
}
function getName() {
  const name = 'Oleg';
  return this.name; // Oleg
}

// вызов функции
getName();

// function expression (функиональное выражение || стрелочная функция) создается как переменная
const getName = () => {
  return 'Oleg'
}

// можно сократить до вида
const getName2 = () => 'Oleg2'; // без скобок {} указать просто строку

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