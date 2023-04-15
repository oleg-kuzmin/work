//# Math.random()
// Возвращает случайное число.

//# пример
//* случайное число от 0 включительно до 1 не включительно
let randomNumber = Math.random();

//* случайное число между 0 и 9.999999999999
randomNumber = Math.random() * 10;

//* случайный элемент массива
Math.floor(Math.random() * array.length);

//* ценерация целого числа в диапазоне, не включая минимальное и максимальное
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(10, 20); // 12

//* ценерация целого числа в диапазоне, включая минимальное и максимальное
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(1, 10); // 7

//# общая информация
// Если ваша задача не подразумевает работу с криптографией (например, вычисление кодов аутентичности) — вам будет достаточно псевдослучайных чисел. Но если такая потребность всё же есть — используйте crypto.getRandomValues() вместо Math.random().
