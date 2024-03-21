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

//* 3. Дополнительный объект опций - объект с ключем condition, в котором:

//* a - первый передаваемый параметр из компонента (если мы вообще что-то передаем)
//* b - объект с ключами getState и extra
export const loadTodos2 = createAsyncThunk(
  '@@todos/load-all',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:3001/todos');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue('Не получилось загрузить все todos');
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const { loading } = getState().todos; // записываем в переменную значение ключа loading
      // отменяем запрос к серверу
      if (loading === 'loading') {
        return false;
      }
    },
  }
);

//# Пример обработки в Ui
// Допустим у нас есть такой thunk:
export const loadTodos = createAsyncThunk('@@todos/load-all', async () => {
  const res = await fetch('http://localhost:3001/todos');
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

//# Пример функции predicat в extraReducers
// Сначала функция builder отработает все addCase, потом addMatcher.
const todoSlice2 = createSlice({
  name: '@@todos',
  initialState: {
    entities: [],
    loading: 'idle', // 'loading',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(resetToDefault, () => {
        return [];
      })
      .addCase(loadTodos.pending, (state, action) => {
        state.loading = 'loading';
        state.error = null;
      })
      //* Чтобы не писать одно и тоже несколько раз:
      // .addCase(createTodo.pending, (state, action) => {
      //   state.loading = 'loading';
      //   state.error = null;
      // })
      .addCase(loadTodos.rejected, state => {
        state.loading = 'idle';
        state.error = 'Something went wrong!';
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = 'idle';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        const index = state.entities.findIndex(todo => todo.id === updatedTodo.id);
        state.entities[index] = updatedTodo;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.entities = state.entities.filter(todo => todo.id !== action.payload);
      })
      //* 1. Функция: проверяет по action условие
      //* 2. Функция: что-то делает с state
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = 'loading';
          state.error = null;
          console.log(action); // у action есть дополнительные свойства в том числе error
        }
      );
  },
});
