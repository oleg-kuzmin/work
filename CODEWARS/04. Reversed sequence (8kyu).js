//# Reversed sequence (8kyu)
/*
Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
Example : n=5 --> [5,4,3,2,1]
*/

//* мое решение
const reverseSeq = n => {
  const array = [];

  do {
    array.push(n);
    n -= 1;
  } while (n > 0);

  return array;
};

console.log(reverseSeq(5));

//* лучшее на сайте
const reverseSeq2 = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
