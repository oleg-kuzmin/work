//# Обновление объектов в состоянии
// Состояние может хранить любые значения JavaScript, включая объекты. Но вы не должны изменять объекты, которые хранятся в состоянии React, напрямую. Вместо этого, когда вы хотите обновить объект, вам нужно создать новый (или сделать копию существующего), а затем настроить состояние на использование этой копии.

/* Вы узнаете
- Как правильно обновить объект в React state
- Как обновить вложенный объект без его мутирования
- Что такое неизменяемость и как ее не нарушить
- Как сделать копирование объектов менее повторяющимся с помощью Immer
*/

//# Что такое мутация?
// В состоянии можно хранить любые значения JavaScript.
const [x, setX] = useState(0);

// До сих пор вы работали с числами, строками и булевыми числами. Эти типы значений JavaScript являются "неизменяемыми", то есть неизменяемыми или "только для чтения". Чтобы заменить значение, можно вызвать повторный рендеринг:
setX(5);

// Состояние x изменилось с 0 на 5, но само число 0 не изменилось. В JavaScript невозможно внести какие-либо изменения во встроенные примитивные значения, такие как числа, строки и булевы.

// Теперь рассмотрим объект в состоянии:
const [position, setPosition] = useState({ x: 0, y: 0 });

// Технически, можно изменить содержимое самого объекта. Это называется мутацией:
position.x = 5;

// Однако, хотя объекты в React state технически являются изменяемыми, вы должны относиться к ним как к неизменяемым, как к числам, булевым числам и строкам. Вместо того чтобы изменять их, вы всегда должны заменять их.

//# Рассматривать состояние как доступное только для чтения
// Другими словами, вы должны относиться к любому объекту JavaScript, который вы помещаете в состояние, как к объекту только для чтения.

// В этом примере в состоянии находится объект, представляющий текущее положение указателя. Красная точка должна перемещаться при касании или перемещении курсора по области предварительного просмотра. Но точка остается в исходном положении:

//* App.js
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

/* Проблема заключается в этом фрагменте кода.
onPointerMove={e => {
  position.x = e.clientX;
  position.y = e.clientY;
}}
*/

// Этот код изменяет объект, назначенный на position из предыдущего рендера. Но без использования функции установки состояния React не знает, что объект изменился. Поэтому React ничего не делает в ответ. Это все равно что пытаться изменить заказ после того, как вы уже поели. Хотя мутирование состояния может работать в некоторых случаях, мы не рекомендуем этого делать. Вы должны рассматривать значение состояния, к которому вы имеете доступ во время рендеринга, как доступное только для чтения.

/* Чтобы действительно вызвать повторный рендеринг в этом случае, создайте новый объект и передайте его в функцию установки состояния:
onPointerMove={e => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  });
}}
*/

/* С помощью setPosition вы говорите React:
- Замените position на этот новый объект.
- И снова отобразите этот компонент
*/

// Обратите внимание, что красная точка теперь следует за вашим указателем, когда вы касаетесь или наводите курсор на область предварительного просмотра:

//* App.js
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

//* Локальная мутация — это нормально
// Код, подобный этому, является проблемой, потому что он изменяет существующий объект в состоянии:
position.x = e.clientX;
position.y = e.clientY;

// Но такой код абсолютно нормален, потому что вы мутируете свежий объект, который вы только что создали:
const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);

// На самом деле, это совершенно равносильно тому, чтобы написать это:
setPosition({
  x: e.clientX,
  y: e.clientY,
});

// Мутация является проблемой только тогда, когда вы изменяете существующие объекты, которые уже находятся в состоянии. Мутация только что созданного объекта - это нормально, потому что на него пока не ссылается никакой другой код. Изменение объекта не окажет случайного влияния на что-то, что от него зависит. Это называется "локальной мутацией". Вы даже можете делать локальную мутацию во время рендеринга Очень удобно и совершенно нормально!
//* Локальная мутация — это нормально

//# Копирование объектов с синтаксисом ...
// В предыдущем примере объект position всегда создается свежим из текущей позиции курсора. Но часто возникает необходимость включить существующие данные как часть нового создаваемого объекта. Например, вы можете захотеть обновить только одно поле в форме, но сохранить прежние значения для всех остальных полей.

// Такие поля ввода не работают, потому что обработчики onChange изменяют состояние:

//* App.js
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

// Например, эта строка мутирует состояние из прошлого рендеринга:
person.firstName = e.target.value;

// Надежный способ добиться нужного вам поведения — создать новый объект и передать его в setPerson. Но здесь вы хотите также копировать в него существующие данные, поскольку изменилось только одно из полей:

setPerson({
  firstName: e.target.value, // New first name from the input
  lastName: person.lastName,
  email: person.email,
});

// Вы можете использовать синтаксис ... распространение объекта, чтобы не копировать каждое свойство отдельно.

setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value, // But override this one
});

// Теперь форма работает!

// Обратите внимание, что вы не объявили отдельную переменную состояния для каждого поля ввода. Для больших форм очень удобно хранить все данные, сгруппированные в одном объекте — при условии, что вы правильно их обновляете!

//* App.js
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

// Обратите внимание, что синтаксис распространения ... является "неглубоким" - он копирует объекты только на один уровень вглубь. Это делает его быстрым, но это также означает, что если вы хотите обновить вложенное свойство, вам придется использовать его несколько раз.

//* Использование одного обработчика событий для нескольких полей
// Вы также можете использовать скобки [ и ] внутри определения объекта, чтобы указать свойство с динамическим именем. Вот тот же пример, но с одним обработчиком событий вместо трех разных:

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

// Здесь e.target.name относится к свойству name, заданному DOM-элементу <input>.
//* Использование одного обработчика событий для нескольких полей

//# Обновление вложенного объекта
// Рассмотрим структуру вложенного объекта следующим образом:

const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  },
});

// Если вы хотите обновить person.artwork.city, то понятно, как это сделать с помощью мутации:
person.artwork.city = 'New Delhi';

// Но в React состояние рассматривается как неизменяемое! Чтобы изменить city, вам сначала нужно создать новый объект artwork (предварительно заполненный данными из предыдущего объекта), а затем создать новый объект person, который указывает на новый artwork:

const nextArtwork = {
  ...person.artwork,
  city: 'New Delhi',
};
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);

// Или записанный как вызов одной функции:

setPerson({
  ...person, // Copy other fields
  artwork: {
    // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi', // but in New Delhi!
  },
});

// Это немного многословно, но для многих случаев подходит:

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

//* Объекты на самом деле не являются вложенными
// Объект, подобный этому, появляется "вложенным" в код:
let obj = {
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  },
};

// Однако "вложенность" - это неточный способ представления о том, как ведут себя объекты. Когда код выполняется, не существует такого понятия, как "вложенный" объект. На самом деле вы рассматриваете два разных объекта:

let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1,
};

// Объект obj1 не находится "внутри" obj2. Например, obj3 может "указывать" и на obj1:

obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1,
};

obj3 = {
  name: 'Copycat',
  artwork: obj1,
};

// Если бы вы изменили obj3.artwork.city, это повлияло бы и на obj2.artwork.city, и на obj1.city. Это происходит потому, что obj3.artwork, obj2.artwork и obj1 являются одним и тем же объектом. Это трудно заметить, когда вы думаете об объектах как о "вложенных". Вместо этого они представляют собой отдельные объекты, "указывающие" друг на друга с помощью свойств.
//* Объекты на самом деле не являются вложенными

//# Напишите лаконичную логику обновления с помощью Immer
// Если ваше состояние глубоко вложенное, вы можете рассмотреть возможность сглаживания. Но если вы не хотите менять структуру состояния, вы можете предпочесть быстрый путь к вложенным спредам. Immer - это популярная библиотека, которая позволяет вам писать, используя удобный, но мутирующий синтаксис, и заботится о создании копий за вас. С Immer написанный вами код выглядит так, как будто вы "нарушаете правила" и мутируете объект:

updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});

// Но в отличие от обычной мутации, она не переписывает прошлое состояние!

//* Как работает Immer?
// "Черновик", предоставляемый Immer, является особым типом объекта, называемым Proxy, который "записывает" то, что вы с ним делаете. Именно поэтому вы можете свободно мутировать его сколько угодно! Под капотом Immer определяет, какие части черновика были изменены, и создает совершенно новый объект, содержащий ваши правки.
//* Как работает Immer?

/* Чтобы попробовать Immer:
1. Запустите npm install use-immer, чтобы добавить Immer в качестве зависимости.
2. Затем замените import { useState } из 'react' на import { useImmer } из 'use-immer'.
*/

// Вот вышеприведенный пример, преобразованный в Immer:

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

// Обратите внимание, насколько более лаконичными стали обработчики событий. Вы можете смешивать и сочетать useState и useImmer в одном компоненте сколько угодно. Immer — отличный способ сохранить обработчики обновлений лаконичными, особенно если в вашем состоянии есть вложенность, и копирование объектов приводит к повторяющемуся коду.

//* Почему мутирование состояния не рекомендуется в React?
/* Есть несколько причин:
- Отладка: Если вы используете console.log и не мутируете состояние, ваши прошлые логи не будут забиты недавними изменениями состояния. Таким образом, вы можете четко видеть, как изменялось состояние между рендерами.
- Оптимизация: Обычные стратегии оптимизации React полагаются на пропуск работы, если предыдущие пропсы или состояние совпадают с последующими. Если вы никогда не изменяете состояние, то проверить, были ли изменения, можно очень быстро. Если prevObj === obj, вы можете быть уверены, что внутри него ничего не могло измениться.
- Новые возможности: Новые возможности React, которые мы создаем, зависят от того, что состояние рассматривается как снимок. Если вы мутируете прошлые версии состояния, это может помешать вам использовать новые возможности.
- Изменения требований: Некоторые возможности приложения, такие как реализация Undo/Redo, показ истории изменений или предоставление пользователю возможности вернуть форму к прежним значениям, проще сделать, если ничего не мутировать. Это происходит потому, что вы можете хранить в памяти прошлые копии состояния и использовать их повторно, когда это необходимо. Если вы начнете с мутативного подхода, такие функции, как эта, будет трудно добавить позже.
- Простая реализация: Поскольку React не полагается на мутацию, ему не нужно делать ничего особенного с вашими объектами. Ему не нужно перехватывать их свойства, всегда оборачивать их в прокси или выполнять другую работу при инициализации, как это делают многие "реактивные" решения. Именно поэтому React позволяет вам поместить любой объект в состояние - независимо от его размера - без дополнительных проблем с производительностью и корректностью.

На практике вы часто можете "уйти" от мутирования состояния в React, но мы настоятельно рекомендуем вам не делать этого, чтобы вы могли использовать новые возможности React, разработанные с учетом этого подхода. Будущие разработчики и, возможно, даже ваше будущее "я" скажут вам спасибо!
*/
//* Почему мутирование состояния не рекомендуется в React?

//# Резюме
