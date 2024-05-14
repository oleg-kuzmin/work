//# for of (ПЕРЕБОР СВОЙСТВ МАССИВОВ)
/*
- Обходит свойства только итерируемых объектов (iterables) в цикле. Итерируемые - т.е. перебираемые, массивы, псевдомассивы, коллекции и т.п.
- Цикл for of выполнит код из фигурных скобок столько раз, сколько элементов содержится в коллекции, указанной в круглых скобках. Каждое такое повторение называется итерацией.
- При создании цикла в круглых скобках также нужно указать переменную. Обычно для этого объявляют новую переменную и используют её только внутри цикла. На каждой итерации JavaScript будет автоматически записывать в эту переменную очередной элемент коллекции.
*/

//# Синтаксис
for (let переменная of коллекция) {
  // Код, который нужно выполнить несколько раз
}

//# Пример
//* Массив чисел
let arr = [2, 4, 6, 8, 10];
for (let a of arr) {
  log(a); // 2 4 6 8 10
}

//* Псевдомассив элементов HTML
let elements = document.querySelectorAll('p');
for (let element of elements) {
  console.log(element);
}

//# Способ проверить, является ли объект итерируемым
//* Является (есть свойство Symbol.iterator)
const string = new String('Chidume');
console.log(typeof string[Symbol.iterator]); // function

//* Не является (нет свойства Symbol.iterator)
const object = {
  surname: 'Chidume',
};
console.log(typeof object[Symbol.iterator]); // undefined

//# Разница между "for in" И "for of"
let array = [1, 2, 3];
array.property = 'value';

for (let i in array) {
  console.log(i); // выводит "0", "1", "2", "property"
}

for (let i of array) {
  console.log(i); // выводит "1", "2", "3"
}
