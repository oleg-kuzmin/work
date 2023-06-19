//# Тип данных - number
/*
- Тип данных «число» (number) содержит числа с плавающей точкой в диапазоне от -(253 − 1) до 253 − 1, а также специальные значения Infinity, -Infinity и NaN.
- Для этого типа данных определены стандартные арифметические операции сложения +, вычитания -, умножения *, деления /, взятия остатка от целочисленного деления %, сравнения >, <, >=, <=, ==, ===
- В JavaScript отсутствует отдельный тип данных для целых чисел, для целых чисел также используется тип number.
- Сам по себе примитивный тип «число» не имеет методов. Когда происходит вызов метода у числа, оно автоматически оборачивается в специальную обёртку, которая и содержит методы.
- Для округления, взятия корней и других математических операций в JavaScript существует отдельный модуль Math.
*/

//# Число с плавающей точкой
/*
- Число в JavaScript представлено в виде 64-битного формата IEEE-754. Формат хранит произвольное число в виде трёх значений: 1 бит на знак числа, 52 бита значения числа и ещё 11 бит местоположения точки. С таким подходом можно эффективно хранить значения в большом диапазоне от -(253 − 1) до 253 − 1.
- Из-за того, что положение точки в числе хранится отдельным значением, формат и называется числом с плавающей точкой (floating point number).
- Проблема этого представления в том, что оно не может представить числа абсолютно точно, а только с некоторой погрешностью.
/*

//# Неточные вычисления
/*
- В десятичной системе счисления есть числа, которые не могут быть записаны точно. Например, треть ¹⁄₃ записывается как бесконечная дробь 0.33(3).
- Компьютер хранит данные в двоичном виде — наборе нулей и единиц. В этой системе счисления тоже есть дроби, которые не могут быть записаны точно. В этом случае формат округляет значение до ближайшего представимого. При арифметических операциях эти неточности складываются и приводят к эффектам, подобным этому: console.log(0.2 + 0.7) // 0.8999999999999999
- Это не ошибка JavaScript, а фундаментальная особенность хранения дробных чисел в памяти компьютера, с ней нужно уметь работать. Для уменьшения эффекта используется комбинация подходов — использовать как можно меньше дробных значений, а когда этого невозможно избежать — округлять числа, тем самым сбрасывая накопившийся остаток.
- Например, если ваша система работает с деньгами, то лучше хранить цены в копейках или центах. Это позволит избежать большого количества операций с дробями. Для вывода цен можно пользоваться методом toFixed, который округлит число до указанного разряда:
- Похожую проблему можно наблюдать при сравнении очень маленьких и очень больших чисел. В таких случаях из-за округления точность теряется и различные числа компьютер представляет одинаковыми.
*/

//# Специальные значения
/*
- Стандарт IEEE-754 определяет три специальных значения. Эти значения принадлежат типу number, но не работают, как обычные числа:
1) Infinity (бесконечность)
2) -Infinity (минус бесконечность)
3) NaN (не число - not a number)

- Бесконечности используются, чтобы определить результат некоторых арифметических операций.
- Например, деление на ноль в JavaScript вернёт бесконечность.
- Если попытаться создать число, которое находится вне диапазона доступных чисел, результатом будет тоже бесконечность.

- Значение NaN используется, чтобы сообщить об операции, результатом которой оказалось не число.
- В JavaScript существует пять операций, которые могут вернуть NaN:
1) ошибка парсинга числа (например, при попытке превратить строку в число parseInt('привет'))
2) результат математической операции не находится в полей действительных чисел (например, взятие корня от -1)
3) один из операндов в арифметической операции — NaN (5 + NaN)
4) результат арифметической операции не определён для переданных операндов (undefined + undefined)
5) арифметическая операция со строкой, кроме сложения ('привет' * 5)

- Согласно спецификации, NaN не равен самому себе. Проверить, что в переменной хранится NaN простым сравнением не получится
- Для проверки на NaN пользуйтесь функцией Number.isNaN(), которая возвращает true если переданное значение — NaN.
- Для проверки, что значение в переменной является конечным числом, а не специальным значением, пользуйтесь функцией Number.isFinite(), она возвращает true, если переданный аргумент — число.
*/

//* для записи чисел используются цифры, для разделения целой и десятичной части используется точка
const int = 4;
const decimal = 0.101;
const sameDecimal = 0.101;

//* можно использовать экспоненциальную запись, например, один миллион в экспоненциальной записи
const scientific = 1e6; // 1000000

//* числа так же могут быть представлены в двоичном, восьмеричном или шестнадцатеричном виде. Такие числа начинаются с приставки 0b, 0o, 0x соответственно. При выводе на экран они будут преобразованы в десятичную систему счисления
const binary = 0b11; // 3
const octal = 0o77; // 63
const hexadecimal = 0xff; // 255

//* бесконечность Infinity
console.log(5 / 0); // деление на 0 - это бесконечность (Infinity)
console.log(-3 / 0); // если разделить на 0 отрицательное число получим минус бесконечность (-Infinity)
console.log(Infinity - 1000000000); // бесконечность минус что угодно — бесконечность (Infinity)
console.log(Infinity + -Infinity); // NaN
console.log(Infinity * 0); // NaN
console.log(Infinity * -1); // -Infinity
console.log(Infinity * -Infinity); // -Infinity

//* не число (not a number) NaN
const result = NaN;
console.log(Number.isNaN(result)); // true
console.log(typeof NaN); // "number"
console.log(NaN === NaN); // false

//* неточные вычисления
console.log(0.2 + 0.7); // 0.8999999999999999

//* сравнение очень маленьких и очень больших чисел
const small = 0.11111111111111111;
const smaller = 0.1111111111111111;
console.log(small.toFixed(20)); // 0.11111111111111110494
console.log(smaller.toFixed(20)); // 0.11111111111111110494
console.log(small === smaller); // true

//* операции с числами
const a = 5;
const b = 10;
console.log(-a); // -5
console.log(a + b); // 15
console.log(a - b); // -5
console.log(a / b); // 0.5
console.log(a * b); // 50
console.log((a + b) / 10); // 1.5

//* оператор взятия остатка от деления
console.log(5 % 2); // 1
console.log(5 % 3); // 2
console.log(5 % 5); // 0

//* возведение в степень
console.log(2 ** 4); // 16

//* операторы сравнения, возвращают булевое значение
console.log(5 > 10); // false
console.log(5 >= 10); // false
console.log(5 < 10); // true
console.log(10 <= 10); // true
console.log(5 == 10); // false
console.log(5 === 10); // false
console.log(5 != 10); // true
console.log(5 !== 10); // true

//* числовой разделитель
const number = 1_000_000; // 1000000
const binary2 = 0b0101_1111_0001;
const hex = 0x12_ab_34_cd;
const bigInt = 1_234_567_890n;
