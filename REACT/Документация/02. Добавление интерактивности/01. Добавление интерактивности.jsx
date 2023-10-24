//# Добавление интерактивности
// Некоторые элементы на экране обновляются в ответ на ввод пользователя. Например, щелчок по галерее изображений переключает активное изображение. В React данные, которые изменяются со временем, называются состояние. Вы можете добавить состояние в любой компонент и обновлять его по мере необходимости. В этой главе вы узнаете, как писать компоненты, которые обрабатывают взаимодействия, обновляют свое состояние и отображают различные результаты с течением времени.

/* В этой главе
- Как обрабатывать события, инициированные пользователем
- Как заставить компоненты "запоминать" информацию с помощью состояния
- Как React обновляет UI в два этапа
- Почему состояние не обновляется сразу после его изменения
- Как поставить в очередь несколько обновлений состояния
- Как обновить объект в состоянии
- Как обновить массив в состоянии
*/

//# Реагирование на события
// React позволяет добавлять обработчики событий в JSX. Обработчики событий - это ваши собственные функции, которые будут запускаться в ответ на действия пользователя, такие как нажатие, наведение курсора, фокусировка на вводе формы и так далее.

// Встроенные компоненты, такие как <button>, поддерживают только встроенные события браузера, такие как onClick. Однако вы также можете создавать собственные компоненты и давать их атрибутам обработчиков событий любые имена, специфичные для конкретного приложения.

//* App.js
function App() {
  return <Toolbar onPlayMovie={() => alert('Playing!')} onUploadImage={() => alert('Uploading!')} />;
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

//# Состояние: память компонента
// Компоненты часто нуждаются в изменении того, что отображается на экране в результате взаимодействия. Ввод текста в форму должен обновить поле ввода, нажатие кнопки "next" на карусели изображений должно изменить отображаемое изображение, нажатие кнопки "buy" помещает товар в корзину. Компоненты должны "запоминать" вещи: текущее значение ввода, текущее изображение, корзину. В React такая память, специфичная для компонента, называется state.

// Вы можете добавить состояние в компонент с помощью хука useState. Хуки - это специальные функции, которые позволяют вашим компонентам использовать возможности React (состояние - одна из таких возможностей). Хук useState позволяет вам объявить переменную состояния. Он принимает начальное состояние и возвращает пару значений: текущее состояние и функцию-установщик состояния, которая позволяет вам обновить его.

const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);

// Вот как галерея изображений использует и обновляет состояние по щелчку мыши:

//* data.js
const sculptureList = [
  {
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description:
      'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.',
  },
];

//* App.js
import { useState } from 'react';
import { sculptureList } from './data.js';

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

//# Рендеринг и фиксация
// Прежде чем ваши компоненты будут отображены на экране, они должны быть отрендерены React. Понимание этапов этого процесса поможет вам задуматься о том, как выполняется ваш код, и объяснить его поведение.

/* Представьте, что ваши компоненты - это повара на кухне, собирающие вкусные блюда из ингредиентов. В этом сценарии React - это официант, который выполняет запросы клиентов и приносит им их заказы. Этот процесс запроса и подачи пользовательского интерфейса состоит из трех этапов:

1. Триггер рендеринга (доставка заказа посетителя на кухню).
2. Рендеринг компонента (подготовка заказа на кухне)
3. Коммитирование в DOM (размещение заказа на столе)
*/

//# Состояние как моментальный снимок
// В отличие от обычных переменных JavaScript, состояние в React ведет себя скорее как моментальный снимок. Его установка не изменяет уже имеющуюся переменную state, а вместо этого вызывает повторный рендеринг. Поначалу это может удивить!

console.log(count); // 0
setCount(count + 1); // Request a re-render with 1
console.log(count); // Still 0!

// Такое поведение поможет вам избежать мелких ошибок. Вот небольшое приложение для чата. Попробуйте угадать, что произойдет, если вы сначала нажмете "Отправить", а затем потом измените получателя на Боба. Чье имя появится в оповещении пять секунд спустя?

//* App.js
import { useState } from 'react';

function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}

//# Постановка в очередь серии обновлений состояния
// Этот компонент имеет ошибку: нажатие на "+3" увеличивает счет только один раз.

//* App.js
import { useState } from 'react';

function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <h1>Score: {score}</h1>
    </>
  );
}

// Состояние как моментальный снимок объясняет, почему это происходит. Установка состояния запрашивает новый рендеринг, но не изменяет его в уже запущенном коде. Поэтому score продолжает быть 0 сразу после вызова setScore(score + 1).

console.log(score); // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score); // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score); // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score); // 0

// Это можно исправить, передав обновляющую функцию при установке состояния. Обратите внимание, как замена setScore(score + 1) на setScore(s => s + 1) исправляет кнопку "+3". Это позволяет поставить в очередь несколько обновлений состояния.

//* App.js
import { useState } from 'react';

function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(s => s + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <h1>Score: {score}</h1>
    </>
  );
}

//# Обновление объектов в состоянии
// Состояние может содержать любые значения JavaScript, включая объекты. Но вы не должны изменять объекты и массивы, которые хранятся в состоянии React, напрямую. Вместо этого, когда вы хотите обновить объект или массив, вам нужно создать новый (или сделать копию существующего), а затем обновить состояние, чтобы использовать эту копию.

// Обычно для копирования объектов и массивов, которые вы хотите изменить, используется синтаксис распространения .... Например, обновление вложенного объекта может выглядеть следующим образом:

//* App.js
import { useState } from 'react';

function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

// Если копирование объектов в коде становится утомительным, вы можете использовать библиотеку типа Immer для сокращения повторяющегося кода:

//* App.js
import { useImmer } from 'use-immer';

function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

