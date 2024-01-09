//# link (ВНЕШНИЙ ФАЙЛ) (link: ссылка)
/*
- Позволяет загружать на страницу содержимое из внешнего файла.
- Два наиболее часто встречающихся случая:
1. Изображение, которое будет отображено в качестве фавиконки на вашем сайте;
2. Внешняя ссылка на шрифт, который применяется на сайте.
*/

//# Пример
//* Самый простой пример, как подключить файл со стилями:
<head>
  <link href="style.css" rel="stylesheet" />
</head>;

//* Можно сделать разные версии сайта, чтобы пользователь мог выбрать удобную для него, например, версию для слабовидящих. Тогда для каждой версии можно подключить свой файл стилей::
<head>
  <link href="default.css" rel="stylesheet" title="Default Style" />
  <link href="accessibility.css" rel="alternate stylesheet" title="Accessibility" />
</head>;

//* Вот как можно использовать разные фавиконки для разных экранов и устройств:
<head>
  {/* На iPad третьего поколения с Retina-дисплеем: */}
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon144.png" />

  {/* iPhone с Retina-дисплеем: */}
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png" />

  {/* iPad первого и второго поколений: */}
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png" />

  {/* iPhone, iPod Touch и Android 2.1+ устройства без Retina дисплея: */}
  <link rel="apple-touch-icon-precomposed" href="favicon57.png" />

  {/* стандартная фавиконка */}
  <link rel="icon" href="favicon32.png" />
</head>;

//* Страница может выглядеть по-разному на разных устройствах. Для этого подключим разные стили, в зависимости от устройства и размера экрана:
<head>
  <link href="print.css" rel="stylesheet" media="print" />
  <link href="mobile.css" rel="stylesheet" media="all" />
  <link href="desktop.css" rel="stylesheet" media="screen and (min-width: 600px)" />
  <link href="highres.css" rel="stylesheet" media="screen and (min-resolution: 300dpi)" />
</head>;
