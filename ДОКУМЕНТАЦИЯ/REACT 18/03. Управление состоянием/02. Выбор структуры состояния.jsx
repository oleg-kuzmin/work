//# Выбор структуры состояния
// Хорошо структурированное состояние может сделать разницу между компонентом, который приятно модифицировать и отлаживать, и компонентом, который является постоянным источником ошибок. Вот несколько советов, которые следует учитывать при структурировании состояния.

/* Вы выучите:
- Когда использовать одну или несколько переменных состояния
- Чего следует избегать при организации состояния
- Как исправить общие проблемы с структурой состояния
*/

//# Принципы структурирования состояния
// Когда вы пишете компонент, который содержит какое-то состояние, вам придется выбирать, сколько переменных состояния использовать и какой должна быть форма их данных. Хотя можно писать правильные программы даже с неоптимальной структурой состояний, есть несколько принципов, которые помогут вам сделать правильный выбор:

// 1. Состояние, связанное с группой. Если вы всегда одновременно обновляете две или более переменных состояния, подумайте об объединении их в одну переменную состояния.

// 2. Избегайте противоречий в состоянии. Когда состояние структурировано таким образом, что несколько частей состояния могут противоречить и «не согласовываться» друг с другом, вы оставляете место для ошибок. Постарайтесь избежать этого.

// 3. Избегайте избыточного состояния. Если вы можете вычислить некоторую информацию из свойств компонента или его существующих переменных состояния во время рендеринга, вы не должны помещать эту информацию в состояние этого компонента.

// 4. Избегайте дублирования состояния. Когда одни и те же данные дублируются между несколькими переменными состояния или внутри вложенных объектов, их сложно синхронизировать. Уменьшите дублирование, когда сможете.

// 5. Избегайте глубоко вложенных состояний. Глубоко иерархическое состояние не очень удобно обновлять. По возможности предпочтительнее структурировать состояние в плоском виде.

// Целью этих принципов является упрощение обновления состояния без внесения ошибок. Удаление избыточных и повторяющихся данных из состояния помогает обеспечить синхронизацию всех его частей. Это похоже на то, как инженер базы данных может захотеть «нормализовать» структуру базы данных, чтобы уменьшить вероятность ошибок. Перефразируя Альберта Эйнштейна: «Сделайте свое состояние настолько простым, насколько это возможно, но не проще».

// Теперь давайте посмотрим, как эти принципы применяются в действии.

//# Состояние, связанное с группой
// Иногда вы можете быть не уверены, используете ли вы одну или несколько переменных состояния.

// Лучше сделать два состояния?
const [x, setX] = useState(0);
const [y, setY] = useState(0);

// Или одно?
const [position, setPosition] = useState({ x: 0, y: 0 });

// Технически вы можете использовать любой из этих подходов. Но если какие-то две переменные состояния всегда изменяются вместе, было бы неплохо объединить их в одну переменную состояния. Тогда вы не забудете всегда синхронизировать их, как в этом примере, когда перемещение курсора обновляет обе координаты красной точки:

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

// Другой случай, когда вы будете группировать данные в объект или массив, — это когда вы не знаете, сколько частей состояния вам понадобится. Например, это полезно, когда у вас есть форма, в которую пользователь может добавлять настраиваемые поля.

//* Важно
// Если ваша переменная состояния является объектом, помните, что вы не можете обновить в ней только одно поле без явного копирования других полей. Например, вы не можете сделать это в приведенном выше примере, потому что у setPosition({ x: 100 }) не будет вообще свойства y! Вместо этого, если вы хотите установить x отдельно, вы должны либо сделать setPosition({ ...position, x: 100 }), либо разделить их на две переменные состояния и сделать setX(100).

//# Избегайте противоречий в состоянии
// Вот форма обратной связи отеля с переменными состояния isSending и isSent:

import { useState } from 'react';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea disabled={isSending} value={text} onChange={e => setText(e.target.value)} />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

// Хотя этот код работает, он оставляет дверь открытой для «невозможных» состояний. Например, если вы забудете вызвать setIsSent и setIsSending вместе, вы можете оказаться в ситуации, когда оба isSending и isSent находятся в true одновременно. Чем сложнее ваш компонент, тем сложнее понять, что произошло.

// Поскольку isSending и isSent никогда не должны быть true одновременно, лучше заменить их одной status переменной состояния, которая может принимать одно из трех допустимых состояний: 'typing' (начальное), 'sending'и 'sent':

import { useState } from 'react';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea disabled={isSending} value={text} onChange={e => setText(e.target.value)} />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

// Вы все еще можете объявить некоторые константы для удобства чтения:

const isSending = status === 'sending';
const isSent = status === 'sent';

// Но они не являются переменными состояния, поэтому вам не нужно беспокоиться об их рассинхронизации друг с другом.

//# Избегайте избыточного состояния
// Если вы можете вычислить некоторую информацию из свойств компонента или его существующих переменных состояния во время рендеринга, вы не должны помещать эту информацию в состояние этого компонента.

// Например, возьмите эту форму. Она работает, но можете ли вы найти в ней какое-либо избыточное состояние?

import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

// Эта форма имеет три переменные состояния: firstName, lastName и fullName. Однако fullName избыточен. Вы всегда можете рассчитать fullName из firstName и lastName во время рендеринга, поэтому удалите его из состояния.

// Вот как вы можете это сделать:

import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

// Здесь fullName не является переменной состояния. Вместо этого он вычисляется во время рендеринга:

const fullName = firstName + ' ' + lastName;

// В результате обработчикам изменений не нужно делать ничего особенного для его обновления. Когда вы вызываете setFirstName или setLastName, вы запускаете повторный рендеринг, а затем следующий fullName будет рассчитываться на основе свежих данных.

//* Не отображать props в состоянии
// Типичным примером избыточного состояния является такой код:

function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
}

// Здесь color переменная состояния инициализируется свойством messageColor. Проблема в том, что если родительский компонент передаст другое значение messageColor позже (например, 'red'вместо 'blue'), переменная состояния color не будет обновлена! Состояние инициализируется только во время первого рендеринга.

// Вот почему «отзеркаливание» некоторых реквизитов в переменной состояния может привести к путанице. Вместо этого используйте props messageColor прямо в коде. Если вы хотите дать ему более короткое имя, используйте константу:

function Message({ messageColor }) {
  const color = messageColor;
}

// Таким образом, он не будет рассинхронизирован с props, переданным из родительского компонента.

// «Отражение» свойств в состояние имеет смысл только в том случае, если вы хотите игнорировать все обновления для определенного свойства. По соглашению начинайте имя реквизита с initial или default, чтобы уточнить, что его новые значения игнорируются:

function Message({ initialColor }) {
  // The `color` state variable holds the *first* value of `initialColor`.
  // Further changes to the `initialColor` prop are ignored.
  const [color, setColor] = useState(initialColor);
}

//# Избегайте дублирования состояния
// Этот компонент списка меню позволяет выбрать один перекус из нескольких:

import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}{' '}
            <button
              onClick={() => {
                setSelectedItem(item);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

// В настоящее время он сохраняет выбранный элемент как объект в selectedItem переменной состояния. Однако это не очень хорошо: содержимое — selectedItem это тот же объект, что и один из элементов внутри itemsсписка. Это означает, что информация о самом предмете дублируется в двух местах.

// Почему это проблема? Сделаем каждый элемент редактируемым:

import { useState } from 'react';

const initialItems2 = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleItemChange(id, e) {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e);
              }}
            />{' '}
            <button
              onClick={() => {
                setSelectedItem(item);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

// Обратите внимание, что если вы сначала нажмете «Выбрать» на элементе, а затем отредактируете его, ввод обновится, но метка внизу не отразит изменения. Это потому, что вы дублировали состояние и забыли обновить selectedItem.

// Хотя вы тоже можете обновить selectedItem, проще всего удалить дублирование. В этом примере вместо объекта selectedItem (который создает дублирование с объектами внутри items) вы сохраняете состояние selectedId, а затем получаете selectedItem путем поиска в массиве items элемента с этим идентификатором:

import { useState } from 'react';

const initialItems3 = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e);
              }}
            />{' '}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

// (В качестве альтернативы вы можете удерживать выбранный индекс в состоянии.)

/* Раньше состояние дублировалось так:
items = [{ id: 0, title: 'pretzels'}, ...]
selectedItem = {id: 0, title: 'pretzels'}
*/

/* Но после замены вот так:
items = [{ id: 0, title: 'pretzels'}, ...]
selectedId = 0
*/

// Дублирование исчезло, и вы сохранили только основное состояние!

// Теперь, если вы отредактируете выбранный элемент, сообщение ниже будет немедленно обновлено. Это связано с тем , что setItems вызывает повторный рендеринг и items.find(...) находит элемент с обновленным заголовком. Вам не нужно больше удерживать выбранный элемент в состоянии, потому что важен только выбранный идентификатор. Остальное можно рассчитать во время рендера.

//# Избегайте глубоко вложенных состояний

