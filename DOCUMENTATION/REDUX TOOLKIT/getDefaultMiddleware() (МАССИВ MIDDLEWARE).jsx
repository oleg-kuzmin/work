//# getDefaultMiddleware() (МАССИВ MIDDLEWARE)
// Возвращает массив, содержащий список middleware по умолчанию.

//# Предполагаемое использование
//* По умолчанию configureStore автоматически добавляет некоторые middleware в настройку хранилища Redux. В store добавлено middleware, поскольку список middleware не был настроен:
const store = configureStore({
  reducer: rootReducer,
});

//* Если вы хотите настроить список middleware, вы можете предоставить массив функций middleware для configureStore. В store специально применяются middleware "thunk" и "logger":
configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(thunk, logger),
});

// Однако, когда вы предоставляете опцию middleware, вы несете ответственность за определение всего middleware, которое вы хотите добавить в store. configureStore НЕ БУДЕТ добавлять никакого дополнительного промежуточного middleware, кроме того, что вы указали.

//* getDefaultMiddleware полезен, если вы хотите добавить какое-то собственное middleware, но при этом также хотите добавить стандартное middleware по умолчанию:

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducer';

configureStore({
  reducer: rootReducer,
  // В store добавлены все middleware по умолчанию, плюс middleware "logger".
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// Предпочтительно использовать цепочки методов concat() и prepend() возвращаемого кортежа вместо спред-оператора расширения массива, поскольку последний при некоторых обстоятельствах может потерять ценную информацию о типе TS.

//# Middleware по умолчанию

//# Development (разработка)
// Одна из целей Redux Toolkit — предоставить продуманные значения по умолчанию и предотвратить распространенные ошибки. В рамках этого getDefaultMiddleware включает в себя некоторое middleware, которое добавляется в разрабатываемые сборки вашего приложения для обеспечения проверки во время выполнения трех распространенных проблем:

//* Immutability check middleware
// Глубоко сравнивает значения состояний для мутаций. Он может обнаруживать мутации в редюсерах во время отправки, а также мутации, возникающие между отправками (например, в компоненте или селекторе). При обнаружении мутации выдается ошибка и указывается путь к ключу, в котором мутированное значение было обнаружено в дереве состояний. (В основе лежит библиотека  redux-immutable-state-invariant).

//* Serializability check middleware
// Кастомное middleware, созданное специально для использования в Redux Toolkit. По концепции похож на immutable-state-invariant, но тщательно проверяет ваше дерево состояний и ваши действия на предмет несериализуемых значений, таких как функции, Promises, символы и другие значения данных, не относящихся к простому JS. При обнаружении несериализуемого значения на консоли будет выведена ошибка с указанием пути к ключу, в котором было обнаружено несериализуемое значение.

//* Action creator check middleware
// Еще одно кастомное middleware, созданное специально для использования в Redux Toolkit. Определяет, когда action creator был по ошибке отправлен в dispatch без вызова, и выводит ошибку в консоль с указанием типа действия.

//* В дополнение к этим middleware для разработки также добавляется redux-thunk по умолчанию, поскольку thunks являются основным рекомендуемым middleware с побочными эффектами для Redux.

// В настоящее время возвращаемый массив middleware составляет:
const middleware = [immutableStateInvariant, serializableStateInvariant, actionCreatorInvariant, thunk];
