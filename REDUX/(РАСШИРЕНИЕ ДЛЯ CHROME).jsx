//# (РАСШИРЕНИЕ ДЛЯ CHROME)
// Показывает изменения состояния.

//# devTools: true
export const store = configureStore({
  reducer: todoSlice.reducer,
  devTools: true,
});

//# Использование через npm с middleware
//* npm install --save @redux-devtools/extension
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

const middleWare = [];

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

export const store1 = createStore(counter, composeWithDevTools(applyMiddleware(...middleWare)));

//# Использование без middleware
// Передать вторым или третьим параметром.
export const store2 = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store3 = createStore(
  todos,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//# Использование с middleware
import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleWare2 = [];

if (process.env.NODE_ENV === 'development') {
  middleWare2.push(logger);
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store4 = createStore(counter, composeEnhancers(applyMiddleware(...middleWare)));
