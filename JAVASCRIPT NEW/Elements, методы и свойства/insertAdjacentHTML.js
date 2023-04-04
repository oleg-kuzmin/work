//# .insertAdjacentHTML()
// Добавляет разметку и текст в документ и не затрагивает существующие элементы.

//# пример
zoo.insertAdjacentHTML('beforeend', '<div class="tiger"></div>');

//# значения
// beforebegin
<div>
  {/* afterbegin */}
  {/* существующая разметка */}
  {/* beforeend */}
</div>;
// afterend