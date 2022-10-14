// TODO Метод find. Поиск элемента в массиве.
const birds = ['Ворона', 'Чёрно-белая ворона', 'Белая ворона', 'Ворона обыкновенная'];
const crow = birds.find(function (bird) {
  return bird.includes('ворона');
});
console.log(crow); // "Чёрно-белая ворона"
console.log(students.find(student => student.name === 'Max'));