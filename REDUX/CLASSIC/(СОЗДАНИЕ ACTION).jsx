//# (СОЗДАНИЕ ACTION)
// Action - это объект действий для передачи в dispatch. Или можно создать функцию, которая вернет объект. Главное чтобы в итоге получился объект. У него есть ключи type и payload.

//* передача в dispatch объекта action без отдельной переменной
store.dispatch({ type: 'INCREMENT' });

//* Создание переменной increment (объект-action) и передача ее в dispatch
const increment = {
  type: 'INCREMENT',
};
store.dispatch(increment);

//* Создание функции (которая возвращает объект-action) и передача ее в dispatch


