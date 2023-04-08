//# event
// У объекта event есть свойство target. В нём хранится элемент, на котором сработало событие:
const button = document.querySelector('.button');

button.addEventListener('click', function (evt) {
  // в переменной eventTarget окажется элемент
  // button, на который мы кликнули
  const eventTarget = evt.target;
  eventTarget.setAttribute('disabled', true);
});
