//# Number.isNaN() (ПРОВЕРКА НА NAN)
/*
- Статический метод Number.isNaN() проверяет переданное аргументом значение и возвращает true, если это значение NaN.
- В JavaScript есть так же глобальная функция isNaN(), которая работает аналогичным образом, но преобразует переданный аргумент в число.
*/

//# Синтаксис
//* Данные
Number.isNaN(argument);

//# Возвращает
//* BOOLEAN-значение о NaN.
// Метод вернёт true если аргумент - NaN и false - если нет.

//# Пример
Number.isNaN(NaN); // true
Number.isNaN(); // false
Number.isNaN(42); // false
Number.isNaN('42'); // false
Number.isNaN(null); // false
Number.isNaN(undefined); // false
Number.isNaN(false); // false
