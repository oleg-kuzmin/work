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
