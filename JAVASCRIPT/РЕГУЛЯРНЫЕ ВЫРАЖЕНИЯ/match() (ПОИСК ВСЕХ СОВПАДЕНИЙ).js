//# Метод match()
// Метод match() используется для поиска всех совпадений регулярного выражения в заданной строке. Метод возвращает массив, содержащий все найденные совпадения.
let str6 = 'The quick brown fox jumps over the lazy dog.';
const pattern6 = /the/gi;
str6.match(pattern6); // ["the", "the"]
