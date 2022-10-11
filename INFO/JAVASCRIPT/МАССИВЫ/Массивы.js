// TODO  Метод slice. Получение части массива.
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const spring = months.slice(2, 5);
console.log(spring); // ["Март", "Апрель", "Май"]
console.log(months); // исходный массив остался нетронутым

// TODO Метод find. Поиск элемента в массиве.
const birds = ['Ворона', 'Чёрно-белая ворона', 'Белая ворона', 'Ворона обыкновенная'];
const crow = birds.find(function (bird) {
  return bird.includes('ворона');
});
console.log(crow); // "Чёрно-белая ворона"
console.log(students.find(student => student.name === 'Max'));


// TODO Метод forEach. Функция для каждого элемента массива (ничего не возвращает)
const how = ['быстрее', 'выше', 'сильнее'];
how.forEach(function (item) {
  console.log(item + '.'); // быстрее. выше. сильнее.
});

// TODO Метод some. Проверка элементов массива.
const oceanResidents = ['Флаундер', 'Немо', 'Губка Боб', 'Аквамен'];
const nemo = oceanResidents.some(function (resident) {
    return resident === 'Немо';
});
console.log(nemo); // true


// TODO Метод every. Проверка всех элементов массива.
const jokes = ['смешная шутка и доля правды', 'не очень смешной анекдот + доля правды', 'доля правды в дурацкой шутке'];
const allJokesWithTruth = jokes.every(function (joke) {
  return joke.indexOf('доля правды') > -1;
});
console.log(allJokesWithTruth); // true


// TODO Метод reduce. Сведение массива.
  //числа или строки
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce(function (previousValue, item) {
  return previousValue + item; //прибавь текущий элемент массива к тому, что получилось на предыдущей итерации
});
console.log(sum);

  //числа или строки со вторым аргументом - начальным значением
const winsAndLoses = [190, 117, -381, -394, -36, 137, -473, 372, -383];
const total = winsAndLoses.reduce(function (previousValue, item) {
    return previousValue + item;
}, 1000); // Начальное значение передаём методу reduce как второй аргумент.
console.log(total); // 149. Чего ещё ожидать от азартных игр?

  //второй аргумент пустой объект
const order = ['яблоко', 'банан', 'апельсин', 'банан', 'яблоко', 'банан'];
const result = order.reduce(function (prevVal, item) {
  if (!prevVal[item]) { // если ключа ещё нет в объекте, значит это первое повторение
    prevVal[item] = 1;
  } else {     // иначе увеличим количество повторений на 1
    prevVal[item] += 1;
  }
  return prevVal; // и вернём изменённый объект
}, {}); // Начальное значение — пустой объект.
console.log(result); // { яблоко: 2, банан: 3, апельсин: 1 }