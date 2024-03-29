//# Атрибут name (ССЫЛКА НА USEMAP ДЛЯ IMG)
// У тега <map> должен быть атрибут name с уникальным именем, на которое мы будем ссылаться в атрибуте usemap картинки. А внутри тега может быть сколько угодно <area> — они размечают на картинке области-ссылки.

//# Пример
<map name="map-name">
  <area shape="rect" coords="40,20,420,130" href="/html/" alt="Раздел HTML" />
</map>;
<img src="doka-map.svg" usemap="#map-name" alt="Мордочка собаки" />;
