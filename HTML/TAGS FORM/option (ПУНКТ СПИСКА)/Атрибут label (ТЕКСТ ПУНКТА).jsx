//# Атрибут label (ТЕКСТ ПУНКТА)
// Значение этого атрибута задаёт текст пункта в списке. Если атрибут не задан, то в качестве значения берётся текстовое содержимое тега <option>.

//# Пример
// Несмотря на то, что задано текстовое содержимое тега <option>, в выпадающем списке отображаются значения из атрибутов label.
<select name="city2">
  <option value="petersburg" selected label="Ленинград">
    Санкт-Петербург
  </option>
  <option value="samara" label="Куйбышев">
    Самара
  </option>
  <option value="volgograd" label="Сталинград">
    Волгоград
  </option>
  <option value="ekaterinburg" label="Свердловск">
    Екатеринбург
  </option>
</select>;
