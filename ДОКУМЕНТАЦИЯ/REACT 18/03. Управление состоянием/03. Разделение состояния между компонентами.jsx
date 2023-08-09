//# Разделение состояния между компонентами
// Иногда вам нужно, чтобы состояние двух компонентов всегда менялось вместе. Для этого удалите состояние из них обоих, переместите его к их ближайшему общему родителю, а затем передайте его им через свойства. Это известно как повышение состояния, и это одна из самых распространенных вещей, которые вы будете делать при написании кода React.

/* Вы выучите:
- Как разделить состояние между компонентами, подняв его вверх
- Что такое контролируемые и неконтролируемые компоненты
*/

//# Поднятие состояния на примере
/* В этом примере родительский компонент Accordion отображает два отдельных Panel:
Accordion
- Panel
- Panel
*/

// Каждый компонент Panel имеет логическое состояние isActive, которое определяет, видимо ли его содержимое.

// Нажмите кнопку Показать для обеих панелей:

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

// Обратите внимание, что нажатие кнопки на одной панели не влияет на другую панель — они независимы.

// Но теперь предположим, что вы хотите изменить его так, чтобы в любой момент времени раскрывалась только одна панель. При таком дизайне расширение второй панели должно привести к сворачиванию первой. Как бы Вы это сделали?

// Чтобы согласовать эти две панели, вам нужно «поднять их состояние» до родительского компонента в три шага:

// 1. Удалить состояние из дочерних компонентов.

// 2. Передайте фиксированные данные от общего родителя.

// 3. Добавьте состояние к общему родителю и передайте его вместе с обработчиками событий.

// Это позволит компоненту Accordion координировать оба Panel и расширять только один за раз.

//# Шаг 1: Удалить состояние из дочерних компонентов
// Вы передадите контроль над родительским компонентом Panel. Это означает, что isActive будет передан в Panel в качестве props. Начните с удаления этой строки из компонента Panel:

const [isActive, setIsActive] = useState(false);

// И вместо этого добавьте isActive в Panel в список props:

function Panel({ title, children, isActive }) {}

// Теперь родительский компонент может управлять isActive в Panel, передавая его как свойство. И наоборот, компонент Panel теперь не имеет контроля над значением isActive, теперь это зависит от родительского компонента!

//# Шаг 2. Передайте фиксированные данные от общего родителя
// Чтобы поднять состояние, вы должны найти ближайший общий родительский компонент обоих дочерних компонентов, которые вы хотите скоординировать.

// В данном примере это компонент Accordion. Поскольку он находится над обеими панелями и может управлять их props, он станет «источником правды» для той панели, которая в данный момент активна. Заставьте компонент Accordion передавать фиксированное значение isActive (например, true) на обе панели:

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

// Попробуйте отредактировать жестко заданные значения isActive в компоненте Accordion и посмотрите результат на экране.

//# Шаг 3: Добавьте состояние к общему родителю
// Поднятие состояния часто меняет характер того, что вы храните как состояние.

// При этом одновременно должна быть активна только одна панель. Это означает, что общий родительский компонент Accordion должен отслеживать, какая панель является активной. Вместо значения boolean он может использовать число в качестве индекса активности Panel для переменной состояния:

const [activeIndex, setActiveIndex] = useState(0);

// При activeIndex === 0 активна первая панель, при значении — 1 вторая.

// Нажатие кнопки «Показать» в любом из Panel должно изменить активный индекс в Accordion. A Panel не может установить activeIndex состояние напрямую, потому что оно определено внутри файла Accordion. Компонент Accordion должен явно разрешить компоненту Panel изменять свое состояние, передав обработчик событий в качестве реквизита:

<>
  <Panel isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
    ...
  </Panel>
  <Panel isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
    ...
  </Panel>
</>;

// Теперь внутри <button> будет использоваться props onShow в качестве обработчика события клика:

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

// Это завершает подъем состояния вверх! Перемещение состояния в общий родительский компонент позволило согласовать две панели. Использование активного индекса вместо двух флажков «показано» гарантировало, что в данный момент активна только одна панель. А передача обработчика событий дочернему элементу позволяла дочернему элементу изменять состояние родителя.

//* Контролируемые и неконтролируемые компоненты

