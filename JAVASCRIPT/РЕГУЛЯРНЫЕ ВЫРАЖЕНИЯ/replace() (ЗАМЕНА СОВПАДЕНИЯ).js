//# Метод replace()
// Метод replace() принимает два аргумента: регулярное выражение и строку, на которую нужно заменить найденное совпадение. Этот метод ищет все совпадения с заданным регулярным выражением в исходной строке и заменяет их на указанную строку.
let str7 = 'Привет, мир!';
const pattern7 = /мир/;
str7.replace(pattern7, 'земля'); // "Привет, земля!"