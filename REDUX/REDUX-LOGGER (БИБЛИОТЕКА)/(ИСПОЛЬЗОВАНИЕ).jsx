//# (ИСПОЛЬЗОВАНИЕ)
//* Импорт
import logger from 'redux-logger';

// Создание store
import { applyMiddleware } from '@reduxjs/toolkit';
const store = createStore(counter, applyMiddleware(logger));
