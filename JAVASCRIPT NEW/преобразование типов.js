//# строковое преобразование
// Происходит, когда требуется представление чего-либо в виде строки.
value = String(value); // отдельный метод строкового преобразования

//# численное преобразование
// Происходит в математических функциях и выражениях.
value = Number(value); // отдельный метод численного преобразования

/*
1) /
2) *
3) **
4) -
5) %
6) + (если хоть один из операндов строка - происходит СТРОКОВОЕ преобразование)

1) undefined   : NaN
2) null	       : 0
3) true/false	 : 1/0
4) string      : Пробельные символы (пробелы, знаки табуляции "\t", знаки новой строки "\n" и прочее) по краям обрезаются.
Если остаётся пустая строка, то получаем 0,
Если остается только число, то получаем это число.
Если остается число и текст, то это ошибка и получаем NaN.*/

//* пример
console.log("" + 1 + 0);   // "10"
console.log("" - 1 + 0);    // -1
console.log(true + false);  // 1
console.log(6 / "3");       // 2
console.log("2" * "3");     // 6
console.log(4 + 5 + "px");  // "9px"
console.log("$" + 4 + 5);   // "$45"
console.log("4" - 2);       // 2
console.log("4px" - 2);     // NaN
console.log("  -9  " + 5);  // "  -9  5"
console.log("  -9  " - 5);  // -14
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2);  // -2

//# логическое преобразование
// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false. Все остальные становятся true.
value = Boolean(value); // отдельный метод логического преобразования

//* пример
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("Привет!")); // true
console.log(Boolean(""));        // false
console.log(Boolean("0"));       // true
console.log(Boolean(" "));       // пробел это тоже true (любая непустая строка это true)
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
