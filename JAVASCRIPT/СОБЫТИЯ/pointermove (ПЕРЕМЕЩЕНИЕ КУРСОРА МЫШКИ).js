//# pointermove (ПЕРЕМЕЩЕНИЕ КУРСОРА МЫШКИ)
// Возникает при движении мышки в любом месте.

//# Пример
//* onpointermove
button.onpointermove = function () {
  console.log('Двигаемся');
};

//* addEventListener
button.addEventListener('pointermove', function () {
  console.log('Двигаемся');
});
