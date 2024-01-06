//# submit (Программная отправка формы)

const form = document.forms.myForm;
const input = form.elements.myInput;

form.addEventListener('input', function (evt) {
  // если введено четыре символа сгенерируем событие submit
  if (input.length === 4) {
    form.submit();
  }
});

form.addEventListener('submit', function (evt) {
  // обработка события submit
});
