// TODO Метод map. Создание одного массива из другого. Возвращает данные
const firstArr = [0, 1, 2, 3, 4];
const secondArr = firstArr.map(function (item) {
  // Берём каждый элемент массива и Возводим каждый элемент в квадрат
  return item * item;
});
console.log(secondArr); // [0, 1, 4, 9, 16]

const studentsName = ["Oleg", "Vlad", "Elena"];
console.log(
  studentsName.map((name, index) => `${index + 1}. ${name}`).join("\n")
);