//# keydown (НАЖАТИЕ НА ЛЮБУЮ КЛАВИШУ)
// Клавиша нажата. Сработает на любой клавише в тот момент, когда на неё нажмут. В таких случаях говорят, что клавиша «в нижнем положении».

//# Пример
//* onkeydown
document.onkeydown = function () {
  console.log('Нажали клавишу');
};

//* addEventListener
document.addEventListener('keydown', function () {
  console.log('Нажали клавишу');
});
