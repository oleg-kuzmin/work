//# mousedown (НАЖАТИЕ НА ЛЮБУЮ КНОПКУ)
// Возникает при щелчке мышью, когда кнопка в нижнем положении. События mousedown и mouseup срабатывают на все кнопки мыши: левую, правую и нажатие на колёсико. Они полезны для создания Drag'n'Drop — интерфейса, в котором элемент можно схватить и перетащить на другое место.

//# Пример
//* onmousedown
button.onmousedown = function () {
  console.log('Клик!');
};

//* addEventListener
button.addEventListener('mousedown', function () {
  console.log('Клик!');
});
