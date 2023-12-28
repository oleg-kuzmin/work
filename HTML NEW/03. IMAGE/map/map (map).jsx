//# map (map) (карта)
/*
- Тег <map> — это обёртка для тега <area>, он нужен для связи с картинкой.
- У тега <map> должен быть атрибут name с уникальным именем, на которое мы будем ссылаться в атрибуте usemap картинки. А внутри тега может быть сколько угодно <area> — они размечают на картинке области-ссылки.
- Поскольку тегов <area> может быть очень много, например на картинке с навигацией, без <map> пришлось бы связывать каждый <area> с единственной картинкой. К счастью, <map> служит удобной обёрткой, и ссылаться нужно только на него.
- Чтобы связь установилась верно, не забудьте поставить знак # перед именем внутри usemap.
*/

//# Пример
<>
  <map name="doka-label">
    <area shape="rect" coords="40,20,420,130" href="/html/" alt="Раздел HTML" />
  </map>
  <img src="/images/doka-map.svg" usemap="#doka-label" alt="Мордочка собаки" />;
</>;
