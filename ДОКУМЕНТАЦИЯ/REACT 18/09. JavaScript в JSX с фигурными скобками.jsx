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
// Вы можете использовать фигурные скобки только двумя способами внутри JSX:

//* 1. Как текст внутри тега JSX: <h1>{name}'s To Do List</h1>работает, но <{tag}>Gregorio Y. Zara's To Do List</{tag}> не будет.
//* 2. Как атрибут после знака =: src={avatar} будет читать avatar переменную, но src="{avatar}" передавать строку "{avatar}".

//# Использование двойных скобок: CSS и другие объекты в JSX
// Помимо строк, чисел и других выражений JavaScript, вы даже можете передавать объекты в JSX. Объекты также обозначаются фигурными скобками, например { name: "Hedy Lamarr", inventions: 5 }. Поэтому, чтобы передать объект JS в JSX, вы должны заключить объект в другую пару фигурных скобок: person={{ name: "Hedy Lamarr", inventions: 5 }}.

// Вы можете увидеть это со встроенными стилями CSS в JSX. React не требует от вас использования встроенных стилей (классы CSS отлично подходят для большинства случаев). Но когда вам нужен встроенный стиль, вы передаете объект атрибуту style:

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

// Попробуйте изменить значения backgroundColorи color.

// Вы действительно можете увидеть объект JavaScript внутри фигурных скобок, когда пишете его так:

<ul
  style={{
    backgroundColor: 'black',
    color: 'pink',
  }}
></ul>;

// В следующий раз, когда вы увидите {{JSX }}, знайте, что это не что иное, как объект внутри JSX!

//* Важно
// Инлайн style свойства записываются в camelCase. Например, HTML <ul style="background-color: black">будет написан как <ul style={{ backgroundColor: 'black' }}> в вашем компоненте.


