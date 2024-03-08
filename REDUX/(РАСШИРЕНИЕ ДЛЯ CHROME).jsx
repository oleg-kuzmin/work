//# (РАСШИРЕНИЕ ДЛЯ CHROME)
// Передать вторым или третьим параметром.
export const store1 = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store2 = createStore(
  todos,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//# Использование с middleware
import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleWare = [];

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(counter, composeEnhancers(applyMiddleware(...middleWare)));
