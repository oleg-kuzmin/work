//# contextmenu (КЛИК ПРАВОЙ КНОПКОЙ МЫШКИ)
// Возникает при щелчке правой кнопкой, когда она в нижнем положении. Как mousedown, но для одной правой кнопки.

//# Пример
//* onclick
button.contextmenu = function () {
  console.log('Клик!');
};

//* addEventListener
button.addEventListener('contextmenu', function () {
  console.log('Клик!');
});
