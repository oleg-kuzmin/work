//# Serializability Middleware (MIDDLEWARE ПО УМОЛЧАНИЮ) Last updated on Oct 1, 2023
// Пользовательское middleware, которое определяет, были ли какие-либо несериализуемые значения включены в состояние или в actions, смоделированное на основе redux-immutable-state-invariant. Любые обнаруженные несериализуемые значения будут выводится в консоль.

// Этот middleware добавляется в хранилище по умолчанию с помощью configureStore и getDefaultMiddleware.

// Вы можете настроить поведение этого промежуточного программного обеспечения, передав любой из поддерживаемых параметров в качестве значения serializableCheck для getDefaultMiddleware.

//# Использование с удалением других middleware
//* createSerializableStateInvariantMiddleware - cоздает экземпляр промежуточного программного обеспечения проверки сериализуемости с заданными параметрами.
import { Iterable } from 'immutable';
import { configureStore, createSerializableStateInvariantMiddleware, isPlain, Tuple } from '@reduxjs/toolkit';
import reducer from './reducer';

//* Дополнить middleware, чтобы считать итерации Immutable.JS сериализуемыми.
const isSerializable = (value: any) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value: any) => (Iterable.isIterable(value) ? value.entries() : Object.entries(value));

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

const store = configureStore({
  reducer,
  middleware: () => new Tuple(serializableMiddleware),
});

//# Использование без удаления других middleware
//* Делаем то же самое, не удаляя все остальные промежуточные программы, используя getDetfaultMiddleware
configureStore({
  reducer: exampleSliceReducer,
  // Это заменяет исходное middleware по умолчанию на настроенные версии.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
      },
    }),
});

//# Параметры
createSerializableStateInvariantMiddleware({
  //# isSerializable (опционально)
  // Функция проверки того, считается ли значение сериализуемым. Эта функция применяется рекурсивно к каждому значению, содержащемуся в состоянии. По умолчанию используется isPlain().
  isSerializable: (value: any) => {
    isPlain(value);
  },

  //# getEntries (опционально)
  // Функция, которая будет использоваться для получения записей из каждого значения. Если не указано будет использовано Object.entries. По умолчанию undefined.
  getEntries: (value: any) => {
    Object.entries(value);
  },

  //# ignoredActions (опционально)
  // Массив actions, которые следует игнорировать при проверке сериализуемости. По умолчанию - пустой массив.
  ignoredActions: [],

  //# ignoredActionPaths (опционально)
  // Массив строк пути, разделенных точками, или регулярных выражений, которые следует игнорировать. По умолчанию ['meta.arg', 'meta.baseQueryMeta']
  ignoredActionPaths: ['meta.arg', 'meta.baseQueryMeta'],

  //# ignoredPaths (опционально)
  // Массив строк пути, разделенных точками, или регулярных выражений, которые следует игнорировать. При проверке сериализуемости по умолчанию установлено значение - [].
  ignoredPaths: [],

  //# warnAfter (опционально)
  // Порог предупреждения о времени выполнения. Если middleware занимает больше времени чем 32 ms, в консоли отобразится предупреждение. По умолчанию 32 ms.
  warnAfter: 32,

  //# ignoreState (опционально)
  // Отказаться от проверки state. Если установлено значение true, другие параметры, связанные с состоянием, будут игнорироваться.
  ignoreState: false,

  //# ignoreActions (опционально)
  // Отказаться от проверки actions. Если установлено значение true, другие параметры, связанные с действием, будут игнорироваться.
  ignoreActions: false,
});

//# isPlain()
//* Проверяет, считается ли данное значение «простым значением» или нет.

// На данный момент реализовано так:
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
