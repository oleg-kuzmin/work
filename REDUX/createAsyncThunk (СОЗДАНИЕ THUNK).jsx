//# createAsyncThunk (СОЗДАНИЕ THUNK)
//* Импорт
import { createAsyncThunk } from '@reduxjs/toolkit';

// Мы создаем thunk, делаем запрос и возвращаем результат.
// А все что касается ошибок и обработки ошибок/запроса делаем в extraReducers. Туда добавляются новые кейсы для обработки асинхронной логики.

//# Синтаксис
//* 1. Строка для action ('@@todos/create-todo')

//* 2. Асинхронная функция thunk, которая что-то принимает и что-то делает
//* a - первый передаваемый параметр из компонента (если мы вообще что-то передаем)
//* b - объект thunkApi, предоставляемый redux с кучей всего
// Внутри есть dispatch, getState, extra-параметры.
//* тело - асинхронный запрос

export const createTodo = createAsyncThunk('@@todos/create-todo', async title => {
  const res = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false }),
  });
  const data = await res.json();
  return data;
});

const todoSlice = createSlice({
  name: '@@todos',
  initialState: {
    entities: [],
    loading: 'idle', // loading
    error: null,
  },
  reducers: {
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find(todo => todo.id === id);
      todo.completed = !todo.completed;
    },
  },
  //* Пример работы с asyncThunk в extraReducers
  extraReducers: builder => {
    builder
      .addCase(resetToDefault, () => {
        return [];
      })
      .addCase(createTodo.pending, state => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(createTodo.rejected, state => {
        state.loading = 'idle';
        state.error = 'Что-то пошло не так';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.error = null;
      });
  },
});

//# Пример обработки в Ui
// Допустим у нас есть такой thunk:
export const loadTodos = createAsyncThunk('@@todos/load-all', async () => {
  const res = await fetch('http://localhost:3002/todos');
  const data = await res.json();
  return data;
});

// И такой компонент:
export const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos()) // передаем наш thunk (thunk возвращает promise, но в состоянии fulfilled)
      .unwrap() // метод доступен из коробки (вызвав его получаем доступ к catch)
      // далее обычная обработка
      .then(() => {
        toast('All Todos were fetch');
      })
      .catch(() => {
        toast('ERROR');
      });
  }, [dispatch]);

  return <div></div>;
};
