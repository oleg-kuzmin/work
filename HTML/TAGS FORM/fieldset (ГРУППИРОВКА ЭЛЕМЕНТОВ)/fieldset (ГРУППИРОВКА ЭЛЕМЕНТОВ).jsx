//# fieldset (ГРУППИРОВКА ЭЛЕМЕНТОВ)
/*
- Тег <fieldset> группирует элементы формы (поля ввода <input>, <textarea>, выпадающие списки <select> и другие) в блок с характерным выделением границ. Опционально с помощью тега <legend> внутри <fieldset> можно задать заголовок для создаваемой группы (он может быть только один и обязательно должен идти первым вложенным элементом).
- Для добавления подписи внутри <fieldset> следует использовать <legend>.

*/

//# Пример
<form>
  <fieldset>
    <legend>Прозвище Дракса из «Стражей Галактики»?</legend>
    <label>
      <input type="radio" name="answer" value="Exterminator" />
      Уничтожитель
    </label>
    <label>
      <input type="radio" name="answer" value="Destroyer" />
      Разрушитель
    </label>
    <label>
      <input type="radio" name="answer" value="Accuser" />
      Обвинитель
    </label>
    <label>
      <input type="radio" name="answer" value="Sweet-tooth" />
      Сладкоежка
    </label>
  </fieldset>
</form>;
