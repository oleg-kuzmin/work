//# createAction (СОЗДАНИЕ ACTION)
// В RTK action формируется автоматически при создании slice.
const todoSlice = createSlice({
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
  },
});

// Экспортируется далее
export const { addTodo } = todoSlice.actions;

// Используется далее в компонентах через библиотеку react-redux
dispatch(addTodo({ text: 'Clear cat' }));

//# Использование
// Но можно создать action отдельно. Ниже пример аналогично slice.

//* Импорт
import { createAction } from '@reduxjs/toolkit';

//* Создание
const addTodo = createAction('addTodo', text => ({
  payload: {
    id: new Date().toISOString(),
    text,
    completed: false,
  },
}));

//# Синтаксис
// createAction принимает аргументы:

//* 1. Строка - тип события (action.type)
// Данная строка попадет в возвращаемый объект action с ключем type

//* 2. Функция предпоготовки,
// Принимает один параметр - то, что мы передаем при вызове dispatch(addTodo(параметр))
// Возвращает объект action с ключем payload и значением - объектом с нужными полями.
