//# window.alert (МОДАЛЬНОЕ ОКНО С ТЕКСТОМ)
/*
- При помощи директивы alert() можно вывести на экран пользователя модальное окно с каким-нибудь текстом.
- Из-за того, что окно модальное — работа с интерфейсом браузера и страницами будет заблокирована. Это неудобно, и может восприниматься пользователем как попытка ограничивать его свободу. Модальное окно для пользователя — окно, которое блокирует его работу с браузером до тех пор, пока он это окно не закроет.
- Это самый быстрый и простой способ что-то сказать пользователю, но такое окно никак не стилизовать, а значит, использовать его лучше только для прототипирования интерфейса. В финальном варианте веб-страницы использовать подобные модальные диалоги нежелательно.
- alert() позволяет вывести любое сообщение, но необходимо помнить, что аргумент будет приведён к строке. Такое поведение не доставляет проблем, пока аргумент является примитивом или встроенным типом, имеющим правила приведения к строке.
*/

//# Синтаксис
//* Строка - текст сообщения
alert('Message');

//* Переменная
const text = 'Another message';
alert(text);

//# Возвращает
//* NONE (undefined).

//# Выведение объекта
// Чтобы объяснить JavaScript, как нужно выводить объект с данными в alert(), необходимо описать функцию объекта toString, которая отвечает за приведение к строке.

alert({
  id: 5,
  text: 'Пример',
  toString: function () {
    return `${this.id}: ${this.text}`;
  },
});
