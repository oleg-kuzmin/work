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
// В React функция useState, как и любая другая функция, начинающаяся с "use", называется хуком.

// Хуки - это специальные функции, которые доступны только во время рендеринга (который мы рассмотрим более подробно на следующей странице). Они позволяют вам "подключаться" к различным функциям React.

// Состояние - лишь одна из этих функций, но с другими хуками вы познакомитесь позже.

//! Внимание
// Хуки-функции, начинающиеся с use, можно вызывать только на верхнем уровне ваших компонентов или ваших собственных хуков Вы не можете вызывать хуки внутри условий, циклов или других вложенных функций. Hooks - это функции, но полезно думать о них как о безусловных декларациях о потребностях вашего компонента. Вы "используете" функции React в верхней части вашего компонента подобно тому, как вы "импортируете" модули в верхней части вашего файла.
//! Внимание

//# Анатомия useState
/* Когда вы вызываете useState, вы говорите React, что хотите, чтобы этот компонент что-то запомнил:
const [index, setIndex] = useState(0);
*/

// В данном случае вы хотите, чтобы React запомнил index.

// Принято называть эту пару так: const [something, setSomething]. Вы можете назвать ее как угодно, но соглашения облегчают понимание в разных проектах.

// Единственным аргументом для useState является инициальное значение вашей переменной состояния. В этом примере начальное значение index установлено в 0 с помощью useState(0).

/* При каждом рендеринге компонента useState выдает массив, содержащий два значения:
1. Переменная state (index) со значением, которое вы сохранили.
2. Функция установки состояния (setIndex), которая может обновить переменную состояния и вызвать React для повторного рендеринга компонента.
*/

/* Вот как это происходит в действии:
const [index, setIndex] = useState(0);

1. Поскольку вы передали 0 в useState в качестве начального значения для index, он вернет [0, setIndex]. React помнит, что 0 - это последнее значение состояния.
2. Вы обновляете состояние. Когда пользователь нажимает на кнопку, вызывается setIndex(index + 1). index - это 0, поэтому вызывается setIndex(1). Это указывает React на то, что index теперь 1, и вызывает другой рендер.
3. Второй рендер вашего компонента. React все еще видит useState(0), но поскольку React помнит, что вы установили index в 1, он возвращает [1, setIndex] вместо этого.
4. И так далее!
*/

//# Предоставление компоненту нескольких переменных состояния
