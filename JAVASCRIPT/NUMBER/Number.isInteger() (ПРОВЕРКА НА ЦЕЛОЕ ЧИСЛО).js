//# Number.isInteger() (ПРОВЕРКА НА ЦЕЛОЕ ЧИСЛО)
// Метод Number.isInteger принимает число как аргумент и проверяет, целое оно или дробное.

//# Синтаксис
//* Число
Number.isInteger(number);

//# Возвращает
//* BOOLEAN-значение о том целое или дробное это число.
// Метод вернёт true если аргумент - целое число и false - если нет.

//# Пример
const eightAndAHalf = 8.5;
Number.isInteger(eightAndAHalf); // false
Number.isInteger(Math.floor(eightAndAHalf)); // true
