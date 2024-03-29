//# (СОЗДАНИЕ ОБЪЕКТА)
/*
- Объекты, созданные через фигурные скобки и через new Object() совершенно идентичны.
- Имена свойств (иногда их называют ключи, или поля) могут быть либо строками, либо символами. Если использовать в качестве ключа другой тип данных, то он будет приведён к строке с помощью вызова метода toString().
- Если ключ содержит пробел, то обращаться к нему возможно только через синтаксис квадратных скобок.
*/

//* через объявление переменной
const сat = {
  name: 'Том',
  age: 3,
  isBlack: true,
  kittens: ['Беляш', 'Михаил', 'Чарли'],
  favoriteToy: {
    name: 'мячик',
    size: 'маленький',
  },
  // новый синтаксис записи метода
  meow() {
    console.log('мяу мяу');
  },
  // старый синтаксис записи метода
  meow: function () {
    console.log('мяу мяу');
  },
  // старый синтаксис записи метода
  goSleep: () => {
    console.log('Zzz');
  },
};

//* через объявление переменной (сокращенная запись свойств)
const user = {
  firstName,
  username,
};

const user2 = {
  firstName: firstName,
  username: username,
};

//* через конструктор
const myObject = new Object();
const book = new Object({ title: 'Война и мир', author: 'Лев Толстой' });
