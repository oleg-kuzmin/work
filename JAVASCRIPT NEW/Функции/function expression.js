//# function expression
// Объявленную функцию можно вызвать до объявления, функциональное выражение — нельзя.

const hello = function (name) {
  console.log(`Привет ${name}`);
};

//# стрелочные функции (нет контекста выполнения)
//* одно выражение в правой части (можно опустить return)
const sum = (a, b) => a + b;

//* многострочный код (здесь нужен return)
const sum2 = (a, b) => {
  return a + b;
};

//* без аргументов
const sayHi = () => alert('Привет');

//* с одним аргументом (если аргумент один скобки можно опустить)
const double = (n) => n * 2;
