//# for..of
// Циклически повторяет итерируемые объекты (iterables). Таким образом, цикл for...of не может быть использован, если объект, вокруг которого должен быть совершен цикл, не является итерируемым. Объекты должны обладать свойством @@iterator, чтобы использоваться в цикле for...of, в соответствии с протоколом iterable.

//# пример
let arr = [2, 4, 6, 8, 10];
for (let a of arr) {
  log(a); // 2 4 6 8 10
}

//# общая информация
/*
Примеры итерируемых объектов:
1) String
2) Map
3) TypedArray
4) Array
5) Set
6) Generator
*/

//# способ проверить, является ли объект итерируемым
//* является
const str = new String('Chidume');
log(typeof str[Symbol.iterator]); // function

//* не является
const obj = {
  surname: 'Chidume',
};
log(typeof obj[Symbol.iterator]); // undefined
