React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Привет, React!"),
);

ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Текущее время:"),
    React.createElement("h2", null, new Date().toLocaleTimeString())
  ),
  document.getElementById("root")
);

// Функция вызывается с тремя аргументами:
// 1. Названием результирующего HTML-тега.
// 2. Дополнительными свойствами, которые прикреплены к этому тегу. Это может быть CSS-идентификатор class или id либо другие свойства.
// 3. Содержимым, которое попадёт в HTML-тег. Содержимым может быть не только текст, но и другие элементы.