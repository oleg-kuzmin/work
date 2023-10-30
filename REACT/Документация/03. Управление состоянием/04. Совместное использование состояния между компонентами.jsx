//# Совместное использование состояния между компонентами
// Иногда требуется, чтобы состояние двух компонентов всегда изменялось вместе. Чтобы сделать это, удалите состояние из обоих компонентов, переместите его в их ближайшего общего родителя, а затем передайте его им через props. Это известно как поднятие состояния вверх, и это одна из самых распространенных вещей, которые вы будете делать при написании кода React.

/* Вы узнаете
- Как делиться состоянием между компонентами, поднимая его вверх
- Что такое контролируемые и неконтролируемые компоненты
*/

//# Поднятие состояния на примере
/* В этом примере родительский компонент Accordion отображает две отдельные Panel:
Accordion
  Panel
  Panel
*/

// Каждый компонент Panel имеет булево состояние isActive, которое определяет, видно ли его содержимое.

// Нажмите кнопку Show для обеих панелей:

//* App.js
import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={() => setIsActive(true)}>Show</button>}
    </section>
  );
}

function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital
        city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full
        of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the
        wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic
        apple.
      </Panel>
    </>
  );
}

// Обратите внимание, что нажатие на кнопку одной панели не влияет на другую - они независимы.

// Изначально состояние isActive каждой Panel равно false, поэтому они обе отображаются свернутыми


