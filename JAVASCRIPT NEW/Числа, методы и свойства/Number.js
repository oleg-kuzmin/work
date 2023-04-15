//# Number()
// Приводит к числу.

const input = document.querySelector('#input');
const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт

input.addEventListener('keydown', function (evt) {
  if (Number.isNaN(Number(evt.key))) {
    error.style.display = 'block';
  }
});
