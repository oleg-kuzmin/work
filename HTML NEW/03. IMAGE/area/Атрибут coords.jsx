//# Атрибут coords
// Задаёт координаты области. Для круга проще всего: x, y, R, где R — радиус круга, для прямоугольника формат x1, y1, x2, y2, а для произвольной формы x1, y1, x2, y2, ... , xn, yn. Поскольку у произвольной формы может быть много точек, будьте готовы к длинному коду.

//# Пример
<>
  <map name="doka">
    <area shape="rect" coords="47,4,319,64" href="/html/" target="_blank" alt="HTML" />
    <area shape="rect" coords="46,69,318,129" href="/css/" target="_blank" alt="CSS" />
    <area shape="rect" coords="46,133,318,193" href="/js/" target="_blank" alt="JS" />
  </map>
  <img usemap="#doka" />
</>;
