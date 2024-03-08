//# (СОЗДАНИЕ MIDDLEWARE)
//* Создание функции middleware
// Эту сигнатуру ожидает от нас redux чтобы использовать middleware. По сути это 3 функции. Нам обязательно нужно чтобы в теле был вызов функции next с аргументом action - next(action).
const myLogger = store => next => action => {
  console.log('случилось событие', action.type);
  next(action); // гарантирует что наш reducer отработает action (синхронно),
  console.log('обновленный state', store.getState());
};

//* Импорт helper для подключения middleware
// Далее applyMiddleware принимает наши функции middleware как параметры.
import { applyMiddleware } from '@reduxjs/toolkit';

//* Передача middleware при создании store
// Передаем вторым или третьим параметром. Соответственно он всегда идет последним.
const store = createStore(counter, applyMiddleware(myLogger));

//# Пример
// Чаще всего middleWare выглядит следующим образом. Создается константа - массив
const middleWare = [];

// Если мы находимся в режиме разработки - добавим logger
if (process.env.NODE_ENV === 'development') {
  middleWare.push(myLogger);
}

// Передаем массив в applyMiddleware (спред оператор чтобы разбить массив на аргументы - функции)
const store2 = createStore(counter, applyMiddleware(...middleWare));
