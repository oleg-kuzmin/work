//# element.offsetParent (БЛИЖАЙШИЙ РОДИТЕЛЬ ЭЛЕМЕНТА)
/*
- В свойстве offsetParent находится предок элемента, который используется внутри браузера для вычисления координат при рендеринге.

- То есть, ближайший предок, который удовлетворяет следующим условиям:
1. Является CSS-позиционированным (CSS-свойство position равно absolute, relative, fixed или sticky),
2. или <td>, <th>, <table>,
3. или <body>.

Существует несколько ситуаций, когда offsetParent равно null:
- Для скрытых элементов (с CSS-свойством display: none или когда его нет в документе).
- Для элементов <body> и <html>.
- Для элементов с position: fixed.
*/

//# Возвращает
//* DOM-элемент, который соответствует критериям поиска. || null - если совпадений нет.

//# Пример
<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px"></div>
  </article>
</main>;

console.log(example.offsetParent.id); // main
console.log(example.offsetLeft); // 180 (обратите внимание: число, а не строка "180px")
console.log(example.offsetTop); // 180
