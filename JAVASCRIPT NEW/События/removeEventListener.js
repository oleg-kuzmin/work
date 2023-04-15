//# removeEventListener
// Удаляет слушатель событий.

//# синтаксис
element.removeEventListener(eventName, handler);
// element — элемент, у которого удаляем слушатель.
// eventName — событие, на которое нужно отреагировать.
// handler — функция-обработчик события. Она будет вызвана, когда событие сработает (например, произойдёт клик).

//# пример
someElement.addEventListener('click', function () {
  console.log('Событие сработало!');
});

someElement.removeEventListener('click', function () {
  console.log('Событие сработало!');
});
