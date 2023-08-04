//# Описание UI
// React — это библиотека JavaScript для рендеринга пользовательских интерфейсов (UI). Пользовательский интерфейс состоит из небольших элементов, таких как кнопки, текст и изображения. React позволяет объединять их в многоразовые вкладываемые компоненты. От веб-сайтов до приложений для телефонов — все на экране можно разбить на компоненты. В этой главе вы научитесь создавать, настраивать и условно отображать компоненты React.

/* В этой главе:
- Как написать свой первый компонент React
- Когда и как создавать многокомпонентные файлы
- Как добавить разметку в JavaScript с помощью JSX
- Как использовать фигурные скобки с JSX для доступа к функциям JavaScript из ваших компонентов
- Как настраивать компоненты с реквизитами
- Как условно отображать компоненты
- Как визуализировать несколько компонентов одновременно
- Как избежать запутанных ошибок, сохраняя компоненты чистыми
*/

//# Ваш первый компонент
// Приложения React создаются из изолированных частей пользовательского интерфейса, называемых компонентами. Компонент React — это функция JavaScript, которую вы можете посыпать разметкой. Компоненты могут быть как маленькими, как кнопка, так и большими, как целая страница. Вот компонент галереи, отображающий три компонента профиля:

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
// Вы можете объявить множество компонентов в одном файле, но в больших файлах может быть сложно ориентироваться. Чтобы решить эту проблему, вы можете экспортировать компонент в отдельный файл, а затем импортировать этот компонент из другого файла:

import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//# Написание разметки с помощью JSX
// Каждый компонент React — это функция JavaScript, которая может содержать некоторую разметку, которую React отображает в браузере. Компоненты React используют расширение синтаксиса под названием JSX для представления этой разметки. JSX очень похож на HTML, но немного строже и может отображать динамическую информацию.

// Если мы вставим существующую HTML-разметку в компонент React, это не всегда будет работать. Если у вас есть такой HTML-код, вы можете исправить его с помощью конвертера.

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
// JSX позволяет вам писать HTML-подобную разметку внутри файла JavaScript, сохраняя логику рендеринга и содержимое в одном месте. Иногда вам может понадобиться добавить немного логики JavaScript или сослаться на динамическое свойство внутри этой разметки. В этой ситуации вы можете использовать фигурные скобки в JSX, чтобы «открыть окно» для JavaScript:

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

//# Передача свойств компоненту
// Компоненты React используют props для связи друг с другом. Каждый родительский компонент может передавать некоторую информацию своим дочерним компонентам, предоставляя им свойства. Свойства могут напоминать вам атрибуты HTML, но вы можете передавать через них любое значение JavaScript, включая объекты, массивы, функции и даже JSX!

function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
    </Card>
  );
}

//# Условный рендеринг
// Ваши компоненты часто должны отображать разные вещи в зависимости от различных условий. В React вы можете условно визуализировать JSX, используя синтаксис JavaScript if, такой как операторы &&, и ?: операторы.

// В этом примере оператор JavaScript && используется для условного отображения галочки:

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

//# Списки рендеринга
// Часто вам потребуется отобразить несколько похожих компонентов из набора данных. Вы можете использовать JavaScript filter() и map() в React для фильтрации и преобразования массива данных в массив компонентов.

// Для каждого элемента массива вам нужно указать файл key. Обычно вы хотите использовать идентификатор из базы данных в качестве файла key. Ключи позволяют React отслеживать место каждого элемента в списке, даже если список изменяется.

function List() {
  const listItems = people.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

//# Сохранение компонентов в чистоте
/* Некоторые функции JavaScript являются чистыми.

Чистая функция:
- Занимается своим делом. Он не изменяет какие-либо объекты или переменные, существовавшие до его вызова.
- Те же входы, тот же выход. При одних и тех же входных данных чистая функция всегда должна возвращать один и тот же результат.
*/

// Строго записывая свои компоненты только как чистые функции, вы можете избежать целого класса непонятных ошибок и непредсказуемого поведения по мере роста вашей кодовой базы. Вот пример нечистого компонента:

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

// Вы можете сделать этот компонент чистым, передав свойство вместо изменения уже существующей переменной:

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
