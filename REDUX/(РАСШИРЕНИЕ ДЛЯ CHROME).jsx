//# (РАСШИРЕНИЕ ДЛЯ CHROME)
// Передать вторым или третьим параметром.
export const store1 = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store2 = createStore(
  todos,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
