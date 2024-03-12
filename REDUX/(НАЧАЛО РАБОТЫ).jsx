//# (НАЧАЛО РАБОТЫ)

//# 1. Создать и настроить хранилище через метод configureStore
//* store.js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: '******',
  devTools: true,
});

//# 2.
