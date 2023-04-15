//# .value
// Содержит значение текстового поля. Список с вариантами ответов — это поле select.

const button = document.querySelector('.button');
const form = document.forms.myForm;
const input = form.elements.myInput;
const textArea = form.elements.myTextArea;

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(input.value); // значение input
  console.log(textArea.value); // значение textArea
});

const select = document.forms.myForm.elements.mySelect;
button.addEventListener('click', function (evt) {
 evt.preventDefault();
  console.log(select.value); // попадёт то, что выбрано
});