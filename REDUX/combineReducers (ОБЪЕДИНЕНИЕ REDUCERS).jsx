//# combineReducers (ОБЪЕДИНЕНИЕ REDUCERS)
// store/index.js
import { combineReducers } from '@reduxjs/toolkit'; // импорт метода
import counterReducer from './todoSlice'; // импорт reducer
import todosReducer from './todoSlice'; // импорт reducer

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});
