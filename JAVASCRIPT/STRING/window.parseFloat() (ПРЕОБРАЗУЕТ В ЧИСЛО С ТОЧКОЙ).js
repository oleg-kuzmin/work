//# window.parseFloat() (ПРЕОБРАЗУЕТ В ЧИСЛО С ТОЧКОЙ)
/*
- Преобразует строку в число с плавающей точкой.
- Возвращает число, полученное из разобранной строки или NaN, если первый символ не удалось преобразовать в число.
- Если строка начинается с чисел, а заканчивается текстовыми символами, то парсинг прервётся на первом символе, который не удастся конвертировать в число.
- Если встречается вторая точка, то остаток строки так же отбрасывается.
*/

//# Синтаксис
parseFloat(string);
//* Строка: string - преобразуемая строка

//# Возвращает
//* Десятичное число.

//# Пример
console.log(parseFloat('12.12')); // 12.12
console.log(parseFloat('12')); // 12
console.log(parseFloat('  12.42')); // 12.42, пробелы в начале игнорируются
console.log(parseFloat('absa')); // NaN
console.log(parseFloat('123.123hello')); // 123.123
console.log(parseFloat('123.456.789')); // 123.456
