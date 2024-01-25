//# Math.random() (СЛУЧАЙНОЕ ЧИСЛО)
// Если ваша задача не подразумевает работу с криптографией (например, вычисление кодов аутентичности) — вам будет достаточно псевдослучайных чисел. Но если такая потребность всё же есть — используйте crypto.getRandomValues() вместо Math.random().

//# Синтаксис
Math.random();
Math.random();

//# Возвращает
//* Число в диапазоне от 0 до 0.9999999999999999

//# Пример
//* Случайное число между 0 и 9.9999999999999999
randomNumber = Math.random() * 10;

//* Случайное число между 0 и 9
randomNumber = Math.floor(Math.random() * 10);

//* Случайный элемент массива
Math.floor(Math.random() * array.length);

//* Случайное целое число в диапазоне, не включая минимальное и максимальное
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(10, 20); // 12

//* Случайное целое число в диапазоне, включая минимальное и максимальное
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(1, 10); // 7
