//# useState (СОСТОЯНИЕ)







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
