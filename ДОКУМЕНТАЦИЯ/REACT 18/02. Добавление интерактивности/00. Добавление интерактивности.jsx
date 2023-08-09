//# Добавление интерактивности
// Некоторые элементы на экране обновляются в ответ на действия пользователя. Например, щелчок по галерее изображений переключает активное изображение. В React данные, которые меняются со временем, называются состоянием. Вы можете добавить состояние к любому компоненту и обновить его по мере необходимости. В этой главе вы узнаете, как писать компоненты, которые обрабатывают взаимодействия, обновляют свое состояние и отображают разные выходные данные с течением времени.

/* В этой главе
- Как обрабатывать события, инициированные пользователем
- Как заставить компоненты «запоминать» информацию о состоянии
- Как React обновляет пользовательский интерфейс в два этапа
- Почему состояние не обновляется сразу после его изменения
- Как поставить в очередь несколько обновлений состояния
- Как обновить объект в состоянии
- Как обновить массив в состоянии
*/

//# Реагирование на события
// React позволяет добавлять обработчики событий в ваш JSX. Обработчики событий — это ваши собственные функции, которые будут запускаться в ответ на действия пользователя, такие как щелчок, наведение курсора, фокусировка на вводе формы и т. д.

// Встроенные компоненты, например, <button> поддерживают только встроенные события браузера, такие как onClick. Однако вы также можете создавать свои собственные компоненты и давать свойствам их обработчиков событий любые имена, характерные для приложения, которые вам нравятся.

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
// Компонентам часто необходимо изменить то, что отображается на экране в результате взаимодействия. Ввод в форму должен обновить поле ввода, нажатие «Далее» на карусели изображений должно изменить отображаемое изображение, нажатие «Купить» помещает продукт в корзину. Компоненты должны «запоминать» вещи: текущее входное значение, текущее изображение, корзину. В React такой тип памяти для конкретного компонента называется состоянием.

// Вы можете добавить состояние к компоненту с помощью useStateхука. Хуки — это специальные функции, которые позволяют вашим компонентам использовать функции React (состояние — одна из таких функций). Хук useStateпозволяет объявить переменную состояния. Он принимает начальное состояние и возвращает пару значений: текущее состояние и функцию установки состояния, которая позволяет вам обновить его.

const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);

// Вот как галерея изображений использует и обновляет состояние по клику:

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

//# Рендеринг и коммит
// Прежде чем ваши компоненты отобразятся на экране, они должны быть обработаны React. Понимание шагов этого процесса поможет вам понять, как выполняется ваш код, и объяснить его поведение.

// Представьте, что ваши компоненты — повара на кухне, собирающие вкусные блюда из ингредиентов. В этом сценарии React — это официант, который принимает запросы от клиентов и приносит им их заказы. Этот процесс запроса и обслуживания пользовательского интерфейса состоит из трех этапов:

// 1. Запуск рендера (доставка заказа посетителя на кухню)
// 2. Рендер компонента (подготовка заказа на кухне)
// 3. Коммит в DOM (размещение ордера на столе)

//# Состояние как снимок
// В отличие от обычных переменных JavaScript, состояние React больше похоже на снимок. Его установка не изменяет уже имеющуюся у вас переменную состояния, а вместо этого запускает повторный рендеринг. Сначала это может удивить!

console.log(count); // 0
setCount(count + 1); // Request a re-render with 1
console.log(count); // Still 0!

// Такое поведение поможет вам избежать незаметных ошибок. Вот небольшое приложение для чата. Попробуйте угадать, что произойдет, если вы сначала нажмете «Отправить», а затем измените получателя на Боба. Чье имя появится через alertпять секунд?

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
// Этот компонент глючит: нажатие «+3» увеличивает счет только один раз.

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

// Состояние как снимок объясняет, почему это происходит. Установка состояния запрашивает новый повторный рендеринг, но не меняет его в уже работающем коде. Так score продолжает быть 0 сразу после вызова setScore(score + 1).

console.log(score); // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score); // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score); // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score); // 0

// Вы можете исправить это, передав функцию обновления при установке состояния. Обратите внимание, как замена setScore(score + 1)на setScore(s => s + 1) исправляет кнопку «+3». Это позволяет ставить в очередь несколько обновлений состояния.

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
// Состояние может содержать любое значение JavaScript, включая объекты. Но вы не должны напрямую изменять объекты и массивы, которые вы держите в состоянии React. Вместо этого, когда вы хотите обновить объект и массив, вам нужно создать новый (или сделать копию существующего), а затем обновить состояние, чтобы использовать эту копию.

// Обычно вы будете использовать ... синтаксис распространения для копирования объектов и массивов, которые вы хотите изменить. Например, обновление вложенного объекта может выглядеть так:

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

// Если копирование объектов в коде становится утомительным, вы можете использовать такую ​​библиотеку, как Immer , чтобы уменьшить повторяющийся код:

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

//# Обновление массивов в состоянии
// Массивы — это еще один тип изменяемых объектов JavaScript, которые вы можете хранить в состоянии и должны рассматривать как доступные только для чтения. Как и в случае с объектами, когда вы хотите обновить массив, хранящийся в состоянии, вам нужно создать новый (или сделать копию существующего), а затем установить состояние для использования нового массива:


