//# createStore (СОЗДАНИЕ ХРАНИЛИЩА)
// Создает хранилище данных. Как правило хранилище создается один раз.

//# Синтаксис
//* reducer - созданная функция reducer или несколько функций, объединенных в rootReducer (с помощью метода combineReducers)
import { createStore } from '@reduxjs/toolkit';
const store = createStore(reducer);

//# Метод
//* Получение всех данных
store.getState();

//* Передача объекта action в функцию reducer
store.dispatch({ type: 'INCREMENT' });

//* Установка слушателя на событие "изменение/обновление store".
store.subscribe(func);
// В качестве аргумента передается функция, которая выполнится при наступлении события
