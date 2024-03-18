# Action Creator Middleware

Кастомное middleware, которое определяет, был ли action creator отправлен в dispatch без вызова.

Распространенной ошибкой является вызов `dispatch(actionCreator)` вместо `dispatch(actionCreator())`. Приложение может продолжать работать с ошибкой, поскольку action creator имеет свойство static `type`, но может привести к неожиданному поведению.

## Опции

```ts
export interface ActionCreatorInvariantMiddlewareOptions {
  /**
   * Функция определения того, является ли значение action creator.
   * По умолчанию проверяется функция со свойством static type и методом сопоставления.
   */
  isActionCreator?: (action: unknown) => action is Function & { type?: unknown };
}
```

## Экспорт

### `createActionCreatorInvariantMiddleware`

Создает экземпляр middleware проверки action creator с заданными параметрами.

Скорее всего, вам не понадобится вызывать это самостоятельно, поскольку getDefaultMiddleware уже это делает.

Пример:

```ts
import { configureStore, createActionCreatorInvariantMiddleware, Tuple } from '@reduxjs/toolkit';
import reducer from './reducer';

// Дополните middleware, чтобы все функции со свойством static type считались action creator.
const isActionCreator = (action: unknown): action is Function & { type: unknown } =>
  typeof action === 'function' && 'type' in action;

const actionCreatorMiddleware = createActionCreatorInvariantMiddleware({
  isActionCreator,
});

const store = configureStore({
  reducer,
  middleware: () => new Tuple(actionCreatorMiddleware),
});
```
