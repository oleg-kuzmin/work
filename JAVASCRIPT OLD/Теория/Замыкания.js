//# Замыкания

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

//# Операторы короткого замыкания
// && ||
// Означает, что js может не выполнять оценку всех операндов в выражении.
