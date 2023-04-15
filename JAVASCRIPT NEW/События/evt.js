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

//* event.pageX и event.pageY
// координаты по горизонтали и вертикали от угла веб-страницы

//* event.clientX и event.clientY
// координаты относительно угла окна просмотра

//* event.screenX и event.screenY
// координаты относительно угла монитора, на котором открыт сайт. Они используются крайне редко
