//# Number.isFinite()
// Метод Number.isFinite() позволяет проверить, является ли переданное в аргументе число конечным. Конечным числом можно считать любое число, кроме бесконечности и NaN. В JavaScript бесконечность можно выразить только с помощью глобального Infinity или полей Number.POSITIVE_INFINITY и Number.NEGATIVE_INFINITY.

Number.isFinite(3.14); // true
Number.isFinite(10e5); // true
Number.isFinite(0); // true
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite([]); // false
Number.isFinite("Двадцать пять"); // false

//# isFinite()
// В JavaScript есть так же глобальная функция isFinite(), которая работает аналогичным образом, но преобразует переданный аргумент в число.

isFinite("Сорок"); // false
isFinite(50); // true
isFinite("101"); // true
isFinite("10e3"); // true
