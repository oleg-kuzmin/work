//# .reset() (Сбрасывает поля формы)

const form = document.forms.myForm;

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  // обрабатываем форму
  form.reset(); // сбрасываем все поля
});
