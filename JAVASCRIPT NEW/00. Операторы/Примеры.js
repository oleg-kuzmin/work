//# пример
let yearDays = 365;
console.log((yearDays += 1)); // 366
console.log(7 > 6); // true (больше)
console.log(7 < 6); // false (меньше)
console.log(7 >= 6); // true (больше или равно)
console.log(7 <= 6); // false (меньше или равно)
console.log(7 === 6); // false (проверка на равенство)
console.log(7 !== 6); // true (проверка на неравенство)
console.log('казнить' === 'помиловать'); // false (это разные строки)
console.log('казнить' !== 'помиловать'); // true (это разные строки)
console.log('2' !== 2); // true (строка "2" не равна числу 2)
console.log('Я' > 'А'); // true (строки сравниваются посимвольно)
console.log('Коты' > 'Кода'); // true (строки сравниваются посимвольно)
console.log('Сонный' > 'Сон'); // true (строки сравниваются посимвольно)
console.log(+true); // 1
console.log(+''); // 0
console.log(1 || 0); // 1
console.log(true || 'no matter what'); // true
console.log(null || 1); // 1 (первое истинное значение)
console.log(null || 0 || 1); // 1 (первое истинное значение)
console.log(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)
console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && 'no matter what'); // 0
console.log(!true); // false
console.log(!0); // true
console.log(!!'non-empty string'); // true
console.log(!!null); // false
console.log('' + 1 + 0); // "10"
console.log('' - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / '3'); // 2
console.log('2' * '3'); // 6
console.log(4 + 5 + 'px'); // "9px"
console.log('$' + 4 + 5); // "$45"
console.log('4' - 2); // 2
console.log('4px' - 2); // NaN
console.log('  -9  ' + 5); // "  -9  5"
console.log('  -9  ' - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(' \t \n' - 2); // -2
