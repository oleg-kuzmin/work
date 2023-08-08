//# Обновление объектов в состоянии
// Состояние может содержать любое значение JavaScript, включая объекты. Но вы не должны напрямую изменять объекты, которые вы держите в состоянии React. Вместо этого, когда вы хотите обновить объект, вам нужно создать новый (или сделать копию существующего), а затем установить состояние для использования этой копии.

/* Вы выучите:
- Как правильно обновить объект в состоянии React
- Как обновить вложенный объект, не изменяя его
- Что такое неизменность и как ее не нарушить
- Как сделать копирование объектов менее повторяющимся с помощью Immer
*/

//# Что такое мутация?
// Вы можете хранить любое значение JavaScript в состоянии.

const [x, setX] = useState(0);

// До сих пор вы работали с числами, строками и логическими значениями. Эти виды значений JavaScript являются «неизменяемыми», то есть неизменяемыми или «только для чтения». Вы можете запустить повторный рендеринг для замены значения:

setX(5);

// Состояние x изменилось с 0 на 5, но само число 0 не изменилось. Невозможно внести какие-либо изменения во встроенные примитивные значения, такие как числа, строки и логические значения в JavaScript.

// Теперь рассмотрим объект в состоянии:

const [position, setPosition] = useState({ x: 0, y: 0 });

// Технически возможно изменить содержимое самого объекта . Это называется мутацией:

position.x = 5;

// Однако, хотя объекты в состоянии React технически изменяемы, вы должны обращаться с ними так, как если бы они были неизменяемыми — например, числа, логические значения и строки. Вместо того, чтобы изменять их, вы всегда должны заменять их.

//# Рассматривать состояние как доступное только для чтения
// Другими словами, вы должны рассматривать любой объект JavaScript, который вы переводите в состояние, как доступный только для чтения.

// В этом примере объект хранится в состоянии, представляющем текущую позицию указателя. Красная точка должна двигаться, когда вы касаетесь или перемещаете курсор над областью предварительного просмотра. Но точка остается в исходном положении:

import { useState } from 'react';
function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={e => {
        position.x = e.clientX;
        position.y = e.clientY;
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

/* Проблема в этом фрагменте кода:

onPointerMove={e => {
  position.x = e.clientX;
  position.y = e.clientY;
}}

*/

// Этот код изменяет объект, назначенный position из предыдущего рендеринга. Но без использования функции установки состояния React не знает, что объект изменился. Так что React ничего не делает в ответ. Это как пытаться изменить порядок после того, как вы уже поели. Хотя в некоторых случаях изменение состояния может работать, мы не рекомендуем это делать. Вы должны рассматривать значение состояния, к которому у вас есть доступ в рендеринге, как доступное только для чтения.

/* Чтобы в этом случае действительно запустить повторный рендеринг , создайте новый объект и передайте его функции настройки состояния:

onPointerMove={e => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  });
}}

*/

/* С помощью setPosition вы сообщаете React:
- Заменить position этим новым объектом
- И снова отрендерить этот компонент
*/

// Обратите внимание, как красная точка теперь следует за вашим указателем, когда вы касаетесь или наводите курсор на область предварительного просмотра:

import { useState } from 'react';
function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

//* Локальная мутация в порядке
// Такой код представляет собой проблему, потому что он изменяет существующий объект в состоянии:

position.x = e.clientX;
position.y = e.clientY;

// Но такой код абсолютно удобен , потому что вы мутируете только что созданный новый объект:

const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);

// На самом деле, это полностью эквивалентно написанию этого:

setPosition({
  x: e.clientX,
  y: e.clientY,
});

// Мутация представляет собой проблему только тогда, когда вы изменяете существующие объекты, которые уже находятся в состоянии. Модифицировать только что созданный объект можно, потому что никакой другой код еще не ссылается на него. Его изменение не повлияет случайно на что-то, что от него зависит. Это называется «локальной мутацией». Вы даже можете выполнять локальную мутацию во время рендеринга. Очень удобно и совершенно нормально!

//# Копирование объектов с использованием спред-синтаксиса
// В предыдущем примере positionобъект всегда создается заново из текущей позиции курсора. Но часто вы захотите включить существующие данные как часть нового объекта, который вы создаете. Например, вы можете обновить только одно поле в форме, но сохранить предыдущие значения для всех остальных полей.

// Эти поля ввода не работают, потому что onChange обработчики изменяют состояние:

import { useState } from 'react';

function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

// Например, эта строка изменяет состояние из прошлого рендера:
person.firstName = e.target.value;

// Надежный способ получить желаемое поведение — создать новый объект и передать его в setPerson. Но здесь вы хотите также скопировать в него существующие данные, потому что изменилось только одно из полей:

setPerson({
  firstName: e.target.value, // New first name from the input
  lastName: person.lastName,
  email: person.email,
});

// Вы можете использовать синтаксис ... распространения объекта, чтобы вам не нужно было копировать каждое свойство отдельно.
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value, // But override this one
});

// Теперь форма работает!

// Обратите внимание, что вы не объявили отдельную переменную состояния для каждого поля ввода. Для больших форм очень удобно хранить все данные сгруппированными в объекте — при условии, что вы правильно его обновляете!

import { useState } from 'react';

function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

// Обратите внимание, что ...синтаксис расширения «поверхностный» — он копирует элементы только на один уровень вглубь. Это делает его быстрым, но это также означает, что если вы хотите обновить вложенное свойство, вам придется использовать его более одного раза.

//# Использование одного обработчика событий для нескольких полей
// Вы также можете использовать фигурные скобки [и] внутри определения объекта, чтобы указать свойство с динамическим именем. Вот тот же пример, но с одним обработчиком событий вместо трех разных:

import { useState } from 'react';

function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input name="firstName" value={person.firstName} onChange={handleChange} />
      </label>
      <label>
        Last name:
        <input name="lastName" value={person.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

// Здесь e.target.name относится к name свойству, данному <input> элементу DOM.

//# Обновление вложенного объекта
// Рассмотрим структуру вложенных объектов, подобную этой:

const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  },
});

// Если вы хотели обновить person.artwork.city, понятно, как это сделать с помощью мутации:

person.artwork.city = 'New Delhi';

// Но в React вы считаете состояние неизменным! Чтобы изменить city, вам сначала нужно создать новый artwork объект (предварительно заполненный данными из предыдущего), а затем создать новый person объект, который указывает на новый artwork:

const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);

// Или, записанный как вызов одной функции:

setPerson({
  ...person, // Copy other fields
  artwork: {
    // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi', // but in New Delhi!
  },
});

// Это немного многословно, но во многих случаях работает нормально:

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

//* Объекты на самом деле не вложены
// Такой объект выглядит «вложенным» в код:

let obj = {
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  },
};

// Однако «вложенность» — это неточный способ представления о том, как ведут себя объекты. Когда код выполняется, нет такого понятия, как «вложенный» объект. Вы действительно смотрите на два разных объекта:

let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1,
};

// Объект obj1 не находится «внутри» obj2. Например, obj3 может также «указывать» на obj1:

let obj11 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj22 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1,
};

let obj33 = {
  name: 'Copycat',
  artwork: obj11,
};

// Если бы вы мутировали obj3.artwork.city, это затронуло бы и , obj2.artwork.city и obj1.city. Это потому obj3.artwork, что obj2.artwork, и obj1 являются одним и тем же объектом. Это трудно увидеть, когда вы думаете об объектах как о «вложенных». Вместо этого они представляют собой отдельные объекты, «указывающие» друг на друга со свойствами.

//# Напишите краткую логику обновления с помощью Immer
// Если ваше состояние глубоко вложено, вы можете подумать о его выравнивании. Но если вы не хотите менять структуру своего состояния, вы можете предпочесть ярлык для вложенных разворотов. Immer — это популярная библиотека, которая позволяет вам писать с использованием удобного, но изменяющегося синтаксиса и заботится о создании копий для вас. С Immer код, который вы пишете, выглядит так, будто вы «нарушаете правила» и мутируете объект:

updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});

// Но в отличие от обычной мутации, она не перезаписывает прошлое состояние!

//* Как работает Иммер?
// Иммер draft предоставляет объект особого типа, называемый прокси, который «записывает» то, что вы с ним делаете. Вот почему вы можете свободно мутировать его сколько угодно! Под капотом Immer выясняет, какие части draft были изменены, и создает совершенно новый объект, содержащий ваши изменения.

/* Чтобы попробовать Иммер:
1. Запустите npm install use-immer, чтобы добавить Immer в качестве зависимости
2. Затем замените import { useState } from 'react' на import { useImmer } from 'use-immer'
*/

// Вот приведенный выше пример, преобразованный в Immer:

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

// Обратите внимание, насколько лаконичнее стали обработчики событий. Вы можете смешивать и сочетать useStateв useImmerодном компоненте столько, сколько хотите. Immer — отличный способ сделать обработчики обновлений краткими, особенно если в вашем состоянии есть вложенность, а копирование объектов приводит к повторяющемуся коду.

//* Почему мутирующее состояние не рекомендуется в React?
/* Есть несколько причин:
- Отладка: если вы используете console.log состояние и не изменяете его, ваши прошлые журналы не будут стерты более поздними изменениями состояния. Таким образом, вы можете четко видеть, как состояние менялось между рендерами.
- Оптимизация: общие стратегии оптимизации React основаны на пропуске работы, если предыдущие реквизиты или состояние такие же, как и следующие. Если вы никогда не изменяете состояние, очень быстро проверить, были ли какие-либо изменения. Если prevObj === obj, то можете быть уверены, что внутри него ничего не могло измениться.
- Новые функции. Новые функции React, которые мы создаем, полагаются на то, что состояние рассматривается как снимок. Если вы изменяете прошлые версии состояния, это может помешать вам использовать новые функции.
- Изменения в требованиях. Некоторые функции приложения, такие как реализация отмены/возврата, отображение истории изменений или предоставление пользователю возможности сбросить форму до более ранних значений, легче реализовать, когда ничего не изменяется. Это связано с тем, что вы можете хранить прошлые копии состояния в памяти и повторно использовать их при необходимости. Если вы начнете с мутативного подхода, впоследствии будет сложно добавить такие функции.
- Более простая реализация: поскольку React не полагается на мутацию, ему не нужно делать ничего особенного с вашими объектами. Ему не нужно захватывать их свойства, всегда оборачивать их в прокси или выполнять другую работу при инициализации, как это делают многие «реактивные» решения. По этой же причине React позволяет переводить в состояние любой объект — независимо от его размера — без дополнительных проблем с производительностью или корректностью.

На практике вы часто можете «уйти» от мутирующего состояния в React, но мы настоятельно рекомендуем вам не делать этого, чтобы вы могли использовать новые функции React, разработанные с учетом этого подхода. Будущие участники и, возможно, даже вы сами в будущем будете вам благодарны!
*/

//# Резюме
/*
- Рассматривайте все состояния в React как неизменяемые.
- Когда вы сохраняете объекты в состоянии, их изменение не приведет к запуску рендеринга и изменит состояние в предыдущих «моментальных снимках» рендеринга.
- Вместо того, чтобы изменять объект, создайте его новую версию и запустите повторный рендеринг, установив для него состояние.
- Вы можете использовать {...obj, something: 'newValue'} синтаксис распространения объектов для создания копий объектов.
- Синтаксис распространения неглубокий: он копирует только один уровень в глубину.
- Чтобы обновить вложенный объект, вам нужно создать копии на всем пути от того места, которое вы обновляете.
- Чтобы уменьшить повторяющееся копирование кода, используйте Immer.
*/
