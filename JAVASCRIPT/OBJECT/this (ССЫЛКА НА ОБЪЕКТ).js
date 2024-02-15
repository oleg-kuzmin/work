//# this (ССЫЛКА НА ОБЪЕКТ)
/*
- this — ключевое слово, которое используется для доступа к полям объекта внутри метода. При обращении к this возвращается ссылка на объект, внутри которого реализовано это обращение.
- значение this определяется не в момент объявления, а в момент выполнения.
*/

const object = {
  prop: 'Свойство',
  method: function () {
    console.log(this);
  },
};

object.method(); // В консоль выводится object — объект, на котором вызван метод method

//# Приоритет привязки
//* 1. Привязка по умолчанию - function()
/*
- Это тот случай, когда вы просто вызываете функцию по её имени, то есть пишете имя функции и круглые скобки. Тогда this принимает одно из двух значений:
1. undefined — в строгом режиме,
2. window — в обычном.
*/

function globalFunction() {
  console.log(this);
}
globalFunction(); // Window — this ссылается на глобальный объект window

//* 2. Вызов метода объекта или неявная привязка - object.globalFunction()
// Обратите внимание, что мы изменили точку вызова функции. Раньше мы вызывали её из глобальной области видимости, а теперь — как метод объекта window. Так мы неявно указали контекст — window. При использовании неявной привязки определить контекст this очень просто: посмотрите, что находится слева от точки перед именем функции, — это и есть this.
window.myData = 'Important data';

function globalFunction() {
  'use strict';
  console.log(this.myData);
}

window.globalFunction(); // 'Important data'

//*  3. Метод bind явная привязка - this.click.bind(this)
// Метод bind не вызывает функцию. Он указывает значение this, с которым эта функция будет вызываться.
class SendButton {
  constructor() {
    this.buttonName = 'Send Button';
  }
  click() {
    console.log('I am ' + this.buttonName);
  }
  setEventListeners() {
    document.querySelector('.btn').addEventListener('click', this.click.bind(this));
    // жёстко привязываем контекст при передаче функции
  }
}
const button1 = new SendButton();
button1.setEventListeners();

//* 4. Вызов с оператором new.
/*
- Если вызвать функцию с new, this возвращается автоматически. Функция может ничего не возвращать или возвращать примитивное значение, но при её вызове с new всё равно вернётся this.
- Но есть одно исключение. Если функция возвращает объект, вызов функции с new вернёт этот объект.
*/

//# Потеря контекста
// Наша задача была — выводить имя кнопки при каждом нажатии на неё. Но это не сработало, потому что this определяется в момент вызова функции, то есть в момент клика по элементу. Важно, что функция click не вызывается как метод класса — она передаётся методу addEventListener и вызывается из него. Механизм слушателя события такой, что this при этом ссылается на DOM-элемент, на котором событие сработало. У DOM-узла нет свойства buttonName, поэтому в консоли оказывается сообщение I am undefined.

class SendButton {
  constructor() {
    this.buttonName = 'Send Button';
  }

  click() {
    console.log('I am ' + this.buttonName);
  }

  setEventListeners() {
    // Передадим слушателю события метод SendButton.click как колбэк:
    document.querySelector('.btn').addEventListener('click', this.click);
    // При клике мы надеемся увидеть сообщение "I am Send Button"
  }
}

const button2 = new SendButton();
button.setEventListeners();
