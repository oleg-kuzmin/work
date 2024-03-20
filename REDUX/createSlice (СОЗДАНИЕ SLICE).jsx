//# createSlice (СОЗДАНИЕ SLICE)
//* Импорт
import { createSlice } from '@reduxjs/toolkit';

//# Синтаксис
//* Объект с настройками.
/*
name (обязательное поле) - некий дополнительный домен, часть имени actions (Пример: '@@todos' в '@@todos/REMOVE_TODO')
initialState (обязательное поле) - дефолтное значение: значение / заранее созданная переменная / функция, возвращающая значение
reducers (обязательное поле) - объект (ключи - названия функции, значения - функции)
extraReducers (опционально) - дополнительные reducer, тоже самое, что и в createReducer.
*/

const todoSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find(todo => todo.id === id);
      todo.completed = !todo.completed;
    },

    // Альтернативный вариант для предпоготовки данных (prepare)
    alternateAddTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: title => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
  },

  // Опционально
  extraReducers: builder => {
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
  },
});

//# Возвращает
/* Объект с ключами 
reducer - автоматические сгенерируемый reducer  
actions - автоматические сгенерируемые actions
getInitialState - дефолтное значение
*/

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
// export const store = createStore(todoSlice.reducer);
export const todoReducer = todoSlice.reducer;
