//# Number.isFinite() (ПРОВЕРКА НА КОНЕЧНОСТЬ ЧИСЛА)
/*
- Метод Number.isFinite() позволяет проверить, является ли переданное в аргументе число конечным.
- Конечным числом можно считать любое число, кроме бесконечности и NaN.
- В JavaScript бесконечность можно выразить только с помощью глобального Infinity или полей Number.POSITIVE_INFINITY и Number.NEGATIVE_INFINITY.
- В JavaScript есть так же глобальная функция isFinite(), которая работает аналогичным образом, но преобразует переданный аргумент в число.
*/

//# Синтаксис
//* Данные
Number.isFinite(argument);

//# Возвращает
//* BOOLEAN-значение о конечности числа.
// Метод вернёт true если аргумент - нормальное число и false - если нет.

//# Пример
Number.isFinite(3.14); // true
Number.isFinite(10e5); // true
Number.isFinite(0); // true
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite([]); // false
Number.isFinite('Двадцать пять'); // false
