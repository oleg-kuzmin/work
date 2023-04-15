//# event
const button = document.querySelector('.button');
button.addEventListener('click', function (evt) {
  const eventTarget = evt.target;
  eventTarget.setAttribute('disabled', true);
});

//* evt.target
// хранится элемент, на котором сработало событие

//* evt.key
// хранит название нажатой клавиши

//* evt.keyCode
// хранит уникальный код нажатой клавиши
// по новым стандартам устарел, браузеры могут перестать его поддерживать
