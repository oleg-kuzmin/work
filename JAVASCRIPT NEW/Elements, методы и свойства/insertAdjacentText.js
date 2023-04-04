//# .insertAdjacentText()
// Добавляет текст в документ и не затрагивает существующие элементы.

//# пример
zoo.insertAdjacentText('afterbegin', '12345');

//# значения
// beforebegin
<div>
  {/* afterbegin */}
  {/* существующая разметка */}
  {/* beforeend */}
</div>;
// afterend
