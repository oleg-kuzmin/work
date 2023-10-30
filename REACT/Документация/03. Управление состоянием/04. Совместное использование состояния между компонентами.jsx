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

// Нажатие на кнопку любой Panel приведет только к обновлению состояния isActive этой панели.

// Но теперь давайте предположим, что вы хотите изменить это так, чтобы только одна панель была развернута в любой момент времени. При таком дизайне, развертывание второй панели должно свернуть первую. Как это сделать?

/* Чтобы скоординировать эти две панели, вам нужно "поднять их состояние вверх" к родительскому компоненту в три шага:
1. Удалите состояние из дочерних компонентов.
2. Передать жестко закодированные данные от общего родителя.
3. Добавить состояние в общий родительский компонент и передать его вниз вместе с обработчиками событий.
*/

// Это позволит компоненту Accordion координировать обе Panel и разворачивать только одну за раз.

//# Шаг 1: Удалите состояние из дочерних компонентов
// Вы передадите контроль над isActive панели ее родительскому компоненту. Это означает, что родительский компонент будет передавать isActive в Panel в качестве пропса. Начните с удаления этой строки из компонента Panel:
const [isActive, setIsActive] = useState(false);

// И вместо этого добавьте isActive в список пропсов Panel:
function Panel({ title, children, isActive }) {
  // ...
}

// Теперь родительский компонент Panel может контролировать isActive, передавая его как prop. И наоборот, компонент Panel теперь не имеет контроля над значением isActive - теперь это зависит от родительского компонента!

//# Шаг 2: Передача жестко закодированных данных от общего родителя
/* Чтобы поднять состояние вверх, вы должны найти ближайший общий родительский компонент обоих дочерних компонентов, которые вы хотите скоординировать:

Accordion (ближайший общий родитель)
  Panel
  Panel
*/

// В данном примере это компонент Accordion. Поскольку он находится над обеими панелями и может управлять их пропсами, он станет "источником истины" для того, какая панель в данный момент активна. Заставьте компонент Accordion передавать жестко закодированное значение isActive (например, true) обеим панелям:

//* App.js
import { useState } from 'react';

function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={true}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital
        city.
      </Panel>
      <Panel title="Etymology" isActive={true}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full
        of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the
        wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic
        apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={() => setIsActive(true)}>Show</button>}
    </section>
  );
}

// Попробуйте отредактировать жестко закодированные значения isActive в компоненте Accordion и посмотрите результат на экране.

//# Шаг 3: Добавьте состояние к общему родителю
// Поднятие состояния вверх часто меняет природу того, что вы храните в качестве состояния.

// В данном случае только одна панель должна быть активна одновременно. Это означает, что общий родительский компонент Accordion должен отслеживать, какая панель является активной. Вместо значения boolean, он может использовать число в качестве индекса активной панели для переменной state:
const [activeIndex, setActiveIndex] = useState(0);

// Когда activeIndex равен 0, активна первая панель, а когда 1 - вторая.

// Нажатие на кнопку "Показать" в любой панели должно изменить активный индекс в аккордеоне. Панель Panel не может установить состояние activeIndex напрямую, потому что оно определено внутри Accordion. Компонент Accordion должен явно разрешить компоненту Panel изменить свое состояние путем передачи обработчика события в качестве пропса:
<>
  <Panel isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
    ...
  </Panel>
  <Panel isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
    ...
  </Panel>
</>;

// Теперь <button> внутри Panel будет использовать пропс onShow в качестве обработчика события щелчка:

//* App.js
import { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital
        city.
      </Panel>
      <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full
        of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the
        wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic
        apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

// Это завершает подъем состояния вверх! Перемещение состояния в общий родительский компонент позволило скоординировать две панели. Использование активного индекса вместо двух флагов "показано" обеспечило, что только одна панель активна в данный момент времени. А передача обработчика события дочернему компоненту позволила ему изменять состояние родительского компонента.

// Изначально activeIndex Accordion равен 0, поэтому первая Panel получает isActive = true.

// Когда состояние Accordion activeIndex меняется на 1, вторая Panel получает isActive = true вместо этого
