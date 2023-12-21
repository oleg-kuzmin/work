//# Атрибут media
/*
- В зависимости от того, на каком устройстве открывают вашу страницу, можно применять разные стили к тексту или показывать разные иконки. Атрибут media указывает устройство, на котором работает тот или иной стиль.

*/

//# Пример
<head>
  <link media="screen and (max-width: 600px)" href="mobile.css" rel="stylesheet" />;
</head>;

//# Значения
//* media="screen and (max-width: 600px)"
// Стандартный медиа-запрос.

//* media="(prefers-color-scheme: light)"
// Атрибут media может определять, какая тема используется в ОС. Благодаря этому можно произвести небольшие оптимизации. Например, если у нас есть два разделённых CSS-файла, каждый из которых содержит стили для одной из тем, то приоритет при загрузке будет отдаваться именно тому файлу, который относится к выбранной системной теме.
