//# configureStore (СОЗДАНИЕ STORE)
//* Импорт
import { configureStore } from '@reduxjs/toolkit';

//# Синтаксис
//* Объект с обязательным полем reducer.
// Это может быть один reducer или rootReducer созданный через combineReducers

export const store = configureStore({
  //* reducer
  // один reducer
  reducer: todoSlice.reducer,
  // или несколько reducer
  reducer: {
    todos: todoSlice.reducer,
  },
  // или combineReducers
  reducer: rootReducer,

  //* подключение devTools
  devTools: true,

  //* добавление предзагруженных данных
  preloadedState: [{ id: 1, title: 'Redux', completed: true }],

  //* добавление внешних дополнительных библиотек
  enhancers: [],
});
