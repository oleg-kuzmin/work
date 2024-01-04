//# search
/*
- Семантический тег-обёртка для блока с поиском или фильтром.
- Этот семантический тег пришёл на замену ARIA-атрибуту role="search". Им можно обернуть форму с поиском или блок на странице с результатами фильтрации.
- Важно упомянуть, что это новый тег и пока у него нет широкой браузерной поддержки. Понадобится время, чтобы браузеры и скринридеры его внедрили. Когда это произойдёт, мы получим отличное дополнение к другим семантическим тегам, таким как <aside> или <header>.
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

//# aria-label
// Что делать, если на странице одновременно есть и то, и другое? Просто добавьте атрибут aria-label, если заголовок видят только скринридеры, или aria-labelledby, когда заголовок видят все.
<body>
  <search aria-label="По сайту">
    <form>{/* Содержимое, связанное с поиском */}</form>
  </search>
  <search aria-labelledby="label">
    <h2 id="label">Результаты фильтрации</h2>
  </search>
</body>;

//# role
// Пока у тега нет хорошей поддержки, можно дублировать роль search.
<search role="search">{/* Содержимое формы */}</search>;
