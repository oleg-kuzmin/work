//# configureStore (СОЗДАНИЕ ХРАНИЛИЩА)
import { configureStore } from '@reduxjs/toolkit'; // импорт метода
import todoReducer from './todoSlice'; // импорт reducer

// Создание store
export const store = configureStore({
  //# reducer (обязательно)
  // один reducer
  reducer: todoReducer,

  // несколько reducer
  reducer: {
    todos: todoReducer,
    fllters: iltersReducer,
  },

  // rootReducer, созданный с помощью combineReducers
  reducer: rootReducer,

  //# отключение devTools
  devTools: false,

  //# добавление предзагруженных данных
  preloadedState: [{ id: 1, title: 'Redux', completed: true }],
});
