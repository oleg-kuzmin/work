//# Тип данных object
// Объект (object) — это набор свойств. Каждое свойство состоит из названия и значения. Название может быть строкой или символом, а значение может быть любым.

//# пример
//* создание объекта
const сat = {
  name: "Том",
  age: 3,
  isBlack: true,
  kittens: ["Беляш", "Михаил", "Чарли"],
  favoriteToy: {
    name: "мячик",
    size: "маленький",
  },
  meow() { // новый синтаксис метода
    console.log("мяу мяу");
  },
};

//# чтение свойств
//* через точку
console.log(`На полке стоит «${book.title}»`);

//* через квадратные скобки (если ключ содержит пробел, то обращаться к нему возможно только так)
console.log(`На полке стоит «${book["title"]}»`);

//* ключ-переменная
const key = 'one';
console.log(obj[key]); // 1

//* если прочитать свойство, которого нет у объекта, то вернётся undefined
console.log(book.signature); // undefined

//# новый синтаксис
//* переменная со значением, и вы хотите создать свойство с тем же именем
const firstName = "Иван";
const username = "Killer3000";
const user = {
  firstName,
  username,
};

//* поверхностное копирование (свойства первого уровня вложенности)
const superUser = {
  firstName: "Марина",
  username: "zloyDuh",
};
const copy = { ...superUser };
console.log(copy); // { firstName: 'Марина', username: 'zloyDuh'}

//# общая информация
/* Несмотря на то, что переменная cat объявлена неизменяемой, свойства хранимого объекта можно менять. Дело в том, что объект хранится по ссылке. Изменение внутреннего состояния не изменяет ссылку.
- Объекты, созданные через фигурные скобки и через new Object() совершенно идентичны.
- При сравнении двух объектов JavaScript сравнивает не значения свойств этих объектов, а адреса в памяти, по которым эти объекты хранятся. Поэтому любое сравнение двух объектов будет возвращать false, даже если они выглядят одинаково:
- Чтобы обойти все ключи объекта, используют цикл for...in */
