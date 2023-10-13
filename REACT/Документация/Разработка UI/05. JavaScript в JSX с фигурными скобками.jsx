//# JavaScript в JSX с фигурными скобками
// JSX позволяет вам писать HTML-подобную разметку внутри файла JavaScript, сохраняя логику рендеринга и содержимое в одном месте. Иногда вы захотите добавить немного логики JavaScript или сослаться на динамическое свойство внутри этой разметки. В этой ситуации вы можете использовать фигурные скобки в JSX, чтобы открыть окно для JavaScript.

/* Вы узнаете
- Как передавать строки с кавычками
- Как ссылаться на переменную JavaScript внутри JSX с помощью фигурных скобок
- Как вызвать функцию JavaScript в JSX с помощью фигурных скобок
- Как использовать объект JavaScript внутри JSX с фигурными скобками
*/

//# Передача строк с кавычками
// Когда вы хотите передать строковый атрибут в JSX, вы заключаете его в одинарные или двойные кавычки:

//* App.js
function Avatar() {
  return <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />;
}

// Здесь "https://i.imgur.com/7vQD0fPs.jpg" и "Gregorio Y. Zara" передаются как строки.

// Но что если вы хотите динамически указать текст src или alt? Вы можете использовать значение из JavaScript, указав его внутри скобок {}:

//* App.js
function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return <img className="avatar" src={avatar} alt={description} />;
}

// Обратите внимание на разницу между className="avatar", которая определяет имя CSS-класса "avatar", который делает изображение круглым, и src={avatar}, которая читает значение переменной JavaScript под названием avatar. Это потому, что фигурные скобки позволяют вам работать с JavaScript прямо в вашей разметке!

//# Использование фигурных скобок: Окно в мир JavaScript
// JSX - это особый способ написания JavaScript. Это означает, что можно использовать JavaScript внутри него - с фигурными скобками {}. В приведенном ниже примере сначала объявляется имя ученого (name) затем оно помещается в фигурные скобки внутри <h1>:

//* App.js
function TodoList() {
  const name = 'Gregorio Y. Zara';
  return <h1>{name}'s To Do List</h1>;
}

// Попробуйте изменить значение name с Gregorio Y. Zara на другое. Видите, как изменился заголовок списка?

// Любое выражение JavaScript будет работать между фигурными скобками, включая вызовы функций, таких как formatDate():

//* App.js
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(date);
}

function TodoList() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

//# Где использовать фигурные скобки
/* В JSX фигурные скобки можно использовать только двумя способами:
1. В качестве текста непосредственно внутри тега JSX: <h1>{name}'s To Do List</h1> работает, а <{tag}>Gregorio Y. Zara's To Do List</{tag}> не работает.
2. Атрибуты сразу после знака =: src={avatar} прочитает переменную avatar, но src="{avatar}" передаст строку "{avatar}".
*/

//# Использование "двойных завитушек": CSS и другие объекты в JSX
// Помимо строк, чисел и других выражений JavaScript, в JSX можно передавать даже объекты. Объекты также обозначаются фигурными скобками, например { name: "Hedy Lamarr", inventions: 5 }. Поэтому, чтобы передать объект JS в JSX, вы должны обернуть объект в другую пару фигурных скобок: person={{ name: "Hedy Lamarr", inventions: 5 }}.

// Подобное можно увидеть при использовании встроенных стилей CSS в JSX. React не требует использования встроенных стилей (классы CSS отлично подходят для большинства случаев). Но когда вам нужен встроенный стиль, вы передаете объект в атрибут style:

//* App.js
function TodoList() {
  return (
    <ul
      style={{
        backgroundColor: 'black',
        color: 'pink',
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

// Попробуйте изменить значения backgroundColor и color.

// Вы действительно можете увидеть объект JavaScript внутри фигурных скобок, если напишете его так:
<ul
  style={{
    backgroundColor: 'black',
    color: 'pink',
  }}
/>;

// Когда в следующий раз вы увидите {{ и }} в JSX, знайте, что это не что иное, как объект внутри скобок JSX!

//! Внимание
// Инлайн-свойства style записываются в camelCase. Например, HTML <ul style="background-color: black"> будет записан как <ul style={{ backgroundColor: 'black' }}> в вашем компоненте.
//! Внимание

//# Больше веселья с объектами JavaScript и фигурными скобками
// Вы можете поместить несколько выражений в один объект и ссылаться на них в JSX внутри фигурных скобок:




