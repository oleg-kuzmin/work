//# del (delete) (удалить)
/*
- Тег <del> используется для отображения удалённого контента. Например, выполненного пункта в списке дел или удалённой части кода.
- У тега есть встроенная роль deletion. Благодаря ей пользователи скринридеров знают, что содержимое было удалено.
- По умолчанию браузеры применяют к <del> перечёркивание с помощью text-decoration: line-through. Такого же эффекта можно добиться, используя тег <s> или просто применив к тексту text-decoration: line-through. Однако <del> стоит использовать в том случае, когда нужно подчеркнуть, что какой-то контент был удалён и это важно. Хоть визуально отличий не будет, но это поможет, например, пользователям скринридеров.
- По умолчанию значения атрибутов невидимы для пользователя, но можно автоматически выводить их при помощи скриптов. Например, мы можем добавлять для всех удалённых пунктов дату и время удаления, это будет выглядеть примерно так.
- <del> часто используется вместе с <ins> в кодовых базах для отображения изменений в коде. Например, при просмотре изменений в пулреквесте в GitHub.
*/

//# Пример
<h4>Список дел</h4>;
<ul>
  <li>
    <del>Помыть посуду</del>
  </li>
  <li>
    <del>Полить цветы</del>
  </li>
  <li>Погулять с собакой</li>
  <li>Пропылесосить комнату</li>
</ul>;


