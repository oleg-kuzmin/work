//# useState
/*
- Используйте переменную состояния, когда компоненту необходимо "запомнить" некоторую информацию между рендерами.

Хук useState обеспечивает:
1. Переменная state для сохранения данных между рендерами.
2. Функция state setter для обновления переменной и запуска React для повторного рендеринга компонента.

- Вызов хуков, включая useState, возможен только на верхнем уровне компонента или другого хука.
- Хук useState возвращает пару значений: текущее состояние и функцию для его обновления.
- В одном компоненте можно иметь столько переменных состояния, сколько угодно. Это хорошая идея иметь несколько переменных состояния, если их состояние не связано. Но если вы обнаружите, что часто изменяете переменные состояния вместе, может быть проще объединить их в одну. Например, если у вас есть форма с большим количеством полей, удобнее иметь одну переменную состояния, которая хранит объект, чем переменную состояния для каждого поля.
- Состояние является локальным для экземпляра компонента на экране. Другими словами, если вы дважды отобразите один и тот же компонент, каждая копия будет иметь полностью изолированное состояние. Изменение одного из них не повлияет на другой.
-  В отличие от props, state является полностью приватным для объявляющего его компонента. Родительский компонент не может его изменить. Это позволяет вам добавлять состояние в любой компонент или удалять его без влияния на остальные компоненты.
- Eсли вы хотите, чтобы два компонента синхронизировали свои состояния нужно удалить состояние из дочерних компонентов и добавить его в их ближайший общий родительский компонент.
*/

//# Добавление состояния в компонент
import { useState } from 'react';
import { sculptureList } from './data.js';

function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>{sculpture.name}</h2>
    </>
  );
}

//# Добавление в очередь setState функции обновления состояния
<button
  onClick={() => {
    setNumber(number + 5);
    setNumber(n => n + 1);
  }}
/>;

//# Изменение одного значения состояния - объекта
//* При изменении и неглубокого копирования объекта можно использовать спред-синтаксис для сохранения предыдущих значений и ключей
function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  return <input value={person.firstName} onChange={handleFirstNameChange} />;
}

//* Изменение свойства сложного объекта
function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  return <input value={person.artwork.title} onChange={handleTitleChange} />;
}

//# Добавление элемента в состояние - массив
import { useState } from 'react';

function List() {
  const [artists, setArtists] = useState([]);
  return (
    <button
      onClick={() => {
        setArtists([...artists, { id: nextId++, name: name }]); // добавление в конец
        setArtists([{ id: nextId++, name: name }, ...artists]); // добавление в начало
      }}
    ></button>
  );
}

//# Удаление элемента из состояния - массива
import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

function List() {
  const [artists, setArtists] = useState(initialArtists);
  return (
    <button
      onClick={() => {
        setArtists(artists.filter(a => a.id !== artist.id));
      }}
    ></button>
  );
}

//# Преобразование элементов массива
import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map(shape => (
        <div key={shape.id} />
      ))}
    </>
  );
}
