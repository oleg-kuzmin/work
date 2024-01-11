//# option (ПУНКТ СПИСКА) (option: вариант, выбор)
/*
- Тег <option> используется в интерактивных элементах управления для вёрстки одиночного пункта списка.
- Тегом <option> размечается каждый элемент выпадающего списка <select>, группы опций <optgroup> или перечня <datalist>.
*/

//# Пример
<form>
  <label for="city-select">Ваш город</label>
  <select name="city" id="city-select">
    <option value="">-- Выберите город --</option>
    <option value="petersburg">Санкт-Петербург</option>
    <option value="moscow">Москва</option>
    <option value="kazan">Казань</option>
    <option value="samara">Самара</option>
    <option value="perm">Пермь</option>
    <option value="novosibirsk">Новосибирск</option>
  </select>
</form>;
