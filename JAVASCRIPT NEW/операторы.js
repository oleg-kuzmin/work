//# приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// 19 скобки                    (value)
// 16 постфиксный инкремент     value++ (увеличивает переменную на 1, аналогично value = value + 1, возвращает старое значение)
// 16 постфиксный декремент     value-- (уменьшает переменную на 1, аналогично value = value - 1, возвращает старое значение)
// 15 префиксный инкремент      ++value (увеличивает переменную на 1, аналогично value + 1 = value, возвращает новое значение)
// 15 префиксный декремент      --value (уменьшает переменную на 1, аналогично value - 1 = value, возвращает новое значение)
// 15	унарный плюс	            + (преобразует в число)
// 15	унарный минус	            - (меняет знак числа на противоположный)
// 15 логическое отрицание      !value
// 14	возведение в степень	    **
// 13	умножение	                *
// 13	деление	                  /
// 13 остаток от деления        %
// 12	сложение	                +
// 12	вычитание	                -
// 5  логическое И              &&
// 3  логическое ИЛИ            || ??
// 2	присваивание со сложением +=
// 2	присваивание с вычитанием -=
// 2	присваивание	            =
// 1  запятая                   , (предоставляет возможность вычислять несколько выражений, возвращается результат только последнего)

//# арифметические операторы
/*
1) +   сложение
2) -   вычитание
3) *   умножение
4) **  возведение в степень
5) /   деление
6) % остаток от деления */

//# операторы присваивания
/*
1) =	 оператор присваивания
2) +=	 оператор присваивания со сложением
3) -=	 оператор присваивания с вычитанием
4) *=  оператор присваивания с умножением
5) /=  оператор присваивания с делением */

//# операторы сравнения (return true или false)
/*
1) >   больше
2) <   меньше
3) >=  больше или равно
4) <=  меньше или равно
5) ==  нестрогое равенство
6) !=  нестрогое неравенство
7) === строгое равенство
8) !== строгое неравенство */

//# логические операторы
/*
1) ||  оператор или (вернёт истину, когда хотя бы одно из булевых переменных истинно)
2) &&  оператор и (вернёт истину только когда две булевы переменные истинны)
3) !   оператор не (отрицание, делает из истины ложь, а из лжи — истину) */

//# пример
console.log((365 += 1)); // 366
console.log(7 > 6); // true (больше)
console.log(7 < 6); // false (меньше)
console.log(7 >= 6); // true (больше или равно)
console.log(7 <= 6); // false (меньше или равно)
console.log(7 === 6); // false (проверка на равенство)
console.log(7 !== 6); // true (проверка на неравенство)
console.log("казнить" === "помиловать"); // false (это разные строки)
console.log("казнить" !== "помиловать"); // true (это разные строки)
console.log("2" !== 2); // true (строка "2" не равна числу 2)
console.log("Я" > "А"); // true (строки сравниваются посимвольно)
console.log("Коты" > "Кода"); // true (строки сравниваются посимвольно)
console.log("Сонный" > "Сон"); // true (строки сравниваются посимвольно)
console.log(+true); // 1
console.log(+""); // 0
