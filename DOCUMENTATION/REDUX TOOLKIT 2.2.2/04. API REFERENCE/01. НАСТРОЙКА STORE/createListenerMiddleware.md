# `createListenerMiddleware`

## Обзор

Это middleware от Redux, которое позволяет вам определять слушателя, содержащее callback «эффекта» с дополнительной логикой, а также способ указать, когда этот callback должен запускаться на основе отправленных actions или изменений состояния.

Он задуман как облегченная альтернатива более широко используемому асинхронному middleware Redux, такому как Redux Saga и Observables. Хотя по уровню сложности и концепции он похож на thunks, его можно использовать для воспроизведения некоторых распространенных шаблонов использования Redux Saga.

Концептуально вы можете думать об этом как о хуке useEffect в React, за исключением того, что он запускает логику в ответ на обновления хранилища Redux вместо обновлений свойств/состояния компонента.

Callback эффектов слушателя имеет доступ к `dispatch` и `getState`, аналогично thunks. Слушатель также получает набор асинхронных функций рабочего процесса, таких как `take`, `condition`, `pause`, `fork` и `unsubscribe`, которые позволяют писать более сложную асинхронную логику.

Слушатели могут быть определены статически, вызвав `listenerMiddleware.startListening()` во время установки или добавляться и удаляться динамически во время выполнения с помощью специальных actions: `dispatch(addListener())` и `dispatch(removeListener())`.

## Базовое использование

```ts
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import todosReducer, { todoAdded, todoToggled, todoDeleted } from '../features/todos/todosSlice';

// Создайте экземпляр и методы middleware
const listenerMiddleware = createListenerMiddleware();

// Добавьте одну или несколько записей слушателя, которые ищут определенные действия.
// Они могут содержать любую синхронную или асинхронную логику, похожую на thunks.
listenerMiddleware.startListening({
  actionCreator: todoAdded,
  effect: async (action, listenerApi) => {
    // Запустите здесь любую дополнительную логику побочных эффектов, которую захотите.
    console.log('Todo added: ', action.payload.text);

    // Можно отменить другие запущенные экземпляры
    listenerApi.cancelActiveListeners();

    // Запустите асинхронную логику
    const data = await fetchData();

    // Сделайте паузу до отправки action или изменения состояния.
    if (await listenerApi.condition(matchSomeAction)) {
      // Используйте методы API прослушивателя для отправки, получения состояния,
      // отпишитесь от слушателя, запустите дочерние задачи и многое другое
      listenerApi.dispatch(todoAdded('Buy pet food'));

      // Создайте «дочерние задачи», которые могут выполнять больше работы и возвращать результаты.
      const task = listenerApi.fork(async forkApi => {
        // Можно приостановить выполнение
        await forkApi.delay(5);
        // Завершите дочерний элемент, вернув значение
        return 42;
      });

      const result = await task.result;
      // Разверните дочерний результат в слушателе
      if (result.status === 'ok') {
        // Выведете в консоль `42` - возвращенное значение результата.
        console.log('Child succeeded: ', result.value);
      }
    }
  },
});

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  // Добавьте middleware слушателя в хранилище.
  // ПРИМЕЧАНИЕ. Поскольку это может принимать actions с функциями внутри,
  // это должно идти до middleware проверки сериализуемости
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
```
