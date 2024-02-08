//# Преобразование (= ЧИСЛО)
/*
- Явное преобразование типов - глобальный объект Number превращает переданный ему аргумент в число.
- Неявное автоматическое преобразование типов к числу происходит когда движок видит арифметические операторы или нестрогие операторы сравнения.
- Но если движок видит оператор +(сложение) и хоть один из операндов строка - происходит неявное строковое преобразование.

Правила:
1. undefined   // NaN
2. null	       // 0
3. true	       // 1
4. false	     // 0
5. string
- Пробельные символы (пробелы, знаки табуляции "\t", знаки новой строки "\n" и прочее) по краям обрезаются.
- Если остаётся пустая строка, то получаем 0,
- Если остается только число, то получаем это число.
- Если остается число и текст, то это ошибка и получаем NaN.
*/

Number('2');                    // 2
Number(null);                   // 0
Number('счастье не за горами'); // NaN
Number(undefined);              // NaN

//# Примеры
console.log('' + 1 + 0);        // "10"      (= СТРОКА) (= СТРОКА)
console.log('' - 1 + 0);        // -1        (= ЧИСЛО)  (= ЧИСЛО)
console.log(true + false);      // 1         (= ЧИСЛО)
console.log(6 / '3');           // 2         (= ЧИСЛО)
console.log('2' * '3');         // 6         (= ЧИСЛО)
console.log(4 + 5 + 'px');      // "9px"     (= ЧИСЛО)  (= СТРОКА)
console.log('$' + 4 + 5);       // "$45"     (= СТРОКА) (= СТРОКА)
console.log('4' - 2);           // 2         (= ЧИСЛО)
console.log('4px' - 2);         // NaN       (= NaN)
console.log('  -9  ' + 5);      // "  -9  5" (= СТРОКА)
console.log('  -9  ' - 5);      // -14       (= ЧИСЛО)
console.log(null + 1);          // 1         (= ЧИСЛО)
console.log(undefined + 1);     // NaN       (= NaN)
console.log(' \t \n' - 2);      // -2        (= ЧИСЛО)
