# Serializability Middleware

Кастомное middleware, которое определяет, были ли какие-либо несериализуемые значения включены в состояние или в actions, смоделированное на основе `redux-immutable-state-invariant`. Любые обнаруженные несериализуемые значения будут выводится в консоль.

Этот middleware добавляется в хранилище по умолчанию с помощью [`configureStore`](./configureStore.md) и [`getDefaultMiddleware`](./getDefaultMiddleware.md).

Вы можете настроить поведение этого промежуточного программного обеспечения, передав любой из поддерживаемых параметров в качестве значения `serializableCheck` для `getDefaultMiddleware`.

## Опции

```ts
interface SerializableStateInvariantMiddlewareOptions {
  /**
   * Функция проверки того, считается ли значение сериализуемым.
   * Эта функция применяется рекурсивно к каждому значению, содержащемуся в состоянии.
   * По умолчанию используется isPlain().
   */
  isSerializable?: (value: any) => boolean;

  /**
   * Функция, которая будет использоваться для получения записей из каждого значения.
   * Если не указано будет использовано Object.entries.
   * По умолчанию undefined.
   */
  getEntries?: (value: any) => [string, any][];

  /**
   * Массив actions, которые следует игнорировать при проверке сериализуемости.
   * По умолчанию - [].
   */
  ignoredActions?: string[];

  /**
   * Массив строк пути, разделенных точками, или регулярных выражений,
   * которые следует игнорировать.
   * По умолчанию ['meta.arg', 'meta.baseQueryMeta']
   */
  ignoredActionPaths?: (string | RegExp)[];

  /**
   * Массив строк пути, разделенных точками, или регулярных выражений,
   * которые следует игнорировать при проверке сериализуемости.
   * По умолчанию - [].
   */
  ignoredPaths?: (string | RegExp)[];

  /**
   * Порог предупреждения о времени выполнения. Если middleware занимает
   * больше времени чем `warnAfter` ms, в консоли отобразится предупреждение.
   * По умолчанию - 32 ms.
   */
  warnAfter?: number;

  /**
   * Отказаться от проверки state. Если установлено значение true, другие параметры,
   * связанные с state, будут игнорироваться.
   */
  ignoreState?: boolean;

  /**
   * Отказаться от проверки actions. Если установлено значение true, другие параметры,
   * связанные с actions, будут игнорироваться.
   */
  ignoreActions?: boolean;
}
```

## Экспорт

### `createSerializableStateInvariantMiddleware`

Cоздает экземпляр middleware проверки сериализуемости с заданными параметрами.

Скорее всего, вам не понадобится вызывать это самостоятельно, поскольку getDefaultMiddleware уже это делает.

Пример:

```ts
import { Iterable } from 'immutable';
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
  Tuple,
} from '@reduxjs/toolkit';
import reducer from './reducer';

// Дополнить middleware, чтобы считать итерации Immutable.JS сериализуемыми.
const isSerializable = (value: any) =>
  Iterable.isIterable(value) || isPlain(value);

const getEntries = (value: any) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

const store = configureStore({
  reducer,
  middleware: () => new Tuple(serializableMiddleware),
});
```

### isPlain

Проверяет, считается ли данное значение «простым значением» или нет.

На данный момент реализовано так:

```ts
import isPlainObject from './isPlainObject';

export function isPlain(val: any) {
  return (
    typeof val === 'undefined' ||
    val === null ||
    typeof val === 'string' ||
    typeof val === 'boolean' ||
    typeof val === 'number' ||
    Array.isArray(val) ||
    isPlainObject(val)
  );
}
```

Это примет все стандартные объекты JS, массивы и примитивы, но вернет false для `Date`, `Map` и других подобных экземпляров классов.
