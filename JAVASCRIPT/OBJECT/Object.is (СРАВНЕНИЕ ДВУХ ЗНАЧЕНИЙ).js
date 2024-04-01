//# Object.is (СРАВНЕНИЕ ДВУХ ЗНАЧЕНИЙ)
// Определяет являются ли два значения одним и тем же значением.

//# Синтаксис
Object.is(value1, value2);
//* value1 - первое значение для сравнения.
//* value2 - второе значение для сравнения.

//# Возвращает
//* BOOLEAN-значение.
// Возвращает true, если значения равны.

//# Пример
console.log(Object.is('1', 1)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(-0, 0)); // false
const obj = {};
console.log(Object.is(obj, {})); // false
