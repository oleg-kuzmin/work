//# Обновление массивов в состоянии
// Массивы изменяемы в JavaScript, но вы должны обращаться с ними как с неизменяемыми, когда сохраняете их в состоянии. Как и в случае с объектами, когда вы хотите обновить массив, хранящийся в состоянии, вам нужно создать новый (или сделать копию существующего), а затем установить состояние для использования нового массива.

/* Вы выучите:
- Как добавлять, удалять или изменять элементы в массиве в состоянии React
- Как обновить объект внутри массива
- Как сделать копирование массива менее повторяющимся с помощью Immer
*/

//# Обновление массивов без мутации
// В JavaScript массивы — это еще один вид объектов. Как и в случае с объектами , вы должны рассматривать массивы в состоянии React как доступные только для чтения. Это означает, что вы не должны переназначать элементы внутри массива, например arr[0] = 'bird', а также не должны использовать методы, изменяющие массив, такие как push() и pop().

// Вместо этого каждый раз, когда вы хотите обновить массив, вы захотите передать новый массив в функцию настройки состояния. Для этого вы можете создать новый массив из исходного массива в своем состоянии, вызвав его немутирующие методы, такие как filter() и map(). Затем вы можете установить свое состояние в полученный новый массив.

/* Вот справочная таблица общих операций с массивами. При работе с массивами внутри состояния React вам нужно избегать методов в левом столбце и вместо этого предпочитать методы в правом столбце:

избежать (мутирует массив)	                 предпочесть (возвращает новый массив)
добавление	push, unshift	                   concat, [...arr] синтаксис распространения
удаление	  pop, shift, splice	             filter, slice
замена	    splice, arr[i] = ...присвоение	 map
сортировка	reverse, sort	                   сначала скопируйте массив
*/

// В качестве альтернативы вы можете использовать Immer, который позволяет использовать методы из обоих столбцов.

//* Важно
/* К сожалению, slice и splice называются одинаково, но сильно отличаются:
- slice позволяет копировать массив или его часть.
- splice изменяет массив (чтобы вставлять или удалять элементы).

В React вы будете использовать slice(нет p!) гораздо чаще, потому что не хотите изменять объекты или массивы в состоянии. Обновление объектов объясняет, что такое мутация и почему ее не рекомендуется использовать для состояния.
*/

//# Добавление в массив
// push() изменит массив, который вам не нужен:

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

// Вместо этого создайте новый массив, содержащий существующие элементы и новый элемент в конце. Есть несколько способов сделать это, но самый простой — использовать синтаксис ... расширения массива:

setArtists(
  // Replace the state
  [
    // with a new array
    ...artists, // that contains all the old items
    { id: nextId++, name: name }, // and one new item at the end
  ]
);

// Теперь работает корректно:

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

// Синтаксис расширения массива также позволяет вам добавлять элемент, помещая его перед оригиналом ...artists:

setArtists([
  { id: nextId++, name: name },
  ...artists, // Put old items at the end
]);

// Таким образом, расширение может выполнять работу как push() путем добавления в конец массива, так и unshift() путем добавления в начало массива.

//# Удаление из массива
// Самый простой способ удалить элемент из массива — отфильтровать его . Другими словами, вы создадите новый массив, который не будет содержать этот элемент. Для этого используйте filter метод, например:

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

// Нажмите кнопку «Удалить» несколько раз и посмотрите на ее обработчик кликов.

setArtists(artists.filter(a => a.id !== artist.id));

// Здесь artists.filter(a => a.id !== artist.id) означает «создать массив, состоящий из тех artists, чьи идентификаторы отличаются от artist.id». Другими словами, кнопка «Удалить» каждого исполнителя отфильтрует этого исполнителя из массива, а затем запросит повторный рендеринг с результирующим массивом. Обратите внимание, что filter не изменяет исходный массив.

//# Преобразование массива
// Если вы хотите изменить некоторые или все элементы массива, вы можете использовать map() для создания нового массива. Функция map, к которой вы перейдете, может решить, что делать с каждым элементом, на основе его данных или его индекса (или того и другого).

// В этом примере массив содержит координаты двух кругов и квадрата. Когда вы нажимаете кнопку, она перемещает только круги вниз на 50 пикселей. Он делает это, создавая новый массив данных, используя map():

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
// Особенно часто требуется заменить один или несколько элементов в массиве. Такие присваивания arr[0] = 'bird' изменяют исходный массив, поэтому вместо этого вы также захотите использовать map для этого.

// Чтобы заменить элемент, создайте новый массив с расширением map. Внутри вашего map вызова вы получите индекс элемента в качестве второго аргумента. Используйте его, чтобы решить, следует ли вернуть исходный элемент (первый аргумент) или что-то еще:

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
// Иногда вам может понадобиться вставить элемент в определенную позицию, которая не находится ни в начале, ни в конце. Для этого вы можете использовать ... синтаксис распространения массива вместе с slice() методом. Метод slice() позволяет вырезать «кусочек» массива. Чтобы вставить элемент, вы создадите массив, который распределяет фрагмент перед точкой вставки, затем новый элемент, а затем остальную часть исходного массива.

// В этом примере кнопка «Вставить» всегда вставляет по индексу 1:

import { useState } from 'react';

let nextId2 = 3;
const initialArtists2 = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

//# Внесение других изменений в массив
