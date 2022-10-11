const todos = [
  {
    name: "shop",
    isCompleted: true,
  },
  {
    name: "clean",
    isCompleted: true,
  },
  {
    name: "byu",
    isCompleted: false,
  },
];

// Запись localStorage
// JSON.stringify - перевод в json-строку
localStorage.setItem("todos", JSON.stringify(todos)); // 1 аргумент ключ, второй значение

// Получение элемента localStorage
// JSON.parse - получение данных из json-строки
console.log(JSON.parse(localStorage.getItem("todos")));