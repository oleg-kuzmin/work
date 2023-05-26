//# .checked (Проверка выбора checkbox, radio)
// Это свойство есть только у чекбоксов и радиокнопок. Оно содержит true, если чекбокс отмечен, и false — если нет.

//# пример
const button = document.querySelector('.button');
const checkbox = document.forms.myForm.elements.myCheckbox;

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(checkbox.checked); // true или false
});
