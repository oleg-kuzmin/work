// Событие onresize объекта window ответственно за изменение размеров окна браузера.
// Поэтому событие и принадлежит объекту окно — window.
// Поскольку среди элементов html нету тега, отождествленного с окном браузера, то обработать в javascript событие onresize можно при помощи присваивания функции свойству объекта window.

// Пишем функцию
function resize() {
  const element = React.createElement(
    "div",
    { className: "main" },
    React.createElement("h1", null, "размер окна"),
    React.createElement("h1", null, "в пикселях"),
    React.createElement("h2", null, `${innerHeight}px на ${innerWidth}px`)
  );
  ReactDOM.render(element, document.getElementById("root"));
}
resize();

// Включаем эту функцию в случае изменения окна браузера
window.onresize = resize;

// Второй вариант
function message() {
  alert("Размер окна изменен!");
}
window.onresize = message;
// Или
window.onresize = function message() {
  alert("Размер окна изменен!");
};