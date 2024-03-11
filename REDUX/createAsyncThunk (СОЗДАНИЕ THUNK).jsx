//# createAsyncThunk (СОЗДАНИЕ THUNK)
//* Импорт
import { createAsyncThunk } from '@reduxjs/toolkit';

//# Синтаксис
//* 1. Строка для action ('@@todos/create-todo')

//* 2. Асинхронная функция thunk, которая что-то принимает и что-то делает
//* a - первый передаваемый параметр из компонента (если мы вообще что-то передаем)
//* b - объект thunkApi, предоставляемый redux с кучей всего
// Внутри есть dispatch, getState, extra-параметры.
//* тело - логика асинхронной обработки

export const createTodo = createAsyncThunk('@@todos/create-todo', async (title, { dispatch }) => {
  dispatch({ type: 'SET_LOADING' });
  const res = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false }),
  });
  const data = res.json();
  dispatch(addTodo(data));
});
