//# Атрибут multiple (ВЫБОР НЕСКОЛЬКО ЗНАЧЕНИЙ)
/*
- С атрибутом multiple можно выбрать несколько имейлов или файлов в <input>, либо несколько вариантов в списке <select>.
- Атрибут multiple можно указать без значения, он доступен для тега <input> с type="email" или type="file", а также для тега <select>.
- В ARIA есть атрибут aria-multiselectable. Он тоже нужен для выбора нескольких опций или файлов.
- Старайтесь всегда использовать multiple. aria-multiselectable поможет в сложных ситуациях, когда создаёте кастомные элементы.
*/

//# Пример
//* <select>
<select size="5" multiple>
  <option>Красный</option>
  <option>Классный</option>
  <option>Зелёный</option>
  <option>Синий</option>
  <option>Съел иней</option>
</select>;

//* <datalist>
<input type="email" list="list-of-emails" multiple />;
<datalist id="list-of-emails">
  <option value="nekto@doka.guide">Неизвестный</option>
  <option value="prikolist333@doka.guide">Друг шутник</option>
  <option value="anderyBoss@doka.guide">Босс Андрей</option>
  <option value="grish111a@doka.guide">Просто Гриша</option>
  <option value="brigadir@doka.guide">Бригадир</option>
  <option value="s0123tr1012dgs@doka.guide">Не знаю кто</option>
  <option value="printerDanila01@doka.guide">Почта для принтера</option>
</datalist>;
