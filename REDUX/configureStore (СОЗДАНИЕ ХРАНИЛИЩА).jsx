//# configureStore (СОЗДАНИЕ ХРАНИЛИЩА)
import { configureStore } from '@reduxjs/toolkit'; // импорт метода
import todoReducer from './todoSlice'; // импорт reducer

// Создание и экспорт store
export const store = configureStore({
  //# reducer (обязательно)
  // один reducer
  reducer: todoReducer,

  // несколько reducer
  reducer: {
    todos: todoReducer,
    fllters: filtersReducer,
  },

  // rootReducer, созданный с помощью combineReducers
  reducer: rootReducer,

  //# отключение devTools
  devTools: false,

  //# middleware
  // middleware представляет собой массив дополнительных функций
  // UI => Action => Middleware => Reducer => Store
  // Значением свойства является функция callback, которая принимает параметр getDefaultMiddleWare и возвращает вызов getDefaultMiddleWare() c массивом стандартных по умолчанию middleware + можно добавить нашу дополнительную middleware(например logger)
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(logger),

  //# добавление предзагруженных данных
  preloadedState: [{ id: 1, title: 'Redux', completed: true }],
});
