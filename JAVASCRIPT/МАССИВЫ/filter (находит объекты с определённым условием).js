// TODO Метод filter. Отсеиванивание элементов массива по признаку.

//* Синтаксис
arr.filter(function (item, index, arr) {});
// находит объекты с определённым условием
// eсли функция возвращает true, поиск не прерывается, возвращается arr

const a = [1, 9, 2, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 5, 3];
const b = a.filter(function (item) {
  // отберём элементы больше 5
  return item > 5;
});
console.log(b); // [9, 7, 8, 9]

const students = [
  { name: "Oleg", age: "100" },
  { name: "Vlad", age: "22" },
  { name: "Elena", age: "20" },
];

console.log(
  students
    .filter((student) => student.age > 20)
    .map((student) => student.name)
    .join("\n")
);
