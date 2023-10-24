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


