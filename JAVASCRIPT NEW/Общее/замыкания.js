// Допустим, мы хотим сделать счётчик, который можно увеличивать и уменьшать только на единицу:

function counter() {
  // Начальное значение счётчика будет 0.
  let state = 0;

  // Функция increase будет увеличивать счётчик на единицу.
  function increase() {
    state++;
  }

  // Функция decrease будет уменьшать счётчик на единицу.
  function decrease() {
    state--;
  }

  // Функция valueOf будет выводить значение.
  function valueOf() {
    console.log(state);
  }

  // А наружу мы дадим только лишь доступ к этим функциям. Вернём объект, значениями полей которого будут функции increase и decrease.

  // Прямого доступа к переменной state всё ещё нет, но внешний код может изменять её состояние опосредованно — через функции increase и decrease.

  return {
    increase,
    decrease,
    valueOf,
  };
}

const ticktock = counter();
ticktock.increase();
ticktock.valueOf();
// 1
ticktock.increase();
ticktock.valueOf();
// 2
ticktock.decrease();
ticktock.valueOf();
// 1

// Такое контролируемое сокрытие доступа с помощью области видимости называется замыканием.

// Замыкания удобны тем, что каждый новый вызов создаёт отдельную область, в которой значения абсолютно независимы друг от друга:
// Состояния счётчиков друг от друга не зависят, хотя они создаются одной и той же функцией.

function Counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = Counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const anotherCounter = Counter();
console.log(anotherCounter()); // 1
console.log(anotherCounter()); // 2
console.log(anotherCounter()); // 3
