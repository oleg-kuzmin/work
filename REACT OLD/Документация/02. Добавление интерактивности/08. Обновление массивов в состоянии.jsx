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
// Иногда вам может понадобиться вставить элемент в определенную позицию, которая не находится ни в начале, ни в конце. Для этого вы можете использовать синтаксис расширения массива ... вместе с методом slice(). Метод slice() позволяет вам вырезать "кусочек" массива. Чтобы вставить элемент, вы создадите массив, который будет распространять кусочек до точки вставки, затем новый элемент, а затем остальную часть исходного массива.

// В этом примере кнопка Insert всегда вставляет в индекс 1:

//* App.js
import { useState } from 'react';

nextId = 3;
initialArtists = [
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
// Есть некоторые вещи, которые нельзя сделать с помощью синтаксиса распространения и таких неизменяющих методов, как map() и filter(). Например, вы можете захотеть развернуть или отсортировать массив. Методы JavaScript reverse() и ort() мутируют исходный массив, поэтому вы не можете использовать их напрямую.

// Однако можно сначала скопировать массив, а затем внести в него изменения.

//* App.js
import { useState } from 'react';

nextId = 3;
initialList = [
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

// Здесь вы используете синтаксис распространения [...list], чтобы сначала создать копию исходного массива. Теперь, когда у вас есть копия, вы можете использовать такие мутирующие методы, как nextList.reverse() или nextList.sort(), или даже назначить отдельные элементы с помощью nextList[0] = "something".

// Однако, даже если вы копируете массив, вы не можете изменять существующие элементы внутри массива напрямую. Это происходит потому, что копирование неглубокое - новый массив будет содержать те же элементы, что и исходный. Поэтому если вы изменяете объект внутри скопированного массива, вы изменяете существующее состояние. Например, такой код представляет собой проблему.

const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);

// Хотя nextList и list являются двумя разными массивами, nextList[0] и list[0] указывают на один и тот же объект. Поэтому, изменяя nextList[0].seen, вы также изменяете list[0].seen. Это мутация состояния, которой следует избегать! Вы можете решить эту проблему аналогично обновлению вложенных объектов JavaScript, путем копирования отдельных элементов, которые вы хотите изменить, вместо их мутации. Вот как это делается.

//# Обновление объектов внутри массивов
// Объекты не на самом деле расположены "внутри" массивов. В коде они могут казаться "внутри", но каждый объект в массиве - это отдельное значение, на которое "указывает" массив. Вот почему нужно быть осторожным при изменении вложенных полей типа list[0]. Список произведений искусства другого человека может указывать на тот же элемент массива!

// При обновлении вложенного состояния необходимо создавать копии от точки, где вы хотите обновить, и до самого верхнего уровня. Давайте посмотрим, как это работает.

// В этом примере два отдельных списка произведений искусства имеют одинаковое начальное состояние. Они должны быть изолированы, но из-за мутации их состояние случайно стало общим, и установка флажка в одном списке влияет на другой список:

//* App.js
import { useState } from 'react';

nextId = 3;
initialList = [
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

// Проблема возникает в коде, подобном этому:

const myNextList = [...myList];
const artwork = myNextList.find(a => a.id === artworkId);
artwork.seen = nextSeen; // Problem: mutates an existing item
setMyList(myNextList);

// Хотя сам массив myNextList является новым, сами элементы являются теми же, что и в исходном массиве myList. Таким образом, изменение artwork.seen изменяет оригинальный элемент произведения искусства. Этот элемент также находится в yourList, что и вызывает ошибку. О таких ошибках сложно думать, но, к счастью, они исчезают, если вы избегаете мутирования состояния.

// Вы можете использовать map для замены старого элемента на его обновленную версию без мутации состояния.

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

// Здесь ... - это синтаксис распространения объекта, используемый для создания копии объекта.

// При таком подходе ни один из существующих элементов состояния не изменяется, и ошибка исправлена:

//* App.js
import { useState } from 'react';

nextId = 3;
initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketList() {
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

// В общем, вы должны мутировать только те объекты, которые вы только что создали. Если вы вставляете новый объект, вы можете мутировать его, но если вы имеете дело с чем-то, что уже находится в состоянии, вам нужно сделать копию.

//# Пишем лаконичную логику обновления с помощью Immer
// Обновление вложенных массивов без мутации может стать немного повторяющимся. Как и в случае с объектами:

// Как правило, вам не нужно обновлять состояние глубже, чем на пару уровней. Если ваши объекты состояния очень глубокие, возможно, вы захотите перестроить их по-другому, чтобы они были плоскими.

// Если вы не хотите менять структуру состояний, лучше использовать Immer, который позволяет писать, используя удобный, но мутирующий синтаксис, и заботится о создании копий за вас.

// Вот пример Art Bucket List, переписанный с помощью Immer:

//* App.js
import { useState } from 'react';
import { useImmer } from 'use-immer';

nextId = 3;
initialList = [
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

// Обратите внимание, что с Immer, мутация типа artwork.seen = nextSeen теперь в порядке:
updateMyTodos(draft => {
  const artwork = draft.find(a => a.id === artworkId);
  artwork.seen = nextSeen;
});

// Это происходит потому, что вы не изменяете оригинальное состояние, а изменяете специальный объект draft, предоставленный Immer. Аналогично, вы можете применять такие мутирующие методы, как push() и pop() к содержимому draft.

// За кулисами Immer всегда строит следующее состояние с нуля в соответствии с изменениями, которые вы внесли в draft. Это позволяет сделать обработчики событий очень лаконичными, не изменяя состояние.

//# Итоги
/*
- Вы можете поместить массивы в состояние, но вы не можете их изменить.
- Вместо того, чтобы изменять массив, создайте новую его версию и обновите состояние на нее.
- Вы можете использовать синтаксис [...arr, newItem] для создания массивов с новыми элементами.
- Вы можете использовать filter() и map() для создания новых массивов с отфильтрованными или преобразованными элементами.
- Вы можете использовать Immer для сохранения краткости кода.
*/
