//# form.reset() (СБРАСЫВАЕТ ПОЛЯ ФОРМЫ)
// Сбрасываем(очищаем) все поля формы.

//# Синтаксис
form.reset();

//# Возвращает
//* NONE (undefined).

//# Пример
const form = document.forms.myForm;
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  form.reset();
});
