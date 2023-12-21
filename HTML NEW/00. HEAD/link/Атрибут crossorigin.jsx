//# Атрибут crossorigin
/*
- Указывает должен ли браузер отправлять кросс-доменные запросы с заголовками CORS при загрузке файлов.
- При использовании атрибута crossorigin в теге link, браузер будет проверять, поддерживает ли сервер заголовки CORS для запрашиваемого ресурса. Если сервер не поддерживает CORS или не возвращает нужные заголовки, то браузер может блокировать загрузку ресурса.
- В современных браузерах атрибут crossorigin обычно необязателен для большинства типов ресурсов, таких как стили CSS, изображения или шрифты. Однако, если вы загружаете скрипт с другого домена, то использование атрибута crossorigin может быть полезным для обеспечения безопасности и корректной работы скрипта.
*/

//# Пример
<head>
  <link href="style.css" rel="stylesheet" crossorigin="anonymous" />
</head>;

//# Значения
//* crossorigin="anonymous"
// Cross-origin запрос выполняется без отправки учётных данных, таких как куки, заголовки аутентификации и клиентские сертификаты. Это может быть полезно для загрузки статических файлов, например изображений или шрифтов.

//* crossorigin="use-credentials"
// Cross-origin запрос выполняется с отправкой учётных данных, если они доступны. Например, если вы загружаете стиль CSS с другого origin и хотите, чтобы браузер отправлял куки для аутентификации, вы можете использовать это значение.
