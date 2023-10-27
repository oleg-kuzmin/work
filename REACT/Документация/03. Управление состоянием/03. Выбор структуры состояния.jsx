//# Выбор структуры состояния
// Правильное структурирование состояния может сделать разницу между компонентом, который приятно модифицировать и отлаживать, и компонентом, который является постоянным источником ошибок. Вот несколько советов, которые следует учитывать при структурировании состояния.

/* Вы узнаете
- Когда использовать одну или несколько переменных состояния
- Чего следует избегать при организации состояния
- Как исправить распространенные проблемы со структурой состояния
*/

//# Принципы структурирования состояния
/* Когда вы пишете компонент, который хранит некоторое состояние, вам придется сделать выбор, сколько переменных состояния использовать и какова должна быть форма их данных. Хотя можно писать корректные программы даже с неоптимальной структурой состояния, есть несколько принципов, которые помогут вам сделать лучший выбор:
1. Группируйте связанные состояния. Если вы всегда обновляете две или более переменных состояния одновременно, подумайте о том, чтобы объединить их в одну переменную состояния.
2. Избегайте противоречий в состоянии. Когда состояние структурировано таким образом, что несколько частей состояния могут противоречить и "не соглашаться" друг с другом, вы оставляете место для ошибок. Постарайтесь избежать этого.
3. Если вы можете вычислить какую-то информацию из пропсов компонента или его существующих переменных состояния во время рендеринга, не стоит помещать эту информацию в состояние компонента.
4. Когда одни и те же данные дублируются в нескольких переменных состояния или во вложенных объектах, их трудно синхронизировать. Сократите дублирование, когда это возможно.
5. Избегайте глубоко вложенного состояния. Глубоко иерархическое состояние не очень удобно для обновления. Когда это возможно, предпочитайте структурировать состояние плоским образом.
*/

// Цель этих принципов - сделать состояние легко обновляемым без ошибок. Удаление избыточных и дублирующих данных из состояния помогает обеспечить синхронизацию всех его частей. Это похоже на то, как инженер базы данных может захотеть "нормализовать" структуру базы данных, чтобы уменьшить вероятность ошибок. Перефразируя Альберта Эйнштейна, "Сделайте ваше состояние настолько простым, насколько оно может быть - но не проще.".

// Теперь давайте посмотрим, как эти принципы применяются на практике.

//# Состояние, связанное с группой
// Иногда вы можете сомневаться, использовать ли одну или несколько переменных состояния.

// Стоит ли вам это делать?
const [x, setX] = useState(0);
const [y, setY] = useState(0);

// Или это?
const [position, setPosition] = useState({ x: 0, y: 0 });

// Технически, вы можете использовать любой из этих подходов. Но если некоторые две переменные состояния всегда изменяются вместе, хорошей идеей будет объединить их в одну переменную состояния. Тогда вы не забудете всегда синхронизировать их, как в этом примере, где перемещение курсора обновляет обе координаты красной точки:

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

// Еще один случай, когда вы группируете данные в объект или массив, - это когда вы не знаете, сколько частей состояния вам понадобится. Например, это полезно, когда у вас есть форма, в которой пользователь может добавлять пользовательские поля.

// Если ваша переменная состояния является объектом, помните, что вы не можете обновить только одно поле в нем без явного копирования других полей. Например, вы не можете сделать setPosition({ x: 100 }) в приведенном выше примере, потому что у него не будет свойства y вообще! Вместо этого, если бы вы хотели установить только x, вы бы либо сделали setPosition({ ...position, x: 100 }), либо разделили их на две переменные состояния и сделали setX(100).

//# Избегайте противоречий в состоянии
// Вот форма обратной связи с отелем с переменными состояния isSending и isSent:

//* App.js
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

// Хотя этот код работает, он оставляет дверь открытой для "невозможных" состояний. Например, если вы забудете вызвать setIsSent и setIsSending вместе, вы можете оказаться в ситуации, когда одновременно isSending и isSent будут true. Чем сложнее ваш компонент, тем труднее понять, что произошло.

// Поскольку isSending и isSent никогда не должны быть true одновременно, лучше заменить их одной переменной состояния status, которая может принимать одно из трех допустимых состояний: 'typing' (начальное), 'sending' и 'sent':

//* App.js
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

// Но они не являются переменными состояния, поэтому вам не нужно беспокоиться о том, что они будут рассинхронизированы друг с другом.

//# Избегайте избыточного состояния
// Если вы можете вычислить некоторую информацию из пропсов компонента или его существующих переменных состояния во время рендеринга, вам не следует помещать эту информацию в состояние компонента.

// Например, возьмем эту форму. Она работает, но можете ли вы найти в ней избыточное состояние?

//* App.js
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
      <h2>Lets check you in</h2>
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

// Эта форма имеет три переменные состояния: firstName, lastName и fullName. Однако fullName является избыточной. Вы всегда можете вычислить fullName из firstName и lastName во время рендеринга, поэтому удалите ее из state..

// Вот как это можно сделать:

//* App.js
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
      <h2>Lets check you in</h2>
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

// Здесь fullName не является не переменной состояния. Вместо этого она вычисляется во время рендеринга:
const fullName = firstName + ' ' + lastName;

// В результате обработчикам изменений не нужно делать ничего особенного, чтобы обновить его. Когда вы вызываете setFirstName или setLastName, вы вызываете повторный рендеринг, а затем следующее fullName будет вычислено на основе свежих данных.

//* Не зеркалируйте пропсы в состоянии
// Частым примером избыточного состояния является код, подобный этому:
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
}

// Здесь переменная состояния color инициализируется параметром messageColor. Проблема в том, что если родительский компонент позже передаст другое значение messageColor (например, 'red' вместо 'blue'), переменная состояния color не будет обновлена! Состояние инициализируется только во время первого рендеринга.

// Вот почему "зеркальное отражение" какого-либо свойства в переменной состояния может привести к путанице. Вместо этого используйте свойство messageColor непосредственно в коде. Если вы хотите дать ему более короткое имя, используйте константу:

function Message({ messageColor }) {
  const color = messageColor;
}

// Таким образом, он не будет рассинхронизирован с пропсом, переданным из родительского компонента.

// "Зеркалирование" пропсов в состояние имеет смысл только тогда, когда вы хотите игнорировать все обновления для конкретного пропса. По традиции, начните имя пропса с initial или default, чтобы уточнить, что его новые значения игнорируются:

function Message({ initialColor }) {
  // The `color` state variable holds the *first* value of `initialColor`.
  // Further changes to the `initialColor` prop are ignored.
  const [color, setColor] = useState(initialColor);
}
//* Не зеркалируйте пропсы в состоянии

//# Избегайте дублирования в состоянии
// Этот компонент списка меню позволяет выбрать одну туристическую закуску из нескольких:

//* App.js
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

// В настоящее время он хранит выбранный элемент как объект в переменной состояния selectedItem. Однако это не очень хорошо: содержимое selectedItem является тем же объектом, что и один из элементов списка items. Это означает, что информация о самом элементе дублируется в двух местах.

// Почему это является проблемой? Давайте сделаем каждый элемент редактируемым:

//* App.js
import { useState } from 'react';

initialItems = [
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

// Обратите внимание, что если вы сначала нажмете "Выбрать" на элементе, а затем отредактируете его, ввод обновляется, но метка внизу не отражает правки.Это потому, что у вас дублируется состояние, и вы забыли обновить selectedItem.

// Хотя вы могли бы обновить selectedItem тоже, проще устранить дублирование. В этом примере вместо объекта selectedItem (который создает дублирование с объектами внутри items), вы храните selectedId в состоянии, а потом получаете selectedItem путем поиска элемента с этим ID в массиве items:

//* App.js
import { useState } from 'react';

initialItems = [
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

// (В качестве альтернативы можно удерживать выбранный индекс в состоянии).

/* Раньше состояние дублировалось следующим образом:
- items = [{ id: 0, title: 'pretzels'}, ...].
- selectedItem = { id: 0, title: 'pretzels'}.
*/

/* Но после изменения это выглядит следующим образом:
- items = [{ id: 0, title: 'pretzels'}, ...]
- selectedId = 0.
*/

// Дублирование исчезло, и вы сохранили только основное состояние!

// Теперь, если вы отредактируете выбранный элемент, сообщение ниже будет немедленно обновлено. Это происходит потому, что setItems вызывает повторный рендеринг, и items.find(...) найдет элемент с обновленным заголовком. Вам не нужно было хранить выбранный элемент в состоянии, потому что только выбранный ID является существенным. Остальное можно вычислить во время рендеринга.

//# Избегайте глубоко вложенного состояния
// Представьте себе план путешествия, состоящий из планет, континентов и стран. У вас может возникнуть соблазн структурировать его состояние с помощью вложенных объектов и массивов, как в этом примере:

//* places.js
export const initialTravelPlan = {
  id: 0,
  title: '(Root)',
  childPlaces: [
    {
      id: 1,
      title: 'Earth',
      childPlaces: [
        {
          id: 2,
          title: 'Africa',
          childPlaces: [
            {
              id: 3,
              title: 'Botswana',
              childPlaces: [],
            },
          ],
        },
      ],
    },
  ],
};

//* App.js
import { useState } from 'react';
import { initialTravelPlan } from './places.js';

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map(place => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map(place => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}

// Теперь предположим, что вы хотите добавить кнопку для удаления места, которое вы уже посетили. Как бы вы это сделали? Обновление состояния вложенных объектов включает создание копий объектов по всей цепочке вверх от той части, которая изменилась. Удаление глубоко вложенного места потребует копирования всей цепочки родительских мест. Такой код может быть очень многословным.

// Если состояние слишком вложенное, чтобы его можно было легко обновить, подумайте о том, чтобы сделать его "плоским". Вот один из способов реструктуризации этих данных. Вместо древовидной структуры, где каждое место имеет массив его дочерних мест, вы можете сделать так, чтобы каждое место содержало массив идентификаторов дочерних мест. Затем хранить отображение от каждого идентификатора места к соответствующему месту.

// Такая реструктуризация данных может напомнить вам таблицу базы данных:

//* places.js
initialTravelPlan = {
  0: {
    id: 0,
    title: '(Root)',
    childIds: [1, 43, 47],
  },
  1: {
    id: 1,
    title: 'Earth',
    childIds: [2, 10, 19, 27, 35],
  },
  2: {
    id: 2,
    title: 'Africa',
    childIds: [3, 4, 5, 6, 7, 8, 9],
  },
  3: {
    id: 3,
    title: 'Botswana',
    childIds: [],
  },
};

//* App.js
import { useState } from 'react';
import { initialTravelPlan } from './places.js';

function PlaceTree({ id, placesById }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree key={childId} id={childId} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  );
}

// Теперь, когда состояние "плоское" (также известное как "нормализованное"), обновлять вложенные элементы стало проще..

/* Чтобы удалить место, теперь вам нужно обновить только два уровня состояния:
- Обновленная версия родительского места должна исключить удаленный ID из своего массива childIds.
- Обновленная версия корневого объекта "table" должна включать обновленную версию родительского места.
*/

// Вот пример того, как это можно сделать:

//* App.js
import { useState } from 'react';
import { initialTravelPlan } from './places.js';

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId),
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree key={id} id={id} parentId={0} placesById={plan} onComplete={handleComplete} />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree key={childId} id={childId} parentId={id} placesById={placesById} onComplete={onComplete} />
          ))}
        </ol>
      )}
    </li>
  );
}
