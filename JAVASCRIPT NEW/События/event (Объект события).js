//# event (Объект события)
/* У события 3 фазы:
1 - Capture (погружение), событие идет сверху вниз от родителя к детям
2 - Target (цель), событие достигло целевого назначения
3 - Bubbling (всплытие), событие начинает всплывать обратно к родителю
*/

const button = document.querySelector('.button');
button.addEventListener('click', function (evt) {
  const eventTarget = evt.target;
  eventTarget.setAttribute('disabled', true);
});

//* evt.preventDefault();
// отмена стандартного события

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

//* evt.screenX и evt.screenY
// Координаты

//* evt.target и evt.currentTarget
// evt.target - хранит элемент, на котором сработало событие (самый глубокий элемент DOM-дерева из всех, где сработало событие)
// evt.currentTarget - элемент, где сработал обработчик (тот, на который мы повесили обработчик)

playlist.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('song__like')) {
    like(evt.target);
  }
});

//* evt.target.dataset
// Получаем доступ к атрибуту data в html
<input type="button" data-number="1"></input>;
evt.target.dataset; // {number : '1'}
evt.target.dataset.number; // '1'

//* evt.type
// Тип события

//* evt.isTrusted
// Проверяет пользователь ли сделал клик (защита от бота)

//# Передача аргументов
//* Вариант 1. Привязываем контекст и первые по порядку параметры
function someFunk(a, b, event) {
  console.log(a, b, event);
}
element.addEventListener('click', someFunk.bind(null, 1, 2));

//* Вариант 2. Используем интерфейс EventListener
function someFunk(event) {
  console.log(this.a, this.b, event);
}
element.addEventListener('click', { handleEvent: someFunk, a: 1, b: 2 });

//* Вариант 3.
element.addEventListener('click', () => someFunk(param));
