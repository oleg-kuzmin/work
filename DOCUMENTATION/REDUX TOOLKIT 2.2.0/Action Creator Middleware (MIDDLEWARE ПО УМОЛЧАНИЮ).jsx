//# Action Creator Middleware (MIDDLEWARE ПО УМОЛЧАНИЮ)
// Специальное middleware, которое определяет, был ли action creator отправлен в dispatch без вызова.

// Распространенной ошибкой является вызов dispatch(actionCreator) вместо dispatch(actionCreator()). Приложение может продолжать работать с ошибкой, поскольку action creator имеет свойство статического типа, но может привести к неожиданному поведению.

//# Параметры
createActionCreatorInvariantMiddleware({
  //# isActionCreator (опционально)
  // Функция определения того, является ли значение action creator. По умолчанию проверяется функция со свойством статического типа и методом сопоставления. Реализация по умолчанию: isActionCreator?: (action: unknown) => action is Function & { type?: unknown }
  isActionCreator: () => {},
});

//# Использование с удалением других middleware
//* createActionCreatorInvariantMiddleware - Создает экземпляр middleware проверки action creator с заданными параметрами.
import { configureStore, createActionCreatorInvariantMiddleware, Tuple } from '@reduxjs/toolkit';
import reducer from './reducer';

// Дополните middleware, чтобы все функции со свойством статического типа считались action creator.
const isActionCreator = (action: unknown): action is Function & { type: unknown } =>
  typeof action === 'function' && 'type' in action;
const actionCreatorMiddleware = createActionCreatorInvariantMiddleware({
  isActionCreator,
});
const store = configureStore({
  reducer,
  middleware: () => new Tuple(actionCreatorMiddleware),
});

//# Использование без удаления других middleware
//* Делаем то же самое, не удаляя все остальные промежуточные программы, используя getDetfaultMiddleware
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

