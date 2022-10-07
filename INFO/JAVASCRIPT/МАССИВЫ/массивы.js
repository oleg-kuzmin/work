// TODO Создаёт массив из «массивоподобного» объекта. Метод Array.from
const posts = content.querySelectorAll('.post');
const postsArray = Array.from(posts); // такой вызов вернёт полноценный массив

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

// TODO Метод join. Преобразование массива в строку.
const bremenMusicians = ["Кот", "Пёс", "Трубадур", "Осёл", "Петух"];
console.log(bremenMusicians.join()); // "Кот,Пёс,Трубадур,Осёл,Петух" ПО УМОЛЧАНИЮ ЗАПЯТАЯ
console.log(`Представляем музыкантов: ${bremenMusicians.join(", ")}`); // "Представляем музыкантов: Кот, Пёс, Трубадур, Осёл, Петух"
console.log(bremenMusicians); // при этом с исходным массивом ничего не произошло: ["Кот", "Пёс", "Трубадур", "Осёл", "Петух"]
console.log(bremenMusicians.join(" | ")); // "Кот | Пёс | Трубадур | Осёл | Петух"

// TODO Метод filter. Отсеиванивание элементов массива по признаку.
const a = [1, 9, 2, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 5, 3];
const b = a.filter(function (item) {
  // отберём элементы больше 5
  return item > 5;
});
console.log(b); // [9, 7, 8, 9]

const students = [
  { name: "Oleg", age: "100" },
  { name: "Vlad", age: "22" },
  { name: "Elena", age: "20" },
];

console.log(
  students
    .filter((student) => student.age > 20)
    .map((student) => student.name)
    .join("\n")
);

// TODO Метод push. Добавление элемента в конец массива.
const emeraldCityHeroes = ['Лев', 'Дровосек', 'Страшила'];
emeraldCityHeroes.push('Элли', 'Тотошка');
console.log(emeraldCityHeroes);   // ["Лев", "Дровосек", "Страшила", "Элли", "Тотошка"]

students.push({ name: "Max", age: "24" })
console.log(students);

// TODO Метод unshift. Добавление элемента в начало массива.
const queue = ['Рабочие', 'Школьники', 'Студенты'];
queue.unshift('Пенсионеры', 'Инвалиды');
console.log(queue);  // ["Пенсионеры", "Инвалиды", "Рабочие", "Школьники", "Студенты"]

students.unshift({ name: "Max", age: "24" })
console.log(students);

// TODO Метод shift. Удаление первого элемента массива.
const italyCities = ['Помпеи', 'Рим', 'Неаполь'];
const volcanoEruption = italyCities.shift();
console.log(volcanoEruption); // "Помпеи" метод shift() возвращает удалённый элемент
console.log(italyCities); // ["Рим", "Неаполь"] массив остался без первого элемента

// TODO Метод pop. Удаление последнего элемента массива.
const insects = ['Бабочка', 'Мотылёк', 'Божья коровка', 'Комар'];
console.log(insects.pop()); // "Комар"
console.log(insects); // ["Бабочка", "Мотылёк", "Божья коровка"]

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