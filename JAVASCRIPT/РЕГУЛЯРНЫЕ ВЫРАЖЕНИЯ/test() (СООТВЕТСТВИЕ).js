//# test() (СООТВЕТСТВИЕ)
// Метод test() проверяет, соответствует ли регулярное выражение заданной строке.

//# Синтаксис
pattern.test(string);
//* 1. pattern - Регулярное выражение
//* 2. string - Заданная строка

//# Возвращает
//* BOOLEAN-значение.
// Возвращает true, если строка соответствует регулярному выражению, и false, если не соответствует.

//# Пример
let string = 'Hello, world!';
const pattern = /Hello/;
pattern.test(str); // true
