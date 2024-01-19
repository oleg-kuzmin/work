//# optgroup (ГРУППИРУЕТ ПУНКТЫ СПИСКА)
/*
- Тег <optgroup> позволяет группировать опции внутри элемента <select>. Внутри тега <optgroup> стандартно используется один или несколько тегов <option>.
- label — обязательный атрибут. Имя группы будет отображено в выпадающем списке. Теоретически мы можем оставить атрибут пустым или не использовать его вообще, но в таком случае над списком будет пустое пространство.
*/

//# Пример
<select>
  <optgroup label="Необычные цветы" disabled>
    <option>Ангулоя одноцветковая</option>
    <option>Обезьяний дракула</option>
    <option>Пассифлора инкарнатная</option>
  </optgroup>
</select>;

<select name="variants">
  <optgroup label="Группа вариантов 1">
    <option value="1">Вариант 1</option>
    <option value="2">Вариант 2</option>
    <option value="3">Вариант 3</option>
  </optgroup>
  <optgroup label="Группа вариантов 2">
    <option value="4">Вариант 4</option>
    <option value="5">Вариант 5</option>
    <option value="6">Вариант 6</option>
  </optgroup>
</select>;
