//# element.onclick (ОБРАБОТЧИК ONCLICK)
// Позволяет добавить функцию-обработчик события в свойство элемента.

//# Пример
const button = document.querySelector('button');

button.onclick = function () {
  console.log('Клик!');
};
