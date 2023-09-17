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
// JSX — это особый способ написания JavaScript. Это означает, что внутри него можно использовать JavaScript — с фигурными скобками {}. В приведенном ниже примере сначала объявляется имя ученого name, а затем оно вставляется в фигурные скобки внутри <h1>:

//* App.js
function TodoList() {
  const name = 'Gregorio Y. Zara';
  return <h1>{name}'s To Do List</h1>;
}

// Любое выражение JavaScript будет работать между фигурными скобками, включая вызовы функций, например таких как formatDate():

//* App.js
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

function TodoList() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

//# Где использовать фигурные скобки
// Вы можете использовать фигурные скобки внутри JSX только двумя способами:

/* 1. Как текст непосредственно внутри тега JSX.
<h1>{name} Todo List</h1>          - Работает
<{tag}>Gregorio Todo List</{tag}>  - Не работает
*/

/* 2. В качестве атрибутов, следующих сразу за знаком "=":
src={avatar}                       - Работает, будет считываться переменная avatar
src="{avatar}"                     - Не работает, будет передавать строку "{avatar}"
*/

//# Использование «двойных фигурных завитков»: CSS и другие объекты в JSX
// Помимо строк, чисел и других выражений JavaScript, вы можете передавать даже объекты в JSX. Объекты также обозначаются фигурными скобками, например { name: "Hedy Lamarr", inventions: 5 }. Следовательно, чтобы передать объект JS в JSX, вы должны заключить его в другую пару фигурных скобок: person={{ name: "Hedy Lamarr", inventions: 5 }}.

// Вы можете увидеть это с помощью встроенных стилей CSS в JSX. React не требует использования встроенных стилей (в большинстве случаев отлично подходят классы CSS). Но когда вам нужен встроенный стиль, вы передаете объект атрибуту style:

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

// Вы действительно можете увидеть объект JavaScript внутри фигурных скобок, если напишете его следующим образом:
<ul
  style={{
    backgroundColor: 'black',
    color: 'pink',
  }}
></ul>;

// В следующий раз, когда вы увидите {{}}, знайте, что это не что иное, как объект внутри фигур JSX!

//! Ловушка
// Встроенные свойства style написаны в CamelCase. Например, HTML <ul style="background-color: black"> будет написан так, как <ul style={{ backgroundColor: 'black' }}> в вашем компоненте.
//! Ловушка

//# Больше удовольствия от объектов JavaScript и фигурных скобок
// Вы можете переместить несколько выражений в один объект и ссылаться на них в JSX внутри фигурных скобок:

//* App.js
let person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// В этом примере объект JavaScript person содержит строку name и объект theme:

person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

// Компонент может использовать эти значения person следующим образом:

<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
</div>;

// JSX как язык шаблонов очень минималистичен, поскольку позволяет организовывать данные и логику с помощью JavaScript.

//# Резюме
/*
Теперь вы знаете о JSX почти все:
- Атрибуты JSX внутри кавычек передаются как строки.
- Фигурные скобки позволяют добавлять в разметку логику и переменные JavaScript.
- Они работают внутри содержимого тега JSX или сразу после знака "=" в атрибутах.
- {{}} не является специальным синтаксисом: это объект JavaScript, заключенный в фигурные скобки JSX.
*/
