//# createAsyncThunk (СОЗДАНИЕ THUNK)
// Thunk нужен для асинхронной работы. По сути это асинхронный action. Мы создаем thunk, делаем запрос и возвращаем результат. Все что касается ошибок и обработки ошибок/запроса делаем в extraReducers через createSlice. Туда добавляются новые кейсы для обработки асинхронной логики.

//# Создание
import { createAsyncThunk } from '@reduxjs/toolkit';

// Делаем запрос и возвращаем результат.
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, { rejectWithValue }) {
    // Используется try-catch для того, чтобы пробросить ошибку далее
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/ttodos?_limit=10');
      if (!response.ok) {
        throw new Error('Ошибка загрузки todos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//# Синтаксис
/*
* 1. Строка 'todos/fetchTodos' - название для action.type
* 2. Асинхронная функция, которая принимает параметры:
- то, что мы положим при вызове dispatch(addTodo(параметр)) (если мы вообще что-то передаем)
- объект thunkApi, предоставляемый redux (внутри есть dispatch, getState, extra-параметры). Например rejectWithValue() - функция, которая принимает в качестве аргумента значение и добавляет его в action.payload при кейсе *nameThunk*.rejected
*/

//# Использование при создании slice
const todoSlice = createSlice({
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

//# Использование в компоненте
useEffect(() => {
  dispatch(fetchTodos());
}, [dispatch]);
