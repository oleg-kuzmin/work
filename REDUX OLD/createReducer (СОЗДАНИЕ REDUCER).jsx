//# createReducer (СОЗДАНИЕ REDUCER)
//* Импорт
import { createReducer } from '@reduxjs/toolkit';

//# Синтаксис
//* 1. Дефолтное значение: значение / заранее созданная переменная / функция, возвращающая значение

//* 2. Функция builderCallback (принимает параметр builder, предоставляемый redux)
/* ВНИМАНИЕ
для мутабельной логики не нужно return (redux использует immer)
для иммутабельной логики нужно return (например для метода filter)
*/

const todos = createReducer([], builder => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    })
    .addCase(removeTodo, (state, action) => {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    })
    .addCase(toggleTodo, (state, action) => {
      const id = action.payload;
      const todo = state.find(todo => todo.id === id);
      todo.completed = !todo.completed;
    });
});

//* 2. Объект (альтернативный вариант)
const todos2 = createReducer([], {
  [addTodo]: (state, action) => {
    const newTodo = action.payload;
    state.push(newTodo);
  },
  [removeTodo]: (state, action) => {
    const id = action.payload;
    return state.filter(todo => todo.id !== id);
  },
  [toggleTodo]: (state, action) => {
    const id = action.payload;
    const todo = state.find(todo => todo.id === id);
    todo.completed = !todo.completed;
  },
});
