//# configureStore() (СОЗДАНИЕ ХРАНИЛИЩА)
// Стандартный метод создания хранилища Redux. Он использует внутри низкоуровневый метод createStore() ядра Redux, но оборачивает его, чтобы обеспечить хорошие настройки хранилища по умолчанию для лучшего опыта разработки.

//# Цель и поведение
// Стандартная настройка хранилища Redux обычно требует нескольких частей конфигурации:

/*
- Объединение нескольких редюсеров(slice-reducers) в корневой root-reducer.
- Создание усилителей (enhancers) - middleware, обычно с thunk middleware или другими middleware, а также middleware, которые могут использоваться для проверки в режиме разработки.
- Добавление усилителя для расширения Redux DevTools и объединение усилителей вместе.
- Вызов createStore().
*/

// Раньше для достижения этой цели в Legacy Redux шаблоны обычно требовали нескольких десятков строк кода.

// configureStore упрощает этот процесс установки, делая всю работу за вас. Один вызов configureStore:

/*
- Вызывает combineReducers(), чтобы объединить ваши reducers в функцию root-reducer.
- Добавляет thunk middleware и вызов applyMiddleware().
- В режиме development добавляет больше middleware для проверки распространенных ошибок, например таких как мутация состояния.
- Автоматически настраивает соединение с расширением Redux DevTools.
- Вызывает createStore(), чтобы создать хранилище Redux, используя этот root-reducer и эти параметры конфигурации.
*/

// configureStore() также предлагает улучшенный API и шаблоны использования по сравнению с оригинальным createStore, принимая значения для reducer, preloadedState, middleware, enhancers и devtools, а также гораздо лучший вывод типов TS.

//# Параметры
import { configureStore } from '@reduxjs/toolkit'; // для configureStore
import { Tuple } from '@reduxjs/toolkit'; // для middleware

// configureStore принимает один объект конфигурации со следующими параметрами:
export const store = configureStore({
  //# reducer
  /*
  - Одна функция reducer, которая будет использоваться в качестве корневого reducer, или объект c несколькими slice-reducers, который будет передан в combineReducers(). 
  - Если это одна функция, она будет напрямую использоваться в качестве корневого reducer для хранилища.
  - Если это объект c несколькими slice-reducers, например { users: usersReducer, posts: postsReducer }, configureStore() автоматически создаст корневой root-reducer, передав этот объект утилите Redux combineReducers().
  */
  //* пример 1
  reducer: rootReducer,

  //* пример 2
  reducer: todoSlice.reducer,

  //* пример 3
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },

  //# middleware (опционально)
  /* 
  - Массив Redux middleware для установки. Если свойство middleware не указано вообще, то по умолчанию используется некоторый дефолтный набор middleware, возвращаемый функцией getDefaultMiddleware().
  - В качестве значения указывается callback, который получит getDefaultMiddleware в качестве единственного аргумента и должен вернуть сформированный массив middleware.
  - Если middleware не указан, configureStore вызовет getDefaultMiddleware() и будет использовать возвращаемый массив middleware по умолчанию.
  - Дополнительные сведения о том, как работает параметр middleware, а также список middleware, добавляемых по умолчанию, смотрите на странице документации по getDefaultMiddleware().
  - Пользователи Typescript должны использовать экземпляр Tuple (если не используется дефолтный результат getDefaultMiddleware, который уже является Tuple) для лучшего вывода.
  - Пользователи, использующие только Javascript, могут при желании использовать простой массив.
  */
  //* пример 1
  middleware: () => new Tuple(additionalMiddleware, logger),
});
