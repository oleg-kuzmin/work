//# new Number() (КОНСТРУКТОР)
/*
- Number — это обёртка над примитивным числовым типом, которая содержит дополнительные значения и методы работы с числами. Числа автоматически оборачиваются в обёртку Number при вызове методов над ними.
- Если вызывать методы Number на примитиве, JavaScript автоматически обернёт его в обёртку.
- Если вызывать Number как функцию, то она приводит переданный аргумент к числовому типу. Если привести не получается, то вернётся NaN. Таким образом можно избежать использования функций parseInt() и parseFloat(), например, при парсинге числа из поля ввода.
*/

//* создаёт пустой экземпляр класса Number
const myNumber = new Number();

//* создаёт экземпляр класса Number с переданным параметром
const myNumber2 = new Number(100);

//# Возвращает
//* Созданное число.
