//# combineReducers (ОБЪЕДИНЕНИЕ РЕДЮСЕРОВ)
// Объединяет несколько функций-редюсеров в один.

//# Синтаксис
//* Объект со свойствами: ключ (название ключа для state): значение (соответствующий редюсер)
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});
