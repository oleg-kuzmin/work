//# Итератор
// Итератор — это объект, который умеет обращаться к элементам коллекции по одному за раз, при этом отслеживая своё текущее положение внутри этой последовательности.

// Иными словами итератор — это такой механизм, который позволяет перемещаться (итерироваться) по элементам коллекции в определённом порядке и делает их доступными.

/* В JavaScript итератор — это объект, который возвращает следующий элемент последовательности, через метод next(). Этот метод возвращает объект с двумя свойствами:
1) value — значение текущего элемента коллекции.
2) done — индикатор, указывающий, есть ли ещё в коллекции значения, доступные для перебора. */

function makeIterator(array) {
  let nextIndex = 0;

  return {
    next: function () {
      if (nextIndex < array.length) {
        const result = { value: array[nextIndex], done: false };
        nextIndex++;
        return result;
      } else {
        return { done: true };
      }
    },
  };
}

// После создания, объект-итератор может быть явно использован, с помощью вызовов метода next():

let iterator = makeIterator(['Hello', 'world']);
console.log(iterator.next().value);
// 'Hello'
console.log(iterator.next().value);
// 'world'
console.log(iterator.next().done);
// true

// Как только метод next() завершает перебор, то возвращается { done: true }. Это является сигналом, что итерирование завершено.

// Практически везде, где нужен перебор, он осуществляется через итераторы. Это включает в себя не только строки, массивы, но и другие структуры данных. В современный JavaScript добавлена новая концепция «итерируемых» (iterable) объектов, например Map, представленный в ES6.

// Это позволяет перебрать итерируемый объект в цикле for..of:

for (let value of ['a', 'b', 'c']) {
  console.log(value);
  // a
  // b
  // c
}

// Чтобы быть итерируемым, объект должен реализовать метод @@iterator. Это означает, что он (или один из объектов в цепочке прототипов) должен иметь свойство Symbol.iterator.

// Предположим, у нас есть объект person, который представляет набор данных:

const person = {
  name: 'Mark',
  age: 30,
  gender: 'male',
  interests: ['music', 'fishing'],
};

// Чтобы сделать такой объект итерируемым (и позволить for..of работать с ним), в нём нужно определить Symbol.iterator:

person[Symbol.iterator] = function () {
  const properties = Object.keys(this);
  let count = 0;

  return {
    next() {
      if (count < properties.length) {
        const key = properties[count];
        let result = { done: false, value: person[key] };
        count++;
        return result;
      } else {
        return { done: true };
      }
    },
  };
};

// Убедимся, что объект person действительно итерируется:

for (let x of person) {
  console.log(x);
  // Mark, 30, male, ['music', 'fishing']
}

//# Встроенные итераторы
// В некоторых случаях интерфейс итератора вызывается по умолчанию. Такие объекты как String, Array, Map и Set являются итерируемыми, потому что их прототипы содержат Symbol.iterator.

//* При деструктуризации итератор используется для доступа к элементам коллекции:
const [a, b] = new Set(['a', 'b', 'c']);
// a
// b

//* Array.from() позволяет конвертировать итерируемый объект в массив:
const arr = Array.from(new Set(['a', 'b', 'c']));
// ['a', 'b', 'c']

//* Спред-оператор (spread) также вызывает интерфейс итератора по умолчанию:
const arr2 = [...new Set(['a', 'b', 'c'])];
// ['a', 'b', 'c']

//* Конструкторы Map и Set преобразуют итерируемые значения в соответственно Map и Set:
const map = new Map([
  ['uno', 'one'],
  ['dos', 'two'],
]);
map.get('uno');
// one
map.get('dos');
// two

const set = new Set(['red', 'green', 'blue']);
set.has('red');
// true
set.has('yellow');
// false
