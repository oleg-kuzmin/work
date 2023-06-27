//# Деструктуризация объекта
//* Создание переменных и присваивание им значений из одноименных свойств объекта
const userProfile = {
  name: 'Oleg',
  commentsQty: 23,
  isLoggedIn: false,
};

const { name, commentsQty } = userProfile;
//* аналогично записи
const name2 = userProfile.name;
const commentsQty2 = userProfile.commentsQty;

const { isLoggedIn } = userProfile;
//* аналогично записи
const isLoggedIn2 = userProfile.isLoggedIn;

//# Деструктуризация массива
//* Создание переменных и присваивание им значений из свойств массива по порядку
const fruits = ['Apple', 'Banana'];

const [fruitOne, fruitTwo] = fruits;
//* аналогично записи
const fruitOne2 = fruits[0];
const fruitTwo2 = fruits[1];

//# Деструктуризация параметров функции (объекта)
//* Аккуратно! Объект передается по ссылке, можно мутировать изначальный объект
const userProfile2 = {
  name: 'Oleg',
  commentsQty: 23,
};

const userInfo = ({ name, commentsQty }) => {
  return `User ${name} has ${commentsQty} comments`;
};

userInfo(userProfile2);

//# Деструктуризация параметров конструктора класса
//* также можно использовать в методах класса
class Card {
  constructor({ text, image, description }) {
    this._text = text;
    this._image = image;
    this._description = description;
  }
}

//# если имена должны отличаться
const greekGods = { love: 'Афродита', war: 'Арес', trade: 'Гермес' };
const { love: goddessOfLove, war: godOfWar, trade: godOfTrade } = greekGods;

//# значения по умолчанию
const { name3 = 'Олег', dateOfBirth3 = '8 января' } = userProfile;
