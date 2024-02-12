//# keypress (НАЖАТИЕ НА КЛАВИШУ НЕ-МОДИФИКАТОР)
// Нажатие на клавишу. Cработает при нажатии, но проигнорирует клавиши-модификаторы: alt, ctrl, shft и win — на Windows, и control, option, shift и command — на macOS.

//# Пример
//* onkeypress
document.onkeypress = function () {
  console.log('Нажали клавишу');
};

//* addEventListener
document.addEventListener('keypress', function () {
  console.log('Нажали клавишу');
});
