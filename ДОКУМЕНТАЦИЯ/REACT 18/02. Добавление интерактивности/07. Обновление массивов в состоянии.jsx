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
// Есть некоторые вещи, которые вы не можете сделать с помощью синтаксиса распространения и неизменяющих методов, таких как map() и filter() в одиночку. Например, вы можете захотеть перевернуть или отсортировать массив. JavaScript reverse() и sort() методы мутируют исходный массив, поэтому вы не можете использовать их напрямую.

// Однако вы можете сначала скопировать массив, а затем внести в него изменения.

// Например:

import { useState } from 'react';

let nextId3 = 3;
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

function List() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}

// Здесь вы используете [...list] синтаксис распространения, чтобы сначала создать копию исходного массива. Теперь, когда у вас есть копия, вы можете использовать методы изменения, такие как nextList.reverse() или nextList.sort(), или даже назначать отдельные элементы с помощью nextList[0] = "something".

// Однако, даже если вы скопируете массив, вы не сможете напрямую изменить существующие элементы внутри него. Это связано с тем, что копирование неглубокое — новый массив будет содержать те же элементы, что и исходный. Поэтому, если вы изменяете объект внутри скопированного массива, вы изменяете существующее состояние. Например, такой код является проблемой.

const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);

// Хотя nextList и list являются двумя разными массивами nextList[0] и list[0] указывают на один и тот же объект. Таким образом, изменяя nextList[0].seen, вы также меняете list[0].seen. Это мутация состояния, которой следует избегать! Вы можете решить эту проблему аналогично обновлению вложенных объектов JavaScript — копируя отдельные элементы, которые вы хотите изменить, вместо их изменения. Вот как.

//# Обновление объектов внутри массивов
// Объекты на самом деле не расположены «внутри» массивов. В коде они могут казаться «внутри», но каждый объект в массиве — это отдельное значение, на которое «указывает» массив. Вот почему вам нужно быть осторожным при изменении вложенных полей, таких как list[0]. Список произведений искусства другого человека может указывать на тот же элемент массива!

// При обновлении вложенного состояния вам необходимо создавать копии от точки, где вы хотите обновить, и вплоть до верхнего уровня. Давайте посмотрим, как это работает.

// В этом примере два отдельных списка иллюстраций имеют одинаковое начальное состояние. Предполагается, что они изолированы, но из-за мутации их состояние случайно становится общим, и установка флажка в одном списке влияет на другой список:

import { useState } from 'react';

let nextId4 = 3;
const initialList4 = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    const myNextList = [...myList];
    const artwork = myNextList.find(a => a.id === artworkId);
    artwork.seen = nextSeen;
    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find(a => a.id === artworkId);
    artwork.seen = nextSeen;
    setYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

// Проблема в таком коде:
const myNextList = [...myList];
const artwork = myNextList.find(a => a.id === artworkId);
artwork.seen = nextSeen; // Problem: mutates an existing item
setMyList(myNextList);

// Хотя myNextList сам массив новый, сами элементы такие же, как и в исходном myList массиве. Таким образом, изменение artwork.seenи зменяет исходный элемент изображения. Этот элемент изображения также находится в yourList, что вызывает ошибку. О таких ошибках может быть трудно думать, но, к счастью, они исчезают, если вы избегаете мутирующего состояния.

// Вы можете использовать map для замены старого элемента его обновленной версией без изменения.

setMyList(
  myList.map(artwork => {
    if (artwork.id === artworkId) {
      // Create a *new* object with changes
      return { ...artwork, seen: nextSeen };
    } else {
      // No changes
      return artwork;
    }
  })
);

// Используйте ... синтаксис распространения объекта для создания копии объекта.

// При таком подходе ни один из существующих элементов состояния не мутируется, а ошибка исправлена:

import { useState } from 'react';

let nextId5 = 3;
const initialList5 = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map(artwork => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
      })
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map(artwork => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
      })
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

// Как правило, вам следует изменять только те объекты, которые вы только что создали. Если бы вы вставляли новое изображение, вы могли бы изменить его, но если вы имеете дело с чем-то, что уже находится в состоянии, вам нужно сделать копию.

//# Краткая логика обновления с помощью Immer
/* Обновление вложенных массивов без изменения может стать немного повторяющимся. Так же, как с объектами:
- Как правило, вам не нужно обновлять состояние глубже, чем на пару уровней. Если ваши объекты состояния очень глубокие, вы можете захотеть реструктурировать их по-другому, чтобы они были плоскими.
- Если вы не хотите менять свою структуру состояний, вы можете предпочесть использовать Immer, который позволяет вам писать с использованием удобного, но видоизменяющегося синтаксиса и заботится о создании копий для вас.
*/

// Вот пример Art Bucket List, переписанный с помощью Immer:

import { useState } from 'react';
import { useImmer } from 'use-immer';

let nextId6 = 3;
const initialList6 = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketList() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a => a.id === id);
      artwork.seen = nextSeen;
    });
  }

  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

// Обратите внимание, как с Immer мутация вроде artwork.seen = nextSeen теперь в порядке:

updateMyTodos(draft => {
  const artwork = draft.find(a => a.id === artworkId);
  artwork.seen = nextSeen;
});

// Это потому, что вы изменяете не исходное состояние, а изменяете специальный draft объект, предоставленный Immer. Точно так же вы можете применять такие методы мутации, как push() и pop() к содержимому файла draft.

// В фоновом режиме Immer всегда создает следующее состояние с нуля в соответствии с изменениями, которые вы внесли в файл draft. Это позволяет вашим обработчикам событий быть очень краткими без изменения состояния.

//# Резюме
/*
- Вы можете поместить массивы в состояние, но вы не можете их изменить.
- Вместо того, чтобы изменять массив, создайте его новую версию и обновите для нее состояние.
- Вы можете использовать [...arr, newItem] синтаксис распространения массива для создания массивов с новыми элементами.
- Вы можете использовать filter() и map() для создания новых массивов с отфильтрованными или преобразованными элементами.
- Вы можете использовать Immer, чтобы ваш код был кратким.
*/
