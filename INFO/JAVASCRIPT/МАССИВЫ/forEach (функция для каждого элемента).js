// TODO Метод forEach. Функция для каждого элемента массива (ничего не возвращает)

//* Синтаксис
arr.forEach(function(item, index, arr) {})

const how = ['быстрее', 'выше', 'сильнее'];
how.forEach(function (item) {
  console.log(item + '.'); // быстрее. выше. сильнее.
});