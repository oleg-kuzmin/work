// возвращает случайное число между 0 и 1, включая ноль, но не включая единицу
let randomNumber = Math.random();

// возвращает случайное число между 0 и 9.999999999999
randomNumber = Math.random() * 10

// округление до целых вниз
randomNumber = Math.floor(randomNumber);


// ценерация целого числа в диапазоне, не включая минимальное и максимальное.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(10, 20) // 12

// Случайное целое число в диапазоне, включая минимальное и максимальное.
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(1, 10) // 7
