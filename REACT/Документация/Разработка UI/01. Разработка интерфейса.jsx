//# Разработка интерфейса
// React — это библиотека JavaScript для визуализации пользовательских интерфейсов (UI). Пользовательский интерфейс строится из небольших блоков, таких как кнопки, текст и изображения. React позволяет объединять их в многократно используемые, вложенные компоненты. От веб-сайтов до приложений для телефонов — все на экране может быть разбито на компоненты. В этой главе вы научитесь создавать, настраивать и условно отображать компоненты React.

/* В этой главе
- Как написать свой первый компонент React
- Когда и как создавать многокомпонентные файлы
- Как добавить разметку в JavaScript с помощью JSX
- Как использовать фигурные скобки в JSX для доступа к функциональности JavaScript из ваших компонентов
- Как конфигурировать компоненты с помощью props
- Как условно отрисовывать компоненты
- Как отрисовывать несколько компонентов одновременно
- Как избежать запутанных ошибок, сохраняя чистоту компонентов
*/

//# Ваш первый компонент
// Приложения React строятся из изолированных частей пользовательского интерфейса, называемых компонентами. Компонент React — это функция JavaScript, которую вы можете посыпать разметкой. Компоненты могут быть как маленькими, как кнопка, так и большими, как целая страница. Вот компонент Gallery, отображающий три компонента Profile:

//* App.js
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//# Импорт и экспорт компонентов
// Вы можете объявить много компонентов в одном файле, но в больших файлах может быть трудно ориентироваться. Чтобы решить эту проблему, вы можете экспортировать компонент в свой собственный файл, а затем импортировать этот компонент из другого файла:

//* Gallery.js
import Profile from './Profile.js';

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//* Profile.js
function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

//# Написание разметки с помощью JSX
// Каждый компонент React — это функция JavaScript, которая может содержать некоторую разметку, которую React отображает в браузере. Компоненты React используют расширение синтаксиса под названием JSX для представления этой разметки. JSX очень похож на HTML, но он немного строже и может отображать динамическую информацию.

/* Если мы вставим существующую HTML-разметку в компонент React, она не будет работать:
export default function TodoList() {
  return (
      <h1>Hedy Lamarr's Todos</h1>
      <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
      >
      <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve spectrum technology
      </ul>
  );
  }
*/

// Если у вас есть HTML, подобный этому, вы можете исправить его с помощью конвертера (https://transform.tools/html-to-jsx):

//* App.js
function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

//# JavaScript в JSX с фигурными скобками
// JSX позволяет вам писать HTML-подобную разметку внутри JavaScript-файла, сохраняя логику рендеринга и содержимое в одном месте. Иногда вы захотите добавить немного логики JavaScript или сослаться на динамическое свойство внутри этой разметки. В этой ситуации вы можете использовать фигурные скобки в JSX, чтобы "открыть окно" в JavaScript:

//* App.js
const person = {
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


