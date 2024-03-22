//# createSlice (СОЗДАНИЕ SLICE)
import { createSlice } from '@reduxjs/toolkit'; // импорт метода

// Создание slice
const todoSlice = createSlice({
  //# name (обязательно)
  // некий дополнительный домен, часть имени actions (Пример: '@@todos' в '@@todos/REMOVE_TODO')
  name: 'todos',

  //# initialState (обязательно)
  // дефолтное значение: значение / заранее созданная переменная / функция, возвращающая значение
  initialState: {
    todos: [],
  },

  //# reducers (обязательно)
  // объект с функциями reducer
  // для мутабельной логики не нужен return
  // для иммутабельной логики нужен return (например для метода filter)
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {},
    toggleTodoCompleted(state, action) {},
  },

  //# extraReducers
  // Нужны для обработки асинхронных функций (по сути action), созданных через createAsyncThunk
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

// экспорт actions
export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

// экспорт reducer
export default todoSlice.reducer;

// экспорт initialState (опционально)
export const initialState = todoSlice.getInitialState;
