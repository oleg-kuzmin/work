//# Array.isArray() (ПРОВЕРКА НА МАССИВ)
// Принятый в ES2015 метод проверки элемента - является ли элемент массивом.

//# Cинтаксис
Array.isArray(element);
//* Элемент - проверяемый элемент

//# Возвращает
//* BOOLEAN-значение.
// Возвращает true, если элемент является массивом и false — если нет.

//# Пример
const arr = [1, 2, 3];
const obj = {};

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
