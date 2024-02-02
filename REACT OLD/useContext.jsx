//# useContext
// useContext - это хук. Как и useState и useReducer, хук можно вызывать только непосредственно внутри компонента React (не внутри циклов или условий). useContext сообщает React, что компонент Heading хочет прочитать LevelContext.

// App.js
function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
      </Section>
    </Section>
  );
}

//* 1. Создание контекста
// LevelContext.js
import { createContext } from 'react';
export const LevelContext = createContext(1);

//* 2. Использование контекста
// Heading.js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';
function Heading({ children }) {
  const level = useContext(LevelContext);
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

//* 3. Предоставление контекста
// Section.js
import { LevelContext } from './LevelContext.js';
function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
