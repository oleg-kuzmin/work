//# JavaScript в JSX с фигурными скобками
// JSX позволяет вам писать HTML-подобную разметку внутри файла JavaScript, сохраняя логику рендеринга и контент в одном и том же месте. Иногда вам может понадобиться добавить немного логики JavaScript или сослаться на динамическое свойство внутри этой разметки. В этой ситуации вы можете использовать фигурные скобки в JSX, чтобы открыть окно для JavaScript.

/* Ты выучишь:
- Как передавать строки с кавычками
- Как ссылаться на переменную JavaScript внутри JSX с помощью фигурных скобок
- Как вызвать функцию JavaScript внутри JSX с помощью фигурных скобок
- Как использовать объект JavaScript внутри JSX с фигурными скобками
*/

//# Передача строк с кавычками
// Если вы хотите передать строковый атрибут в JSX, вы помещаете его в одинарные или двойные кавычки:

//* App.js
function Avatar() {
  return <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />;
}

// Здесь "https://i.imgur.com/7vQD0fPs.jpg"и "Gregorio Y. Zara" передаются как строки.

// Но что, если вы хотите динамически указывать src или alt? Вы можете использовать значение из JavaScript, заменив "кавычки" на {скобки}:

//* App.js
function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return <img className="avatar" src={avatar} alt={description} />;
}

// Обратите внимание на разницу между className="avatar", который определяет имя класса CSS "avatar", и src={avatar}, который считывает значение переменной JavaScript с именем avatar. Это потому, что фигурные скобки позволяют работать с JavaScript прямо в разметке!

//# Использование фигурных скобок: окно в мир JavaScript


