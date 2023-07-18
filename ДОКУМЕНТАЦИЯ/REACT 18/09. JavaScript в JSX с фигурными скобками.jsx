//# JavaScript в JSX с фигурными скобками
// JSX позволяет вам писать HTML-подобную разметку внутри файла JavaScript, сохраняя логику рендеринга и содержимое в одном месте. Иногда вам может понадобиться добавить немного логики JavaScript или сослаться на динамическое свойство внутри этой разметки. В этой ситуации вы можете использовать фигурные скобки в вашем JSX, чтобы открыть окно для JavaScript.

/* Вы выучите:
- Как передавать строки с кавычками
- Как сослаться на переменную JavaScript внутри JSX с помощью фигурных скобок
- Как вызвать функцию JavaScript внутри JSX с помощью фигурных скобок
- Как использовать объект JavaScript внутри JSX с фигурными скобками
*/

//# Передача строк с кавычками
// Когда вы хотите передать строковый атрибут в JSX, вы заключаете его в одинарные или двойные кавычки:
function Avatar() {
  return <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />;
}

// Здесь "https://i.imgur.com/7vQD0fPs.jpg"и "Gregorio Y. Zara"передаются как строки.

// Но что, если вы хотите динамически указать текст src или alt? Вы можете использовать значение из JavaScript, заменив "" на {}:
function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return <img className="avatar" src={avatar} alt={description} />;
}

// Обратите внимание на разницу между className="avatar", указывающим "avatar"имя класса CSS, которое делает изображение круглым, и src={avatar}считывающим значение переменной JavaScript с именем avatar. Это потому, что фигурные скобки позволяют вам работать с JavaScript прямо в вашей разметке!

//# Использование фигурных скобок: окно в мир JavaScript
// JSX — это особый способ написания JavaScript. Это означает, что внутри него можно использовать JavaScript — с фигурными скобками { }. В приведенном ниже примере сначала объявляется имя ученого, nameа затем встраивается фигурными скобками внутрь <h1>:

function TodoList() {
  const name = 'Gregorio Y. Zara';
  return <h1>{name}'s To Do List</h1>;
}

// Попробуйте изменить nameзначение с 'Gregorio Y. Zara'на 'Hedy Lamarr'. Видите, как меняется заголовок списка?

// Любое выражение JavaScript будет работать между фигурными скобками, включая такие вызовы функций, как formatDate():

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

export default function TodoList() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

//# Где использовать фигурные скобки
