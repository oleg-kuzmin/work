//# useContext
// useContext - это хук. Как и useState и useReducer, хук можно вызывать только непосредственно внутри компонента React (не внутри циклов или условий). useContext сообщает React, что компонент Heading хочет прочитать LevelContext.

//* 1. Создание контекста
// LevelContext.js
import { createContext } from 'react';
export const LevelContext = createContext(1);

//* 2. Использование контекста
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';
function Heading() {
  const level = useContext(LevelContext);
}
