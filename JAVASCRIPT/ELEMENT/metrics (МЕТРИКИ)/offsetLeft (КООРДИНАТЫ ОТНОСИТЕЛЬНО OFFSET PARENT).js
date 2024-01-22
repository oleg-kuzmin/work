//# offsetLeft (КООРДИНАТЫ ОТНОСИТЕЛЬНО OFFSET PARENT)
// Свойства offsetLeft/offsetTop содержат координаты x/y относительно верхнего левого угла offsetParent.

//# Возвращает
//* Число - координата x относительно верхнего левого угла offsetParent.

//# Пример
<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px"></div>
  </article>
</main>;

console.log(example.offsetParent.id); // "main"
console.log(example.offsetLeft); // 180
console.log(example.offsetTop); // 180
