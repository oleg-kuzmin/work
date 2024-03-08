//# (СОЗДАНИЕ MIDDLEWARE)

//* Создание функции с middleware
// Эту сигнатуру ожидает от нас redux чтобы использовать middleware
const myLogger = store => next => action => {
  console.log('случилось событие', action.type);
  next(action);
};

//* Импорт helper для подключения middleware
import { applyMiddleware } from '@reduxjs/toolkit';
