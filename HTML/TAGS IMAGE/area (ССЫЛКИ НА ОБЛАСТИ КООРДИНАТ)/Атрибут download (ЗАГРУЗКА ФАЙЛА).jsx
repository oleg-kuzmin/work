//# Атрибут download (ЗАГРУЗКА ФАЙЛА) (download: загрузка)
/*
- Если кликнуть по такой ссылке, браузер предложит пользователю скачать то, что по ней находится.
- Это может быть файл или другая страница — главное, чтобы они находились на том же домене, что и ссылка.
*/

//# Пример
<map name="doka">
  <area shape="rect" coords="47,4,319,64" href="/html/" target="_blank" alt="HTML" />
  <area shape="rect" coords="46,69,318,129" href="/css/" target="_blank" alt="CSS" />
  <area shape="rect" coords="46,133,318,193" href="/js/" target="_blank" alt="JS" />
</map>;
<img usemap="#doka" />;

//# Значения
//* download
// Начнет загрузку файла "about.txt" по адресу "./about.txt"

//* download="фотки.zip"
// Начнет загрузку файла "фотки.zip" по адресу "./about". Пользователь сможет изменить название при скачивании.
