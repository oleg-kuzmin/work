//# createAction (СОЗДАНИЕ ACTION)
//* Импорт
import { createAction } from '@reduxjs/toolkit';

//# Синтаксис
//* 1. Строка - тип события (action.type)
export const addTodo = createAction('ADD_TODO');

addTodo; // функция actionCreator
addTodo.toString(); // вернет 'ADD_TODO'
addTodo(); // вернет результат вызова функции - объект action {type: 'ADD_TODO', payload: undefined}
addTodo('value'); // вернет результат вызова функции - объект action {type: 'ADD_TODO', payload: 'value'}

//* 2. Функция подготовки объекта action
// В качестве параметра принимает payload
export const addTodo2 = createAction('ADD_TODO', title => ({
  payload: {
    title,
    id,
  },
}));
