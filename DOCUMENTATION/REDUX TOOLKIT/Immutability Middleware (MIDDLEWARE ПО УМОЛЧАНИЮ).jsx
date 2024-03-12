//# Immutability Middleware (MIDDLEWARE ПО УМОЛЧАНИЮ)
// Порт middleware от redux-immutable-state-invariant, настроенный для использования с Redux Toolkit. Любые обнаруженные мутации будут считаться ошибками.

// Этот middleware добавляется в хранилище по умолчанию с помощью configureStore и getDefaultMiddleware.

// Вы можете настроить поведение этого middleware, передав любой из поддерживаемых параметров в качестве значения immutableCheck для getDefaultMiddleware.

//# Использование с удалением других middleware
// createImmutableStateInvariantMiddleware - создает экземпляр middleware для проверки неизменяемости с заданными параметрами.
import { configureStore, createImmutableStateInvariantMiddleware, Tuple } from '@reduxjs/toolkit';

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
});

const store = configureStore({
  reducer: exampleSliceReducer,
  // Обратите внимание, что это заменит все middleware по умолчанию.
  middleware: () => new Tuple(immutableInvariantMiddleware),
});

//# Использование без удаления других middleware
// Делаем то же самое, не удаляя все остальные промежуточные программы, используя getDetfaultMiddleware
configureStore({
  reducer: exampleSliceReducer,
  // Это заменяет исходное middleware по умолчанию на настроенные версии.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
      },
    }),
});

//# Параметры
createImmutableStateInvariantMiddleware({
  //# ignoredPaths (опционально)
  // Массив из строк путей, разделенных точками, или регулярные выражения, которые следует игнорировать при проверке. По умолчанию undefined.
  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],

  //# warnAfter (опционально)
  // Выводит предупреждение, если проверка занимает больше времени, чем N ms. По умолчанию: 32 ms.
  warnAfter: 32,

  //# isImmutable (опционально)
  /*
  - Функция callback для проверки того, считается ли значение проверки иммутабельным (неизменяемым). Эта функция применяется рекурсивно к каждому значению, содержащемуся в состоянии. Реализация по умолчанию вернет true для примитивных типов. (например для numbers, strings, booleans, null и undefined). 
  - На данный момент реализована как в примере.
  */
  isImmutable: value => {
    return typeof value !== 'object' || value === null || typeof value === 'undefined';
  },
});
