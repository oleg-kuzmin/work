//# .checked
// Содержит булево значение радиокнопки или чекбокса.

const button = document.querySelector('.button');
const checkbox = document.forms.myForm.elements.myCheckbox;

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(checkbox.checked); // true или false
});
