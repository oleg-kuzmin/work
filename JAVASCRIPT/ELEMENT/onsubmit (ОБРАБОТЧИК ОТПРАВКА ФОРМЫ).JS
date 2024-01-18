//# element.onsubmit (ОБРАБОТЧИК ОТПРАВКА ФОРМЫ)
// Позволяет добавить функцию-обработчик события в свойство элемента.

//# Пример
const someForm = document.querySelector('.some-form');

someForm.onsubmit = function () {
  console.log('Форма отправлена!');
};
