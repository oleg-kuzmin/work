//# mouseMove (ДВИЖЕНИЕ МЫШКИ НАД ЭЛЕМЕНТОМ)
// Возникает при каждом движении мыши над элементом.

//# Пример
//* onmousemove
button.onmousedown = function () {
  console.log('Двигаемся');
};

//* addEventListener
button.addEventListener('mousemove', function () {
  console.log('Двигаемся');
});
