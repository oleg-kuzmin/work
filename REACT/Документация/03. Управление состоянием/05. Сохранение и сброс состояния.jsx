//# Сохранение и сброс состояния
// Состояние изолировано между компонентами. React отслеживает, какое состояние принадлежит тому или иному компоненту, основываясь на их месте в дереве пользовательского интерфейса. Вы можете контролировать, когда сохранять состояние, а когда сбрасывать его между повторными рендерами.

/* Вы узнаете

- Как React "видит" структуры компонентов
- Когда React решает сохранить или сбросить состояние
- Как заставить React сбросить состояние компонента
- Как ключи и типы влияют на сохранение состояния
*/

//# Дерево пользовательского интерфейса
// Браузеры используют множество древовидных структур для моделирования пользовательского интерфейса. DOM представляет элементы HTML, CSSOM делает то же самое для CSS. Есть даже Accessibility tree!

// React также использует древовидные структуры для управления и моделирования пользовательского интерфейса. React создает деревья пользовательского интерфейса из вашего JSX. Затем React DOM обновляет элементы DOM браузера в соответствии с этим деревом пользовательского интерфейса. (React Native переводит эти деревья в элементы, специфичные для мобильных платформ).

// Из компонентов React создает дерево UI, которое React DOM использует для рендеринга DOM

//# Состояние привязано к позиции в дереве
// Когда вы передаете компоненту состояние, вы можете подумать, что это состояние "живет" внутри компонента. Но на самом деле состояние хранится внутри React. React связывает каждую часть состояния, которую он хранит, с нужным компонентом по тому, где этот компонент находится в дереве пользовательского интерфейса.

// Здесь есть только один JSX-тег <Counter />, но он отображается в двух разных позициях:

//* App.js
import { useState } from 'react';

function App() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

// Это два отдельных счетчика, потому что каждый из них отображается в своей позиции в дереве. Обычно вам не нужно думать об этих позициях, чтобы использовать React, но может быть полезно понять, как это работает.

// В React каждый компонент на экране имеет полностью изолированное состояние. Например, если вы отобразите два компонента Counter рядом друг с другом, каждый из них получит свои собственные, независимые состояния score и hover.

// Попробуйте нажать на оба счетчика и заметите, что они не влияют друг на друга:

//* App.js
import { useState } from 'react';

function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

// Как вы можете видеть, при обновлении одного счетчика обновляется только состояние этого компонента:

// React будет сохранять состояние до тех пор, пока вы рендерите один и тот же компонент в одной и той же позиции. Чтобы увидеть это, увеличьте оба счетчика, затем удалите второй компонент, сняв флажок "Render the second counter", а затем добавьте его обратно, снова установив флажок:

//* App.js
import { useState } from 'react';

function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked);
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

// Обратите внимание, что в момент, когда вы прекращаете рендеринг второго счетчика, его состояние полностью исчезает. Это потому, что когда React удаляет компонент, он уничтожает его состояние.

// Когда вы отметите "Render the second counter", второй Counter и его состояние инициализируются с нуля (score = 0) и добавляются в DOM.

// React сохраняет состояние компонента до тех пор, пока он отображается в своей позиции в дереве пользовательского интерфейса. Если компонент удаляется, или другой компонент отображается в той же позиции, React удаляет его состояние.

//# Тот же компонент в той же позиции сохраняет состояние
// В этом примере есть два разных тега <Counter />:

//* App.js
import { useState } from 'react';

function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

// Когда вы устанавливаете или снимаете флажок, состояние счетчика не сбрасывается. Независимо от того, является ли isFancy true или false, у вас всегда будет <Counter /> в качестве первого дочернего элемента div, возвращаемого из корневого компонента App:

// Обновление состояния App не сбрасывает Counter, потому что Counter остается в том же положении

// Это тот же компонент в той же позиции, поэтому с точки зрения React, это тот же счетчик.

//! Внимание
// Помните, что для React важна позиция в дереве пользовательского интерфейса, а не в JSX-разметке! Этот компонент имеет два предложения return с разными JSX-тегами <Counter /> внутри и вне if:

//* App.js
import { useState } from 'react';

function App() {
  const [isFancy, setIsFancy] = useState(false);
  if (isFancy) {
    return (
      <div>
        <Counter isFancy={true} />
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked);
            }}
          />
          Use fancy styling
        </label>
      </div>
    );
  }
  return (
    <div>
      <Counter isFancy={false} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
// Можно было бы ожидать, что состояние сбросится, когда вы поставите галочку, но этого не происходит! Это происходит потому, что оба этих тега <Counter /> отображаются в одной и той же позиции. React не знает, где вы размещаете условия в вашей функции. Все, что он "видит" - это дерево, которое вы возвращаете.

// В обоих случаях компонент App возвращает <div> с <Counter /> в качестве первого дочернего элемента. Для React эти два счетчика имеют одинаковый "адрес": первый ребенок первого ребенка корня. Вот как React сопоставляет их между предыдущим и следующим рендерами, независимо от того, как вы структурируете свою логику.
//! Внимание

//# Разные компоненты в одной и той же позиции сбрасывают состояние
// В этом примере установка флажка заменит <Counter> на <p>:

//* App.js
import { useState } from 'react';

function App() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div>
      {isPaused ? <p>See you later!</p> : <Counter />}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked);
          }}
        />
        Take a break
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

// Здесь вы переключаетесь между различными типами компонентов в одной и той же позиции. Изначально первый дочерний компонент <div> содержал Counter. Но когда вы поменяли местами p, React удалил Counter из дерева пользовательского интерфейса и уничтожил его состояние.

// Когда Counter меняется на p, Counter удаляется, а p добавляется

// При обратном переключении p удаляется, а Counter добавляется

// Также, когда вы отображаете другой компонент в той же позиции, он сбрасывает состояние всего своего поддерева. Чтобы увидеть, как это работает, увеличьте счетчик, а затем установите флажок:

//* App.js
import { useState } from 'react';

function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? (
        <div>
          <Counter isFancy={true} />
        </div>
      ) : (
        <section>
          <Counter isFancy={false} />
        </section>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

// Состояние счетчика сбрасывается, когда вы нажимаете на флажок. Хотя вы отображаете Counter, первый ребенок div меняется с div на секцию. Когда дочерний div был удален из DOM, все дерево под ним (включая Counter и его состояние) также было уничтожено.

// Когда section меняется на div, section удаляется и добавляется новый div.

// При обратном переключении, div удаляется, а новый section добавляется

// Как правило, если вы хотите сохранить состояние между повторными рендерами, структура дерева должна "совпадать" от одного рендера к другому. Если структура отличается, состояние будет уничтожено, потому что React уничтожает состояние, когда удаляет компонент из дерева.

//! Внимание
// Вот почему не следует вставлять определения функций компонентов.

// Здесь функция компонента MyTextField определена внутри MyComponent:

//* App.js
import { useState } from 'react';

function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState('');

    return <input value={text} onChange={e => setText(e.target.value)} />;
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}

// Каждый раз, когда вы нажимаете на кнопку, состояние ввода исчезает! Это происходит потому, что различная функция MyTextField создается для каждого рендера MyComponent. Вы рендерите разный компонент в той же позиции, поэтому React сбрасывает все состояние ниже. Это приводит к ошибкам и проблемам с производительностью. Чтобы избежать этой проблемы, всегда объявляйте функции компонента на верхнем уровне и не вкладывайте их определения.
//! Внимание

//# Сброс состояния в одной и той же позиции
// По умолчанию React сохраняет состояние компонента, пока он остается в той же позиции. Обычно это именно то, что вам нужно, поэтому это имеет смысл как поведение по умолчанию. Но иногда вам может понадобиться сбросить состояние компонента. Рассмотрим это приложение, позволяющее двум игрокам следить за своими результатами во время каждого хода:

//* App.js
import { useState } from 'react';

function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>
        {person}'s score: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

// В настоящее время, когда вы меняете person, score сохраняется. Два счетчика появляются в одной и той же позиции, поэтому React воспринимает их как один и тот же счетчик, чей параметр персона изменился.

// Но концептуально в этом приложении они должны быть двумя отдельными счетчиками. Они могут появляться в одном и том же месте пользовательского интерфейса, но один из них будет счетчиком для Тейлора, а другой - для Сары.

/* Есть два способа сбросить состояние при переключении между ними:
1. Рендерить компоненты в разных позициях
2. Придать каждому компоненту явную идентичность с помощью key.
*/
