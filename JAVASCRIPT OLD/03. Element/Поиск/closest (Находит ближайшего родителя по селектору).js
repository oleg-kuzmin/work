//# .closest() (Находит ближайшего родителя по селектору)
// Возвращает ближайший родительский элемент с переданным селектором.

//# пример
//* разметка элемента списка
<li class="todo__item">
  <span>Полить цветы</span>
  <button class="todo__item-button">Удалить</button>
</li>;

//* выберем кнопку удаления
const deleteButton = document.querySelector('.todo__item-button');

//* добавим обработчик
deleteButton.addEventListener('click', function () {
  const listItem = deleteButton.closest('.todo__item');
  listItem.remove();
});
