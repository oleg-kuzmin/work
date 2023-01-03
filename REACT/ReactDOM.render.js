ReactDOM.render(
  React.createElement("h1", null, "Привет, Мир!"),
  document.querySelector('#root')
);

ReactDOM.render(
  newElement,
  document.querySelector('#root')
);

ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Текущее время:"),
    React.createElement("h2", null, new Date().toLocaleTimeString())
  ),
  document.querySelector('#root')
);

// Функция принимает два аргумента.
// Первый — разметка, которую мы хотим поместить в корневой узел.
// Второй — указатель на DOM-узел, который будем использовать в качестве корневого.

