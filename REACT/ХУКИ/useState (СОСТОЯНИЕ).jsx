//# useState (СОСТОЯНИЕ)
/*
- У компонента может быть несколько состояний.
- Состояние инициализируется только во время первого рендеринга.
- Вызов хуков, включая useState, возможен только на верхнем уровне компонента или другого хука.
- В одном компоненте можно иметь столько переменных состояния, сколько угодно. Это хорошая идея иметь несколько переменных состояния, если их состояние не связано. Но если вы обнаружите, что часто изменяете переменные состояния вместе, может быть проще объединить их в одну. Например, если у вас есть форма с большим количеством полей, удобнее иметь одну переменную состояния, которая хранит объект, чем переменную состояния для каждого поля.
- Состояние привязано к позиции в дереве. React связывает каждую часть состояния, которую он хранит, с нужным компонентом по тому, где этот компонент находится в дереве пользовательского интерфейса. React будет сохранять состояние до тех пор, пока вы рендерите один и тот же компонент в одной и той же позиции.
- Состояние является локальным для экземпляра компонента на экране. Другими словами, если вы дважды отобразите один и тот же компонент, каждая копия будет иметь полностью изолированное состояние. Изменение одного из них не повлияет на другой.
*/

//# Синтаксис
//* Значение по умолчанию или функция-callback
const [value, setValue] = useState(null);

//# Возвращает
//* 1. Переменная state для сохранения данных между рендерами.
//* 2. Функция state setter для обновления переменной и запуска React для повторного рендеринга компонента.

//# Пример
//* импорт
import { useState } from 'react';

function App() {
  //* создание (деструктуризация массива)
  const [value, setValue] = useState(null);
  return <div></div>;
}

//# Использование функции обновления состояния setValue()
// Получаем доступ к предыдущему значению.
setValue(prev => prev + 1);
setValue(prev => prev + 1);
setValue(prev => prev + 1);

//# Изменение значения (состояние - простой объект)
// При изменении и неглубоком копировании объекта можно использовать спред-синтаксис для сохранения предыдущих значений и ключей
const [person, setPerson] = useState({
  firstName: 'Barbara',
  lastName: 'Hepworth',
  email: 'bhepworth@sculpture.com',
});

setPerson({
  ...person,
  firstName: e.target.value,
});

//# Изменение значения (состояние - сложный объект)
const [personHard, setPersonHard] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  },
});

setPersonHard({
  ...personHard,
  artwork: {
    ...personHard.artwork,
    title: e.target.value,
  },
});

//# Изменение значения (состояние - массив)
const [artists, setArtists] = useState([
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
]);

//* добавление в конец
setArtists([...artists, { id: id, name: name }]);

//* добавление в начало
setArtists([{ id: id, name: name }, ...artists]);

//* Добавление в другое место
setArtists([...artists.slice(0, 5), { id: id, name: name }, ...artists.slice(5)]);

//* удаление
setArtists(artists.filter(a => a.id !== artist.id));

//* изменение
setArtists(
  artists.map(artist => {
    if ((artist.id = 2)) {
      return { ...artist, name: 'newName' };
    } else {
      return artist;
    }
  })
);

//* замена
const newArtist = { id: 3, name: 'newName' };
setArtists(
  artists.map(artist => {
    if ((artist.id = 2)) {
      return newArtist;
    } else {
      return artist;
    }
  })
);
