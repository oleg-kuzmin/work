//# nav (БЛОК НАВИГАЦИИ) (navigation: навигация)
/*
- В контейнере <nav> можно собрать ссылки для навигации по сайту.
- В контейнер <nav> помещаются основные ссылки, по которым пользователь сможет быстро перейти на нужный раздел сайта.
- На странице можно использовать несколько <nav>.
- У <nav> нет уникальных атрибутов, применяются все глобальные атрибуты.
- <nav> — это один из ориентиров (landmark), которые скринридеры могут использовать для навигации по странице. То есть можно перейти прямо в блок навигации по сайту, это очень удобно.
- Спецификация рекомендует не увлекаться разметкой всех ссылок на странице с помощью <nav>, достаточно указать самые важные.
- <nav> — это набор функционально важных ссылок по разделам сайта. Важно выделить <nav>, чтобы поисковик понял, что находится в блоке навигации.
- Навигация может быть не только по страницам внутри сайта, но и по внешним ресурсам. Например, блок с перечислением компаний-партнёров со ссылками на их сайты. В этом случае также вполне уместно использовать <nav>.
- Не каждая группа ссылок на странице должна быть обёрнута в <nav>. Например, небольшой блок со вспомогательными ссылками в подвале сайта. Такой блок внутри тега <footer> не нужно дополнительно оборачивать в тег <nav>.
- Кроме того, блок <nav> помимо ссылок может включать абзацы с текстом, заголовки, списки и другое содержание.
*/

//# Пример
<nav class="menu">
  <ul>
    <li>
      <a href="#">Главная</a>
    </li>
    <li>
      <a href="#">О нас</a>
    </li>
    <li>
      <a href="#">Контакты</a>
    </li>
  </ul>
</nav>;
