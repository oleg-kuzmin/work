//# area (area) (область)
/*
- С помощью тега <area> можно сделать красивую навигацию, разметив обычную картинку областями и указав для них ссылки.
- Тег <area> помещаем внутрь <map> и прописываем два обязательных атрибута: shape и coords, а также href, target, alt.
*/

//# Пример
<>
  <map name="doka">
    <area shape="rect" coords="47,4,319,64" href="/html/" target="_blank" alt="HTML" />
    <area shape="rect" coords="46,69,318,129" href="/css/" target="_blank" alt="CSS" />
    <area shape="rect" coords="46,133,318,193" href="/js/" target="_blank" alt="JS" />
  </map>
  <img usemap="#doka" />
</>;
