# Immutability Middleware

Порт middleware от [`redux-immutable-state-invariant`](https://github.com/leoasis/redux-immutable-state-invariant), настроенный для использования с Redux Toolkit. Любые обнаруженные мутации будут считаться ошибками.

Этот middleware добавляется в хранилище по умолчанию с помощью [`configureStore`](./configureStore.md) и [`getDefaultMiddleware`](./getDefaultMiddleware.md).

Вы можете настроить поведение этого middleware, передав любой из поддерживаемых параметров в качестве значения immutableCheck для getDefaultMiddleware.

## Параметры

```ts
type IsImmutableFunc = (value: any) => boolean;

interface ImmutableStateInvariantMiddlewareOptions {
  /**
    Функция callback для проверки того, считается ли значение проверки иммутабельным.
    Эта функция применяется рекурсивно к каждому значению, содержащемуся в состоянии.
    Реализация по умолчанию вернет true для примитивных типов.
    (например для numbers, strings, booleans, null и undefined).
  */
  isImmutable?: IsImmutableFunc;
  /*
    Массив из строк путей, разделенных точками, или регулярные выражения,
    которые следует игнорировать при проверке.
    По умолчанию undefined.
  */
  ignoredPaths?: (string | RegExp)[];
  /*
    Выводит предупреждение, если проверка занимает больше времени, чем N ms.
    По умолчанию: 32 ms.
  */
  warnAfter?: number;
}
```

## Экспорт

### `createImmutableStateInvariantMiddleware`

Cоздает экземпляр middleware для проверки неизменяемости с заданными параметрами.

Скорее всего, вам не понадобится вызывать это самостоятельно, поскольку getDefaultMiddleware уже это делает.

Пример:

```ts
// file: exampleSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    user: 'will track changes',
    ignoredPath: 'single level',
    ignoredNested: {
      one: 'one',
      two: 'two',
    },
  },
  reducers: {},
});

export default exampleSlice.reducer;

// file: store.ts
import {
  configureStore,
  createImmutableStateInvariantMiddleware,
  Tuple,
} from '@reduxjs/toolkit';

import exampleSliceReducer from './exampleSlice';

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
});

const store = configureStore({
  reducer: exampleSliceReducer,
  // Обратите внимание, что это заменит все middleware по умолчанию.
  middleware: () => new Tuple(immutableInvariantMiddleware),
});
```

Делаем то же самое, не удаляя все остальные middleware, используя [`getDetfaultMiddleware`](./getDefaultMiddleware.md):

```ts
import { configureStore } from '@reduxjs/toolkit';

import exampleSliceReducer from './exampleSlice';

const store = configureStore({
  reducer: exampleSliceReducer,
  // Это заменит исходные middleware по умолчанию на настроенные версии.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
      },
    }),
});
```

### `isImmutableDefault`

Реализация по умолчанию параметра проверки «является ли это значение иммутабельным?». На данный момент реализовано так:

```ts
return (
  typeof value !== 'object' || value === null || typeof value === 'undefined'
);
```

Это вернет true для примитивных типов (таких как number, string, boolean, null и undefined).
