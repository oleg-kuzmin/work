//# Рендеринг списков
// Часто требуется отобразить несколько одинаковых компонентов из набора данных. Для работы с массивом данных можно использовать методы JavaScript array methods. На этой странице вы будете использовать filter() и map() в React для фильтрации и преобразования массива данных в массив компонентов.

/* Вы узнаете
- Как выводить компоненты из массива с помощью JavaScript map().
- Как отобразить только определенные компоненты с помощью JavaScript filter().
- Когда и зачем использовать ключи React
*/

//# Рендеринг данных из массивов
// Допустим, у вас есть список содержимого.
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>;

// Единственное различие между этими элементами списка — это их содержимое, их данные. При построении интерфейсов часто требуется отображать несколько экземпляров одного и того же компонента, используя разные данные: от списков комментариев до галерей изображений профиля. В таких ситуациях вы можете хранить эти данные в объектах и массивах JavaScript и использовать такие методы, как map() и filter() для вывода списков компонентов на их основе.

// Вот краткий пример того, как сформировать список элементов из массива:

//* 1. Переместите данные в массив:
let people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];

//* 2. Используйте map для создания нового массива узлов jsx из членов people:
let listItems = people.map(person => <li>{person}</li>);

//* 3. Верните listItems из вашего компонента, обернутого в <ul>:
function List() {
  return <ul>{listItems}</ul>;
}

// Вот результат:

//* App.js
people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];

function List() {
  const listItems = people.map(person => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}

// Обратите внимание, что отображается консольная ошибка: Warning: Each child in a list should have a unique “key” prop.

// Как исправить эту ошибку, вы узнаете позже на этой странице. Прежде чем мы приступим к этому, давайте добавим немного структуры в ваши данные.

//# Фильтрация массивов элементов
// Эти данные можно структурировать еще больше.

people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  },
  {
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  },
  {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  },
];

// Допустим, вам нужно показать только людей, чья профессия — chemist(химик). Вы можете использовать метод JavaScript filter(), чтобы вернуть только таких людей. Этот метод принимает массив элементов, пропускает их через "тест" (функцию, которая возвращает true или false) и возвращает новый массив только тех элементов, которые прошли тест (вернули true).

// Вам нужны только те элементы, где profession === 'chemist'. Функция "test" для этого выглядит как (person) => person.profession === 'chemist'. Вот как это можно сделать:

//* 1. Создайте новый массив только "химиков" (chemists) вызывая filter() на people, фильтруя по person.profession === 'chemist':
const chemists = people.filter(person => person.profession === 'chemist');

//* 2. Теперь используйте map для химиков:
listItems = chemists.map(person => (
  <li>
    <img src={getImageUrl(person)} alt={person.name} />
    <p>
      <b>{person.name}:</b>
      {' ' + person.profession + ' '}
      known for {person.accomplishment}
    </p>
  </li>
));

//* 3. И наконец, возвратите список listItems из вашего компонента:
function List() {
  return <ul>{listItems}</ul>;
}

// Вот итоговый результат.
//* utils.js
function getImageUrl(person) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}

//* data.js
people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji',
  },
  {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71',
  },
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l',
  },
];

//* App.js
import { people } from './data.js';
import { getImageUrl } from './utils.js';

function List() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const listItems = chemists.map(person => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

//! Внимание
// Стрелочные функции неявно возвращают выражение сразу после =>, поэтому оператор возврата не нужен:
listItems = chemists.map(person => <li>{person}</li>);

// Однако вы должны явно написать return, если за вашим => следует { фигурная скобка!.
listItems = chemists.map(person => {
  return <li>...</li>;
});

// Стрелочные функции, содержащие => {, как говорят, имеют "тело блока". Они позволяют вам написать больше, чем одну строку кода, но вы должны сами написать оператор возврата. Если вы забудете об этом, ничего не будет возвращено!
//! Внимание

//# Упорядочивание элементов списка по ключу
// Обратите внимание, что все примеры выдают ошибку в консоли: Warning: Each child in a list should have a unique “key” prop.

// Вам нужно дать каждому элементу массива ключ — строку или число, которое уникально идентифицирует его среди других элементов этого массива:

<li key={person.id}>...</li>;

//* JSX-элементы непосредственно внутри вызова map() всегда нуждаются в ключах!

// Ключи указывают React, какому элементу массива соответствует каждый компонент, чтобы он мог сопоставить их позже. Это становится важным, если элементы массива могут перемещаться (например, из-за сортировки), вставляться или удаляться. Хорошо подобранный ключ помогает React понять, что именно произошло, и сделать правильные обновления в DOM-дереве.

// Вместо того чтобы генерировать ключи "на лету", вы должны включать их в свои данные:

//* App.js
function List() {
  const listItems = people.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

//* Отображение нескольких узлов DOM для каждого элемента списка
// Что делать, если каждый элемент должен отображать не один, а несколько узлов DOM?

// Короткий синтаксис <>...</> Fragment не позволит вам передать ключ, поэтому вам нужно либо сгруппировать их в один <div>, либо использовать немного более длинный и более явный синтаксис <Fragment>:
import { Fragment } from 'react';
listItems = people.map(person => (
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
));

// Фрагменты исчезают из DOM, поэтому будет получен плоский список <h1>, <p>, <h1>, <p> и так далее.
//* Отображение нескольких узлов DOM для каждого элемента списка

//# Где взять ваш ключ
