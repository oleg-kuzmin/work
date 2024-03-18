# `configureStore`

Стандартный метод создания хранилища Redux. Он использует внутри низкоуровневый метод `createStore()` ядра Redux, но оборачивает его, чтобы обеспечить хорошие настройки хранилища по умолчанию для лучшего опыта разработки.

## Цель и поведение

Стандартная настройка хранилища Redux обычно требует нескольких частей конфигурации:

- Объединение нескольких slice-reducers в корневой root-reducer.
- Создание усилителей (middleware enhancers), обычно с thunk middleware или другими middleware с побочными эффектами, а также middleware, которые могут использоваться для проверки в режиме разработки.
- Добавление усилителя Redux DevTools (расширение браузера) и объединение усилителей вместе.
- Вызов `createStore()`.

Раньше для достижения этой цели в Legacy Redux шаблоны обычно требовали нескольких десятков строк кода.

Инструмент `configureStore()` в Redux Toolkit упрощает этот процесс установки, делая всю работу за вас. Один вызов `configureStore()`:

- Вызывает `combineReducers()`, чтобы объединить ваши reducers в функцию root-reducer.
- Добавляет thunk middleware и вызов `applyMiddleware()`.
- В режиме development добавляет больше middleware для проверки распространенных ошибок, например таких как мутация состояния.
- Автоматически настраивает соединение с расширением Redux DevTools.
- Вызывает `createStore()`, чтобы создать хранилище Redux, используя вышеуказанные root-reducer и параметры конфигурации.

`configureStore()` также предлагает улучшенный API и шаблоны использования по сравнению с оригинальным `createStore`, принимая значения для `reducer`, `preloadedState`, `middleware`, `enhancers` и `devtools`, а также гораздо лучший вывод типов TS.

## Опции

`configureStore` принимает один параметр - объект конфигурации со следующими свойствами:

```ts
interface ConfigureStoreOptions<
  S = any,
  A extends Action = UnknownAction,
  M extends Tuple<Middlewares<S>> = Tuple<Middlewares<S>>
  E extends Tuple<Enhancers> = Tuple<Enhancers>,
  P = S
> {
  /**
   * Одна функция - reducer, которая будет использоваться в качестве root-reducer
   * или объект c несколькими slice-reducers, который будет передан в combineReducers()
   */
  reducer: Reducer<S, A, P> | ReducersMapObject<S, A, P>

  /**
   * Массив Redux middleware для установки. Если не указано, по умолчанию используется
   * набор middleware, возвращаемый функцией getDefaultMiddleware().
   */
  middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M

  /**
   * Включить ли расширение Redux DevTools. По умолчанию установлено true.
   * Дополнительную настройку можно выполнить, передав параметры Redux DevTools.
   */
  devTools?: boolean | DevToolsOptions

  /**
   * Изначальное состояние - такое же initial-state, как и у createStore в Redux.
   * Вы можете опционально указать его для гидратации состояния
   * с сервера в универсальных приложениях или для восстановления предыдущей сериализованной
   * сессии пользователя. Если вы используете combineReducers() для создания root-reducer
   * (прямо или косвенно путем передачи объекта как значения свойства reducer)
   * это должен быть объект с точно такими же ключами как у reducer.
   */
  preloadedState?: P

  /**
   * Усилители store, которые нужно применить. См. функцию createStore() в Redux.
   * Все усилители будут включены перед DevTools Extension.
   * Если вам нужно настроить определенный порядок усилителей, используйте callback функцию,
   * которая получит getDefaultEnhancers в качестве массива усилителей и должна вернуть
   * новый массив (например getDefaultEnhancers().concat(offline)).
   * Если вам нужно добавить только middleware, вы можете использовать свойство middleware.
  */
  enhancers?: (getDefaultEnhancers: GetDefaultEnhancers<M>) => E | E
}

function configureStore<
  S = any,
  A extends Action = UnknownAction,
  M extends Tuple<Middlewares<S>> = Tuple<Middlewares<S>>
  E extends Tuple<Enhancers> = Tuple<Enhancers>,
  P = S
>(options: ConfigureStoreOptions<S, A, M, E, P>): EnhancedStore<S, A, M, E>
```

### `reducer`

Если это одна функция, она будет напрямую использоваться в качестве root-reducer для хранилища.

Если это объект c несколькими slice-reducers, например `{ users: usersReducer, posts: postsReducer }`, `configureStore()` автоматически создаст корневой root-reducer, передав этот объект утилите Redux `combineReducers()`.

### `middleware`

В качестве значения указывается callback, который получает `getDefaultMiddleware` в качестве единственного аргумента и возвращает сформированный массив из middleware.

Если эта опция указана, она должна возвращать все middleware, которые вы хотите добавить в хранилище. `configureStore` автоматически передаст их в `applyMiddleware`.

Если эта опция не указана, `configureStore` вызовет `getDefaultMiddleware` и будет использовать возвращаемый массив middleware по умолчанию.

Дополнительные сведения о том, как работает параметр middleware, а также список middleware, добавляемых по умолчанию, смотрите на странице документации [`getDefaultMiddleware()`](./getDefaultMiddleware.md).

Пользователи Typescript должны использовать экземпляр Tuple (если не используется дефолтный результат getDefaultMiddleware, который уже является Tuple) для лучшего вывода.

```ts
import { configureStore, Tuple } from '@reduxjs/toolkit';

configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(additionalMiddleware, logger),
});
```

Пользователи, использующие только Javascript, могут при желании использовать простой массив.

### `devTools`

Если это логическое значение, оно будет использоваться для указания, должен ли `configureStore` автоматически включать поддержку браузерного расширения Redux DevTools.

Если это объект, то расширение DevTools будет включено, а объект параметров будет передан в функцию `composeWithDevtools()`. Список конкретных доступных опций см. в [документации](./https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md). по расширению DevTools для EnhancerOptions.

По умолчанию true.

**trace**

Расширение Redux DevTools недавно добавило [поддержку отображения трассировок стека action](https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/Features/Trace.md), которые точно показывают, куда был отправлен каждый action. Захват трассировок может добавить дополнительную нагрузку, поэтому расширение DevTools позволяет пользователям настраивать, будут ли регистрироваться трассировки стека action, путем установки аргумента 'trace'. Если DevTools включается путем передачи true или объекта, то configureStore по умолчанию включает запись трассировок стека action только в режиме разработки.
