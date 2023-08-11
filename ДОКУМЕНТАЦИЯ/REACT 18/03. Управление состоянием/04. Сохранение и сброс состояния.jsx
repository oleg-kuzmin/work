//# Сохранение и сброс состояния
// Состояние изолировано между компонентами. React отслеживает, какое состояние принадлежит какому компоненту, основываясь на их месте в дереве пользовательского интерфейса. Вы можете контролировать, когда сохранять состояние и когда сбрасывать его между повторными рендерингами.

/* Вы выучите:
- Как React «видит» структуру компонентов
- Когда React выбирает сохранение или сброс состояния
- Как заставить React сбросить состояние компонента
- Как ключи и типы влияют на сохранение состояния
*/

//# Дерево пользовательского интерфейса
// Браузеры используют множество древовидных структур для моделирования пользовательского интерфейса. DOM представляет элементы HTML, CSSOM делает то же самое для CSS. Есть даже дерево доступности (AOM)!

// React также использует древовидные структуры для управления и моделирования пользовательского интерфейса, который вы создаете. React создает деревья пользовательского интерфейса из вашего JSX. Затем React DOM обновляет элементы DOM браузера, чтобы они соответствовали этому дереву пользовательского интерфейса. (React Native переводит эти деревья в элементы, специфичные для мобильных платформ.)

//# Состояние привязано к положению в дереве
// Когда вы задаете состояние компонента, вы можете подумать, что это состояние «живет» внутри компонента. Но на самом деле состояние хранится внутри React. React связывает каждую часть состояния, которую он хранит, с правильным компонентом в зависимости от того, где этот компонент находится в дереве пользовательского интерфейса.

// Здесь есть только один <Counter /> тег JSX, но он отображается в двух разных позициях:

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

// Это два отдельных счетчика, поскольку каждый из них отображается в своей позиции в дереве. Обычно вам не нужно думать об этих позициях, чтобы использовать React, но может быть полезно понять, как это работает.

// В React каждый компонент на экране находится в полностью изолированном состоянии. Например, если вы визуализируете два Counter компонента рядом, каждый из них получит свое собственное, независимое состояние score и hover состояние.

// Попробуйте щелкнуть оба счетчика и обратите внимание, что они не влияют друг на друга:

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

// Как видите, при обновлении одного счетчика обновляется только состояние этого компонента.

// React будет сохранять состояние до тех пор, пока вы визуализируете один и тот же компонент в одной и той же позиции. Чтобы увидеть это, увеличьте оба счетчика, затем удалите второй компонент, сняв флажок «Render the second counter», а затем добавьте его обратно, отметив его снова.

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

// Обратите внимание, как в тот момент, когда вы прекращаете рендеринг второго счетчика, его состояние полностью исчезает. Это потому, что когда React удаляет компонент, он уничтожает его состояние.

// Когда вы ставите галочку «Render the second counter», Counter и ее состояние инициализируются с нуля ( score = 0) и добавляются в DOM.

// React сохраняет состояние компонента до тех пор, пока он отображается в своей позиции в дереве пользовательского интерфейса. Если он удаляется или другой компонент отображается в той же позиции, React отбрасывает его состояние.

//# Тот же компонент в той же позиции сохраняет состояние
// В этом примере есть два разных <Counter /> тега:

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

// Когда вы ставите или снимаете флажок, состояние счетчика не сбрасывается. Независимо от того , isFancy is true или false, у вас всегда есть a <Counter /> как первый дочерний элемент, возвращенный div из корневого компонента App:

// Обновление состояния App не сбрасывает Counter потому что Counter остается в том же положении. Это тот же компонент в той же позиции, поэтому с точки зрения React это тот же счетчик.

//* Важно
// Помните, что для React важна позиция в дереве пользовательского интерфейса, а не в разметке JSX! Этот компонент имеет два return с разными <Counter /> тегами JSX внутри и снаружи if:

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

// Вы можете ожидать, что состояние сбросится, когда вы поставите галочку, но это не так! Это связано с тем, что оба этих <Counter /> тега отображаются в одной и той же позиции. React не знает, где вы размещаете условия в своей функции. Все, что он «видит», — это дерево, которое вы возвращаете.

// В обоих случаях компонент App возвращает <div> c <Counter /> в качестве первого дочернего элемента. Для React эти два счетчика имеют один и тот же «адрес»: первый дочерний элемент первого дочернего элемента корня. Вот как React сопоставляет их между предыдущим и следующим рендерингом, независимо от того, как вы структурируете свою логику.

//# Различные компоненты в одном и том же состоянии сброса положения
// В этом примере установка флажка заменит <Counter> на <p>:
