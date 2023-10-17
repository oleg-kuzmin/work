//# Состояние: память компонента
// Компоненты часто должны изменять то, что отображается на экране в результате взаимодействия. Ввод текста в форму должен обновить поле ввода, нажатие кнопки "next" на карусели изображений должно изменить отображаемое изображение, нажатие кнопки "buy" должно поместить товар в корзину. Компоненты должны "запоминать" вещи: текущее значение ввода, текущее изображение, корзину. В React такая специфическая для компонентов память называется "состояние" (state).

/* Вы узнаете
- Как добавить переменную состояния с помощью хука useState
- Какую пару значений возвращает хук useState.
- Как добавить более одной переменной состояния
- Почему состояние называется локальным
*/

//# Когда обычной переменной недостаточно
// Вот компонент, который отображает изображение скульптуры. Нажатие на кнопку "Next" должно показать следующую скульптуру, изменив index на 1, затем 2 и так далее. Однако, это не работает (вы можете попробовать!):

//* data.js
export const sculptureList = [
  {
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description:
      'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.',
  },
  // ...
];

//* App.js
import { sculptureList } from './data.js';
function Gallery() {
  let index = 0;
  let sculpture = sculptureList[index];
  function handleClick() {
    index = index + 1;
  }
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

/* Обработчик события handleClick обновляет локальную переменную index. Но две вещи не позволяют увидеть это изменение:
1. Локальные переменные не сохраняются между рендерами. Когда React рендерит этот компонент во второй раз, он рендерит его с нуля - он не учитывает никаких изменений в локальных переменных.
2. Изменения локальных переменных не вызывают рендеринга. React не понимает, что ему нужно снова рендерить компонент с новыми данными.
*/

/* Чтобы обновить компонент новыми данными, должны произойти две вещи:
1. Сохранить данные между рендерами.
2. Триггер React для рендеринга компонента с новыми данными (повторный рендеринг).
*/

/* Хук useState обеспечивает эти две вещи:
1. Переменная state для сохранения данных между рендерами.
2. Функция state setter для обновления переменной и запуска React для повторного рендеринга компонента.
*/

//# Добавление переменной состояния
// Чтобы добавить переменную состояния, импортируйте useState из React в верхней части файла:
import { useState } from 'react';

// Затем замените let index = 0;
// на const [index, setIndex] = useState(0);

// index - это переменная состояния, а setIndex - функция-установщик.

// Синтаксис [ и ] здесь называется деструктуризация массива и позволяет вам читать значения из массива. Массив, возвращаемый useState, всегда содержит ровно два элемента.

// Вот как они работают вместе в handleClick:
function handleClick() {
  setIndex(index + 1);
}

// Теперь нажатием кнопки "Далее" переключите текущую скульптуру:

//* App.js
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

//# Встречайте свой первый хук