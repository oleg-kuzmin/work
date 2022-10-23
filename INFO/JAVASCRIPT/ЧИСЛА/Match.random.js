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
