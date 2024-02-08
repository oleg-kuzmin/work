//# element.offsetTop (КООРДИНАТЫ ОТНОСИТЕЛЬНО OFFSET PARENT)
/*
- Свойства offsetLeft/offsetTop содержат координаты x/y относительно верхнего левого угла offsetParent.
- Все свойства доступны только для чтения, кроме scrollLeft/scrollTop, изменение которых заставляет браузер прокручивать элемент.
*/

//# Возвращает
//* Число - координата y относительно верхнего левого угла offsetParent.

//# Пример
<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px"></div>
  </article>
</main>;

console.log(example.offsetParent.id); // "main"
console.log(example.offsetLeft); // 180
console.log(example.offsetTop); // 180
