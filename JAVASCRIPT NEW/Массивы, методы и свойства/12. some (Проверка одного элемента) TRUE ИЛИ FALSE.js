//# .some()
// Метод some проверяет, есть ли в массиве хотя бы один элемент, который соответствует определённому правилу. Колбэк с этим правилом проверяет каждый элемент и возвращает true или false.

//# пример
const haystack = ['сено', 'сено', 'сено', 'сено', 'лошадь', 'сено', 'сено'];

const needle = haystack.some(function (item) {
  return item === 'иголка';
});
console.log(needle); // false

const horse = haystack.some(function (item) {
  return item === 'лошадь';
});
console.log(needle); // true
