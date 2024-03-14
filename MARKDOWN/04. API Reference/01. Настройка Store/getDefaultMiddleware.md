# `getDefaultMiddleware`

Возвращает массив, содержащий список middleware по умолчанию.

## Предполагаемое использование

По умолчанию `configureStore` автоматически добавляет некоторые middleware в настройку хранилища Redux.

```ts
const store = configureStore({
  reducer: rootReducer,
});

// В store добавлены middleware, поскольку список middleware не был настроен
```

Если вы хотите настроить список middleware, вы можете предоставить массив middleware для `configureStore`.

```ts
configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(thunk, logger),
});

// В store добавлены middleware "thunk" и "logger"
```

Однако, когда вы настраиваете опцию `middleware`, вы несете ответственность за определение всего middleware, которое вы хотите добавить в store. `configureStore` не будет добавлять никакие дополнительные middleware, кроме тех, которые вы указали.

`getDefaultMiddleware` полезен, если вы хотите добавить какие-то собственные middleware, но при этом также хотите добавить стандартные middleware по умолчанию:

```ts
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducer';

configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// В store добавлены все middleware по умолчанию, плюс middleware "logger".
```

Предпочтительно использовать цепочки методов `concat()` и `prepend()` возвращаемого `Tuple (кортежа)` вместо спред-оператора расширения массива, поскольку последний при некоторых обстоятельствах может потерять ценную информацию о типах TS.

## Middleware по умолчанию

### Development

Одна из целей Redux Toolkit — предоставить продуманные значения по умолчанию и предотвратить распространенные ошибки. В рамках этого `getDefaultMiddleware` включает в себя некоторые middleware, которые добавляются в **development-сборки вашего приложения** для обеспечения проверки во время выполнения трех распространенных проблем:

- [Immutability check middleware](<./Immutability Middleware.md>): глубоко сравнивает значения состояний для мутаций. Он может обнаруживать мутации в редюсерах во время отправки, а также мутации, возникающие между отправками (например, в компоненте или селекторе). При обнаружении мутации выдается ошибка и указывается путь к ключу, в котором мутированное значение было обнаружено в дереве состояний. (В основе лежит библиотека `redux-immutable-state-invariant`).

- [Serializability check middleware](<./Serializability Middleware.md>): кастомное middleware, созданное специально для использования в Redux Toolkit. По концепции похож на immutable-state-invariant, но тщательно проверяет ваше дерево состояний и ваши действия на предмет несериализуемых значений, таких как функции, Promises, символы и другие значения данных, не относящихся к простому JS. При обнаружении несериализуемого значения на консоли будет выведена ошибка с указанием пути к ключу, в котором было обнаружено несериализуемое значение.

- [Action creator check middleware](<./Action Creator Middleware.md>): еще одно кастомное middleware, созданное специально для использования в Redux Toolkit. Определяет, когда action creator был по ошибке отправлен в dispatch без вызова, и выводит ошибку в консоль с указанием типа действия.

В дополнение к этим middleware для разработки также добавляется redux-thunk по умолчанию, поскольку thunks являются основным рекомендуемым middleware с побочными эффектами для Redux.

В настоящее время возвращаемый массив middleware составляет:

```ts
const middleware = [
  immutableStateInvariant,
  serializableStateInvariant,
  actionCreatorInvariant,
  thunk,
];
```

### Production

В настоящее время возвращаемый массив middleware составляет:

```ts
const middleware = [thunk];
```

## Настройка включенных middleware

`getDefaultMiddleware` принимает объект параметров, который позволяет настраивать каждое middleware двумя способами:

- Каждое middleware можно исключить из массива, передав `false` в соответствующее поле.
- Для каждого middleware можно настроить параметры, передав объект параметров в соответствующее поле.

В этом примере показаны передача определенного значения в поле "extraArgument" для middleware `thunk` и исключение middleware `Serializability Middleware` по ключу `serializableCheck`

```ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { myCustomApiService } from './api';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: myCustomApiService,
      },
      serializableCheck: false,
    }),
});
```

## API Reference

```ts
interface ThunkOptions<E = any> {
  extraArgument: E;
}

interface ImmutableStateInvariantMiddlewareOptions {
  // Подбробнее см. на странице "Immutability Middleware"
}

interface SerializableStateInvariantMiddlewareOptions {
  // Подбробнее см. на странице "Serializability Middleware"
}

interface ActionCreatorInvariantMiddlewareOptions {
  // Подбробнее см. на странице "Action Creator Middleware"
}

interface GetDefaultMiddlewareOptions {
  thunk?: boolean | ThunkOptions;
  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
  actionCreatorCheck?: boolean | ActionCreatorInvariantMiddlewareOptions;
}

function getDefaultMiddleware<S = any>(
  options: GetDefaultMiddlewareOptions = {}
): Middleware<{}, S>[];
```
