//# Создание списков
// Часто вам потребуется отобразить несколько похожих компонентов из набора данных. Вы можете использовать методы массива JavaScript для управления массивом данных. На этой странице вы будете использовать filter() и map() с React для фильтрации и преобразования вашего массива данных в массив компонентов.

/* Вы выучите:
- Как отрендерить компоненты из массива с помощью JavaScript map()
- Как отрендерить только определенные компоненты с помощью JavaScript filter()
- Когда и зачем использовать ключи React
*/

//# Рендеринг данных из массивов
// Допустим у вас есть список контента.

<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>;

// Единственная разница между этими элементами списка заключается в их содержании, их данных. При построении интерфейсов вам часто потребуется показать несколько экземпляров одного и того же компонента с разными данными: от списков комментариев до галерей изображений профилей. В этих ситуациях вы можете хранить эти данные в объектах и ​​массивах JavaScript и использовать такие методы, как map() и filter() для отображения списков компонентов из них.

// Вот краткий пример того, как создать список элементов из массива:

// 1. Переместите данные в массив:
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];

function List() {
  // 2. Сопоставьте элементы people с новым массивом узлов JSX listItems:
  const listItems = people.map(person => <li>{person}</li>);

  // 3. Возвратите listItems из вашего компонента, завернутого в <ul>:
  return <ul>{listItems}</ul>;
}

//* Обратите внимание, что на ошибку в консоли:
// Warning: Each child in a list should have a unique “key” prop.

// Позже на этой странице вы узнаете, как исправить эту ошибку. Прежде чем мы перейдем к этому, давайте добавим некоторую структуру к вашим данным.

//# Фильтрация массивов элементов
// Эти данные могут быть структурированы еще больше.

const people2 = [
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

// Допустим, вам нужен способ показать только людей, чья профессия 'chemist'. Вы можете использовать метод JavaScript filter(), чтобы вернуть только этих людей. Этот метод берет массив элементов, пропускает их через «тест» (функция, которая возвращает trueили false) и возвращает новый массив только тех элементов, которые прошли тест (возвращается true).

// Вам нужны только те предметы, где profession есть 'chemist'. Функция «тест» для этого выглядит так: (person) => person.profession === 'chemist'. Вот как это собрать:

// 1. Создайте новый массив только людей-«химиков» (chemists) вызвав filter() для people по person.profession === 'chemist':
const chemists = people.filter(person => person.profession === 'chemist');

function List() {
  // 2. Теперь переберите массив химиков методом map:
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

  // 3. Наконец, верните listItems из вашего компонента:
  return <ul>{listItems}</ul>;
}

// Итого:
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

//* Примечание
// Стрелочные функции неявно возвращают выражение сразу после =>, поэтому оператор return не нужен:
const listItems = chemists.map(person => <li>{person}</li>);

// Однако вы должны написать return явно, если после вашего => идет { фигурная скобка!
const listItems2 = chemists.map(person => {
  return <li>{person}</li>;
});

// Стрелочные функции, содержащие, => { как говорят, имеют «блочное тело». Они позволяют вам написать больше, чем одну строку кода, но вы должны написать return самостоятельно. Если вы его забудете, ничего не вернется!

//# Сохранение элементов списка с key
// Обратите внимание на ошибку в консоли:
// Warning: Each child in a list should have a unique “key” prop.

// Вам нужно дать каждому элементу массива key строку или число, которое однозначно идентифицирует его среди других элементов этого массива:

<li key={person.id}>...</li>;

//* Элементам JSX непосредственно внутри map()вызова всегда нужны ключи!

// Ключи сообщают React, какому элементу массива соответствует каждый компонент, чтобы он мог сопоставить их позже. Это становится важным, если элементы вашего массива могут перемещаться (например, из-за сортировки), вставляться или удаляться. Правильно выбранный элемент keyпомогает React сделать вывод о том, что именно произошло, и внести правильные обновления в дерево DOM.

// Вместо того, чтобы генерировать ключи на лету, вы должны включить их в свои данные:

const people3 = [
  {
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A',
  },
  {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa',
  },
  {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji',
  },
  {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71',
  },
  {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l',
  },
];

//* Отображение нескольких узлов DOM для каждого элемента списка
// Что вы делаете, когда каждый элемент должен отображать не один, а несколько узлов DOM?

// Короткий синтаксис <>...</> не позволит вам передать ключ, поэтому вам нужно либо сгруппировать их в один <div>, либо использовать немного более длинный и явный <Fragment> синтаксис:

import { Fragment } from 'react';
const listItems3 = people.map(person => (
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
));

// Фрагменты исчезают из DOM, поэтому будет создан плоский список <h1>, <p>, <h1>, <p> и так далее.

//# Где получитьkey