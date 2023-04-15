//# keydown
// Клавиша нажата. Сработает на любой клавише в тот момент, когда на неё нажмут. В таких случаях говорят, что клавиша «в нижнем положении».

//# пример
<input class="text-field" placeholder="Введите текст"></input>;
const input = document.querySelector('.text-field');

input.addEventListener('keydown', function () {
  console.log('Я возникаю, когда печатают в текстовом поле.');
});
