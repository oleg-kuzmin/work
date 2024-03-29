//# Атрибут as (ТИП ЗАГРУЖАЕМОГО КОНТЕНТА)
/*
- Позволяет указать тип загружаемого контента. Благодаря ему мы помогаем браузеру правильно расставлять приоритеты и планировать загрузку.
- as стоит применять, если указан атрибут rel="preload" или rel="prefetch".
- Атрибут as используется только для запросов предварительной загрузки.
*/

//# Пример
<head>
  <link as="style" rel="preload" href="style.css" />
</head>;

//# Значения
//* as="style"
// Для таблиц стилей.

//* as="script"
// Для скриптов.

//* as="font"
// Для шрифтов.

//* as="fetch"
// для ресурсов, загруженных с помощью fetch() или XMLHttpRequest.
