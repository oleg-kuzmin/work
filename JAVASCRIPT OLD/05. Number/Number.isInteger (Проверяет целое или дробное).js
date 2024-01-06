//# Number.isInteger() (Проверяет целое или дробное)
// Метод Number.isInteger принимает число как аргумент и проверяет, целое оно или дробное.

//# пример
const eightAndAHalf = 8.5;
Number.isInteger(eightAndAHalf); // false
Number.isInteger(Math.floor(eightAndAHalf)); // true
