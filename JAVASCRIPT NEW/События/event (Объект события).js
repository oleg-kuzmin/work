//# event (Объект события)
const button = document.querySelector('.button');
button.addEventListener('click', function (evt) {
  const eventTarget = evt.target;
  eventTarget.setAttribute('disabled', true);
});

//* evt.preventDefault();
// отмена стандартного события

//* evt.target
// хранит элемент, на котором сработало событие (самый глубокий элемент DOM-дерева из всех, где сработало событие)
playlist.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('song__like')) {
    like(evt.target);
  }
});

//* evt.currentTarget
// evt.target хранит элемент, где возникло событие
// evt.currentTarget — элемент, где сработал обработчик

//* evt.key
// хранит название нажатой клавиши

//* evt.keyCode (устарел)
// хранит уникальный код нажатой клавиши

//* evt.pageX и evt.pageY
// координаты по горизонтали и вертикали от угла веб-страницы

//* evt.clientX и evt.clientY
// координаты относительно угла окна просмотра

//* evt.screenX и evt.screenY
// координаты относительно угла монитора, на котором открыт сайт. Они используются крайне редко

//* evt.stopPropagation()
// Метод stopPropagation останавливает всплытие событий на элементе (дальше элемента всплытие не пойдет)
function callback(evt) {
  evt.stopPropagation();
}

//* evt.stopImmediatePropagation()
// отменяет не только всплытие событий, но и срабатывание всех других обработчиков того же события на этом элементе.
// остановит только те обработчики, которые описаны после него. Он попросту не знает о тех, которые стоят в коде раньше.
element.addEventListener('click', function (evt) {
  evt.stopImmediatePropagation();
});

//* evt.type
// Тип события

//* evt.isTrusted
// Проверяет пользователь ли сделал клик (защита от бота)
