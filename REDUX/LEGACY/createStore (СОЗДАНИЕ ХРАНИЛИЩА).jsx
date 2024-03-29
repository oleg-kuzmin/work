//# createStore (СОЗДАНИЕ ХРАНИЛИЩА)
// Создает хранилище данных. Как правило хранилище создается один раз.

//# Синтаксис
import { createStore } from '@reduxjs/toolkit';
const store = createStore(reducer, defaultValues);
//* 1. reducer - созданная функция reducer или несколько функций, объединенных в rootReducer (с помощью метода combineReducers)
//* 2. defaultValues - значение по умолчанию, которое может быть каким-либо образом получено (опционально)
/*
- Обычно в defaultValues передаются значения из localStorage.
- Такие данные которые пересохраняются каждый раз называются persist (сохранение чего-то).
- При передаче значения по умолчанию произойдет вызов функции-reducer и передача ей в качестве state указанных defaultValues.
- Т.е. никаких action не случилось, функция-reducer закончится кейсом default: return state.
- Таким образом в функции const reducer = (state = [], action) блок "state = []" уже НЕ СРАБОТАЕТ.
*/

//# Метод
//* Получение всех данных
store.getState();

//* Передача объекта action в функцию reducer
store.dispatch({ type: 'INCREMENT' });

//* Установка слушателя на событие "изменение/обновление store".
store.subscribe(func);
// В качестве аргумента передается функция, которая выполнится при наступлении события
