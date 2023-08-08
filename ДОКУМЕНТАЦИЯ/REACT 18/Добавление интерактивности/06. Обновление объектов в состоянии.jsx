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
