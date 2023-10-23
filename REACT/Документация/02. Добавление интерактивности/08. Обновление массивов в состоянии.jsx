//# Обновление массивов в состоянии
// В JavaScript массивы являются изменяемыми, но при хранении их в состоянии вы должны относиться к ним как к неизменяемым. Как и в случае с объектами, когда вы хотите обновить массив, хранящийся в состоянии, вам нужно создать новый массив (или сделать копию существующего), а затем установить состояние для использования нового массива.

/* Вы узнаете
- Как добавлять, удалять или изменять элементы в массиве в React state
- Как обновить объект внутри массива
- Как сделать копирование массива менее повторяющимся с помощью Immer
*/

//# Обновление массивов без мутации
// В JavaScript массивы - это просто еще один вид объектов. Как и с объектами, вы должны рассматривать массивы в React state как доступные только для чтения. Это означает, что вы не должны переназначать элементы внутри массива, например arr[0] = 'bird', а также не должны использовать методы, которые изменяют массив, такие как push() и pop().

// Вместо этого, каждый раз, когда вы хотите обновить массив, вы должны передавать новый массив в вашу функцию установки состояния. Для этого вы можете создать новый массив из исходного массива вашего состояния, вызвав его не изменяющие методы, такие как filter() и map(). Затем вы можете установить свое состояние на полученный новый массив.

/* Вот справочная таблица распространенных операций с массивами. При работе с массивами внутри React state вам нужно избегать методов в левой колонке, а предпочесть методы в правой колонке:

избегать (изменяет массив)                     предпочитать (возвращает новый массив)
добавление push, unshift                       concat, [...arr] синтаксис распространения
удаление pop, shift, splice                    filter, slice
замена splice, arr[i] = ... присваивание       map
сортировка reverse, sort                       сначала копируем массив
*/

// В качестве альтернативы можно использовать Immer, который позволяет использовать методы из обоих столбцов.

//! Внимание
/* К сожалению, slice и splice называются одинаково, но являются совершенно разными:
- slice позволяет копировать массив или его часть.
- splice изменяет массив (для вставки или удаления элементов).
*/
// В React вы будете использовать slice (без p!) гораздо чаще, потому что вы не хотите изменять объекты или массивы в состоянии. В Обновление объектов в состоянии объясняется, что такое мутация и почему она не рекомендуется для состояния.
//! Внимание

//# Добавление в массив
// push() будет мутировать массив, чего вы не хотите:

//* App.js
import { useState } from 'react';

let nextId = 0;

function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button
        onClick={() => {
          artists.push({
            id: nextId++,
            name: name,
          });
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

// Вместо этого создайте новый массив, который содержит существующие элементы и новый элемент в конце. Существует несколько способов сделать это, но самый простой - использовать синтаксис ... array spread:

setArtists(
  // Replace the state
  [
    // with a new array
    ...artists, // that contains all the old items
    { id: nextId++, name: name }, // and one new item at the end
  ]
);

// Теперь он работает правильно:

//* App.js
import { useState } from 'react';

nextId = 0;

function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

// Синтаксис распространения массива также позволяет добавлять элемент, помещая его перед исходным ...artists:
setArtists([
  { id: nextId++, name: name },
  ...artists, // Put old items at the end
]);

// Таким образом, spread может выполнять работу как push(), добавляя в конец массива, так и unshift(), добавляя в начало массива. Попробуйте это в песочнице выше!

//# Удаление из массива
// Самый простой способ удалить элемент из массива - это отфильтровать его. Другими словами, вы создадите новый массив, который не будет содержать этот элемент. Для этого используйте метод filter, например:

//* App.js
import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

function List() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button
              onClick={() => {
                setArtists(artists.filter(a => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// Несколько раз нажмите кнопку "Удалить" и посмотрите на ее обработчик нажатия.

setArtists(artists.filter(a => a.id !== artist.id));

// Здесь artists.filter(a => a.id !== artist.id) означает "создать массив, состоящий из тех артистов, чьи ID отличаются от artist.id". Другими словами, при нажатии кнопки "Удалить" каждого артиста из массива будет отфильтровываться этот артист, а затем запрашиваться повторный рендеринг с полученным массивом. Обратите внимание, что filter не изменяет исходный массив.

//# Преобразование массива
// Если вы хотите изменить некоторые или все элементы массива, вы можете использовать map() для создания нового массива. Функция, которую вы передадите в map, может решить, что делать с каждым элементом, основываясь на его данных или индексе (или на обоих).

// В этом примере массив содержит координаты двух кругов и квадрата. Когда вы нажимаете на кнопку, она перемещает только круги вниз на 50 пикселей. Для этого создается новый массив данных с помощью map():

//* App.js
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
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}

//# Замена элементов в массиве
// Особенно часто возникает необходимость заменить один или несколько элементов в массиве. Назначения типа arr[0] = 'bird' изменяют исходный массив, поэтому для этого лучше использовать map.

// Чтобы заменить элемент, создайте новый массив с помощью map. Внутри вашего вызова map вы получите индекс элемента в качестве второго аргумента. Используйте его, чтобы решить, вернуть ли исходный элемент (первый аргумент) или что-то другое:

//* App.js
import { useState } from 'react';

let initialCounters = [0, 0, 0];

function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}

//# Вставка в массив
