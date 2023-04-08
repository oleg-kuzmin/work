//# .find()
// Метод find очень похож на some. Единственное отличие: some возвращает булево значение, а find — значение элемента, на котором он завершил проверку.

//# пример
const birds = ['Ворона', 'Чёрно-белая ворона', 'Белая ворона', 'Ворона обыкновенная'];

const includesCrow = birds.some(function (bird) {
  return bird.includes('ворона');
});

const crow = birds.find(function (bird) {
  return bird.includes('ворона');
});

console.log(includesCrow); // true
console.log(crow); // "Чёрно-белая ворона"
