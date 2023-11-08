//# Глубокая передача данных с помощью контекста
// Обычно вы передаете информацию от родительского компонента к дочернему компоненту с помощью пропсов. Но передача пропсов может стать многословной и неудобной, если вам приходится передавать их через множество компонентов в середине, или если многим компонентам в вашем приложении нужна одна и та же информация. Context позволяет родительскому компоненту сделать некоторую информацию доступной для любого компонента в дереве под ним - независимо от глубины - без явной передачи ее через props.

/* Вы узнаете
- Что такое "бурение пропсов"
- Как заменить повторяющуюся передачу пропсов контекстом
- Общие случаи использования контекста
- Общие альтернативы контексту
*/

//# Проблема с передачей пропсов
// Передача пропсов - это отличный способ явной передачи данных через дерево вашего пользовательского интерфейса компонентам, которые их используют.

// Но передача пропсов может стать многословной и неудобной, если вам нужно передать какой-то пропс глубоко в дереве, или если многим компонентам нужен один и тот же пропс. Ближайший общий предок может быть далеко от компонентов, которым нужны данные, а поднятие состояния вверх так высоко может привести к ситуации, называемой "prop drilling".

// Было бы здорово, если бы существовал способ "телепортировать" данные к тем компонентам в дереве, которым они нужны, без передачи пропсов. С функцией контекста React это возможно!

//# Контекст: альтернатива передаче props
// Контекст позволяет родительскому компоненту предоставлять данные всему дереву под ним. Существует множество вариантов использования контекста. Вот один из примеров. Рассмотрим компонент Heading, который принимает level для своего размера:

//* App.js
import Heading from './Heading.js';
import Section from './Section.js';
function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={4}>Sub-sub-heading</Heading>
      <Heading level={5}>Sub-sub-sub-heading</Heading>
      <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
    </Section>
  );
}

//* Section.js
function Section({ children }) {
  return <section className="section">{children}</section>;
}

//* Heading.js
function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

// Допустим, вы хотите, чтобы несколько заголовков в одном разделе всегда имели одинаковый размер:

//* App.js
import Heading from './Heading.js';
import Section from './Section.js';

function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

// В настоящее время вы передаете параметр level каждому <Heading> отдельно:
<Section>
  <Heading level={3}>About</Heading>
  <Heading level={3}>Photos</Heading>
  <Heading level={3}>Videos</Heading>
</Section>;

// Было бы неплохо, если бы вы могли передавать параметр level компоненту <Section> и удалять его из <Heading>. Таким образом можно было бы добиться того, чтобы все заголовки в одном разделе имели одинаковый размер:

<Section level={3}>
  <Heading>About</Heading>
  <Heading>Photos</Heading>
  <Heading>Videos</Heading>
</Section>;

// Но как компонент <Heading> может узнать level ближайшего к нему <Section>? Для этого нужно, чтобы дочерний компонент мог "запрашивать" данные откуда-то сверху в дереве.

/* Вы не можете сделать это только с помощью пропсов. Здесь в игру вступает контекст. Вы сделаете это в три шага:
- Создайте контекст. (Вы можете назвать его LevelContext, поскольку он предназначен для уровня заголовка).
- Используем этот контекст из компонента, которому нужны данные. (Heading будет использовать LevelContext).
- Предоставить этот контекст от компонента, который определяет данные. (Section будет предоставлять LevelContext).
*/

// Контекст позволяет родителю - даже очень далекому - предоставлять некоторые данные всему дереву внутри него.

//# Шаг 1: Создание контекста
// Во-первых, вам нужно создать контекст. Вам нужно будет экспортировать его из файла, чтобы ваши компоненты могли его использовать:

//* App.js
import Heading from './Heading.js';
import Section from './Section.js';

function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

//* Section.js
function Section({ children }) {
  return <section className="section">{children}</section>;
}

//* Heading.js
function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

//* LevelContext.js
import { createContext } from 'react';
export const LevelContext = createContext(1);

// Единственным аргументом для createContext является значение по умолчанию. Здесь 1 означает самый большой уровень заголовка, но вы можете передать любое значение (даже объект). Использование значения по умолчанию вы увидите в следующем шаге.

//# Шаг 2: Использование контекста
// Импортируйте хук useContext из React и ваш контекст:
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

// В настоящее время компонент Heading считывает level из пропса:
function Heading({ level, children }) {
  // ...
}

// Вместо этого удалите параметр level и считайте значение из только что импортированного контекста LevelContext:
function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}

// useContext - это хук. Как и useState и useReducer, хук можно вызывать только непосредственно внутри компонента React (не внутри циклов или условий). useContext сообщает React, что компонент Heading хочет прочитать LevelContext.
