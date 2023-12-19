//# ins (insert) (вставить)
/*
- Тег <ins> используется для отображения добавленного контента. Например, нового пункта в списке дел или новой части кода.
- У тега есть встроенная роль insertion. Благодаря ей пользователи скринридеров знают, что содержимое было добавлено.
- По умолчанию браузеры применяют к <ins> подчёркивание с помощью text-decoration: underline. Такого же эффекта можно добиться, используя тег <u> или просто применив к тексту text-decoration: underline. Однако <ins> стоит использовать в том случае, когда нужно подчеркнуть, что какой-то контент был добавлен и это важно. Хоть визуально отличий не будет, но это поможет, например, пользователям скринридеров.
- Помимо глобальных атрибутов у <ins> есть специфические: cite позволяет сослаться на информацию о правке; datetime позволяет указать время правки. Оба атрибута необязательные и помогают уточнить правку.
- По умолчанию значения атрибутов невидимы для пользователя, но можно автоматически выводить их при помощи скриптов. Например, мы можем добавлять для всех новых пунктов дату и время добавления.
- <del> часто используется вместе с <ins> в кодовых базах для отображения изменений в коде. Например, при просмотре изменений в пулреквесте в GitHub.
*/

//# Пример
<h4>Сдача проекта</h4>;
<ul>
  <li>
    <del>Созвониться с подрядчиком по поводу актов</del>
  </li>
  <li>
    <ins cite="https://our-cool-customers.com/reports/upload">Выгрузить отчёт в сервис заказчика</ins>
  </li>
  <li>
    <ins datetime="2021-12-21T15:00Z">Ещё раз позвонить подрядчику и напомнить про акты</ins>
  </li>
</ul>;
