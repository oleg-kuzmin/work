//# configureStore (СОЗДАНИЕ STORE)
//* Импорт
import { configureStore } from '@reduxjs/toolkit';

//# Синтаксис
//* Объект с обязательным полем reducer.
// Это может быть один reducer или rootReducer созданный через combineReducers

export const store = configureStore({
  //* один reducer
  reducer: todoSlice.reducer,

  //* несколько reducer
  reducer: {
    todos: todoSlice.reducer,
  },

  //* combineReducers
  reducer: rootReducer,

  //* подключение devTools
  devTools: true,
});
