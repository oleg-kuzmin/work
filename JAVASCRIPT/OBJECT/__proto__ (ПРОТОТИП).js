//# __proto__ (ПРОТОТИП)
/*
Прототип объекта — это другой объект, где движок будет искать свойство или метод, если их нет в исходном объекте.

Процесс поиска свойства в объекте будет таким:
- Вы обращаетесь к свойству объекта, которого у того нет.
-	Движок, не найдя нужного свойства, не прекращает поиски, а заглядывает в свойство __proto__: если здесь хранится ссылка на другой объект, движок будет искать нужное свойство у него.

- свойство __proto__ принадлежит объекту, свойство prototype — функции-конструктору.
*/

// * Свойство __proto__ каждого типа данных указывает на prototype соответствующей функции-конструктора:
const obj = {};
const num = 4;
const str = 'Привет';
const bool = true;
const func = function () {
  console.log('Hello world!');
};

console.log(obj.__proto__ === Object.prototype); // true
console.log(num.__proto__ === Number.prototype); // true
console.log(str.__proto__ === String.prototype); // true
console.log(bool.__proto__ === Boolean.prototype); // true
console.log(func.__proto__ === Function.prototype); // true

//* Привязка прототипа через свойство
obj2.__proto__ = obj1;
// То, что хранится в свойстве __proto__ , называют прототип объекта. obj1 — прототип объекта obj2,

//* Добавление прототипа функции
Animal.prototype.say = function () {
  console.log('rrr');
};

//* Привязка прототипа через Object.create
// Создаем прототип
const objectPototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  },
};

// Создаем новый пустой объект с указанным прототипом
const newSong = Object.create(songPrototype);

//* Привязка прототипа через классы
class Song {
  constructor(title, artist) {
    // в конструкторе класса модифицируем this
    this.title = title;
    this.artist = artist;
    this.isLiked = false;
  }

  // добавляем классу методы, они попадут в прототип объекта который будет создан таким классом
  like() {
    this.isLiked = !this.isLiked;
  }
}
