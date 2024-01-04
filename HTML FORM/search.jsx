//# search
/*
- Семантический тег-обёртка для блока с поиском или фильтром.
- Этот семантический тег пришёл на замену ARIA-атрибуту role="search". Им можно обернуть форму с поиском или блок на странице с результатами фильтрации.
- Что делать, если на странице одновременно есть и то, и другое? Просто добавьте атрибут aria-label, если заголовок видят только скринридеры, или aria-labelledby, когда заголовок видят все.
*/

//# Пример
//* Как будет теперь
<search>
  <form>
    <input type="search" />
    <button>Поиск</button>
  </form>
</search>;

<search>
  <h4>Поиск по фильтрам</h4>
  <form>
    <label>
      цвет
      <select name="color">
        <option value="red">Красный</option>
        <option value="green">Зелёный</option>
        <option value="blue">Синий</option>
      </select>
    </label>
  </form>
</search>;

//* Как было раньше
<form role="search"></form>;
