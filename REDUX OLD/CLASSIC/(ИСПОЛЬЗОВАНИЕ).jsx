//# (ИСПОЛЬЗОВАНИЕ)
//* 1. Создание файла под хранилище (отдельный файл store.js)

//* 2. Импорт функции createStore для создания хранилища store
import { createStore } from '@reduxjs/toolkit';

//* 3. Создание функции reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.payload.text,
          isCompleted: false,
        },
      ];

    default:
      return state;
  }
};

//* 4. Создание хранилища store (экспорт наружу)
export const store = createStore(todoReducer);

//* 5. Создание объектов actions или функций action creators (экспорт наружу)
const actionAddTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text,
    },
  };
};

//* 6. Импорт провайдера на уровне app и импорт store для передачи провайдеру
import { Provider } from 'react-redux';
import { store } from './store'; // export const store = createStore(counter) из файла store.js

//* 7. Импорт хуков для работы с redux
import { useSelector, useDispatch } from 'react-redux';

//* 8. Использование useSelector для получения данных
const arr = useSelector(state => state);
console.log(arr);

//* 9. Использование useDispatch для отправки объекта action
const dispatch = useDispatch();
dispatch(actionAddTodo(evt.target.elements.text.value));
