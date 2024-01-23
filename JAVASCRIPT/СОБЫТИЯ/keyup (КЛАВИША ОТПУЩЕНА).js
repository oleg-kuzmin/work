//# keyup (КЛАВИША ОТПУЩЕНА)
// Клавиша отпущена. Сработает на любой клавише, но только когда её отпустят.

//# Пример
//* onkeyup
document.onkeyup = function () {
  console.log('Отпустили клавишу');
};

//* addEventListener
document.addEventListener('keyup', function () {
  console.log('Отпустили клавишу');
});
