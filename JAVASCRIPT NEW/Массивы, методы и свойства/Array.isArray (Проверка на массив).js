//# Array.isArray ()
// Принятый в ES2015 метод проверки элемента - является ли элемент массивом.

//# пример
const arr = [1, 2, 3];
const obj = {};

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
