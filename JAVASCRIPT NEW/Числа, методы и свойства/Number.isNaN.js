//# Number.isNaN()
// Статический метод Number.isNaN() проверяет переданное аргументом значение и возвращает true, если это значение NaN.

Number.isNaN(NaN); // true
Number.isNaN(); // false
Number.isNaN(42); // false
Number.isNaN("42"); // false
Number.isNaN(null); // false
Number.isNaN(undefined); // false
Number.isNaN(false); // false

//# isNaN()
// В JavaScript есть так же глобальная функция isNaN(), но она работает не всегда так, как ожидается и возвращает true и при значениях, отличных от NaN. Отличие заключается в том, что глобальная функция isNaN() приводит к числовому типу всё, что было в неё передано, если оно не является числом. Если в результате приведения был получен NaN, она возвращает true.

isNaN(undefined); // true
Number.isNaN(undefined); // false
