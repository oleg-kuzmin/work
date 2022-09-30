// TODO Создаёт массив из «массивоподобного» объекта. Метод Array.from
const posts = content.querySelectorAll('.post');
const postsArray = Array.from(posts); // такой вызов вернёт полноценный массив

// TODO Метод concat. Создает новый массив добавляя элемент.
const toDoList = ['Посадить дерево', 'Построить дом']; // создает новый массив
const toDoListUpdated = toDoList.concat('Вырастить сына'); // Все аргументы, переданные методу, будут добавлены в новый массив в том же порядке
console.log(toDoListUpdated); // ["Посадить дерево", "Построить дом", "Вырастить сына"]

// TODO Метод splice. Замена части элементов массива.
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const removedItems = week.splice(0, 5, 'Воскресенье', 'Суббота', 'Воскресенье', 'Суббота', 'Воскресенье');
console.log(removedItems); // ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"]
console.log(week); // ["Воскресенье", "Суббота", "Воскресенье", "Суббота", "Воскресенье", "Суббота", "Воскресенье"]

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


// TODO  Метод forEach. Функция для каждого элемента массива (ничего не возвращает)
const how = ['быстрее', 'выше', 'сильнее'];
how.forEach(function (item) {
  console.log(item + '.'); // быстрее. выше. сильнее.
});