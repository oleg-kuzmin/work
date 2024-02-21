//# ReactDOM.createRoot (СОЗДАЕТ КОРНЕВОЙ ЭЛЕМЕНТ)
// Более современный способ создания коревого элемента, чем React.createElement.

//# Синтаксис
ReactDOM.createRoot(domContainer);
//* domContainer: указатель на DOM-узел, который будем использовать в качестве корневого.

//# Пример
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(someElement);
