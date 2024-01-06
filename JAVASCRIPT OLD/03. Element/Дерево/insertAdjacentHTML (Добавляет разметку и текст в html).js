//# .insertAdjacentHTML() (Добавляет разметку и текст в html)
// Добавляет разметку и текст в документ и не затрагивает существующие элементы.

//# значения
{/* beforebegin */}
<div>
  {/* afterbegin */}
  текущая разметка
  {/* beforeend */}
</div>;
{/* afterend */}

//# пример
zoo.insertAdjacentHTML('beforeend', '<div class="tiger"></div>');
