//# Деструктуризация объекта
const userProfile = {
  name: 'Oleg',
  commentsQty: 23,
  isLoggedIn: false,
};

const greekGods = { love: 'Афродита', war: 'Арес', trade: 'Гермес' };

//* Создание переменных и присваивание им значений из одноименных свойств объекта
const { name, commentsQty } = userProfile;
/*
const name = userProfile.name;
const commentsQty = userProfile.commentsQty;
*/

const { isLoggedIn } = userProfile;
/*
const isLoggedIn = userProfile.isLoggedIn;
*/

//* Создание переменных и присваивание им значений из свойств объекта под другими именами
const { love: goddessOfLove, war: godOfWar, trade: godOfTrade } = greekGods;
/*
const goddessOfLove = greekGods.love;
const godOfWar = greekGods.war;
const godOfTrade = greekGods.trade;
*/

//* Создание переменных и присваивание им значений по умолчанию
const { name1 = 'Олег', dateOfBirth1 = '8 января' } = userProfile;
/*
const name = userProfile.name || 'Олег';
const dateOfBirth = userProfile.dateOfBirth || '8 января';
*/

//# Деструктуризация массива
const fruits = ['Apple', 'Something', 'Banana'];

//* Создание переменных и присваивание им значений из свойств массива по порядку
const [fruitOne, fruitTwo, fruitThree] = fruits;
/*
const fruitOne = fruits[0];
const fruitTwo = fruits[1];
const fruitThree = fruits[2];
*/

//* Для пропуска переменной можно использовать запятую
const [fruitTestOne, , fruitTestTwo] = fruits;
/*
const fruitTestOne = fruits[0];
const fruitTestTwo = fruits[2];
*/

//# Деструктуризация параметров функции (объекта)
const userProfile2 = {
  name: 'Oleg',
  commentsQty: 23,
};

// Аккуратно! Объект передается по ссылке, можно мутировать изначальный объект
const userInfo = ({ name, commentsQty }) => {
  return `User ${name} has ${commentsQty} comments`;
};

userInfo(userProfile2);

//# Деструктуризация параметров конструктора класса
class Card {
  constructor({ text, image, description }) {
    this._text = text;
    this._image = image;
    this._description = description;
  }
}

// Также можно использовать и в методах класса.
