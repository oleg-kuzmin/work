//# .forms
// Получить список форм (псевдомассив) на странице. Свойство только для чтения, напрямую перезаписать его нельзя.

//# пример
const collection = document.forms; // псевдомассив форм
const myForm = document.forms.formName; // поиск по имени
const element = document.forms.formName.element; // элемент формы
document.forms.formName.elements; // все элементы формы

//# reset()
const form = document.forms.myForm;
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  form.reset(); // сбрасываем все поля
});

//# submit()
form.addEventListener('input', function (evt) {
  if (input.length === 4) {
    form.submit();
  }
});
form.addEventListener('submit', function (evt) {
  // обработка события submit
});
