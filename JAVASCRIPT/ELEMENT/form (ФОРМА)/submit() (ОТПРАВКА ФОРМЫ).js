//# submit() (ОТПРАВКА ФОРМЫ)
// Программная отправка формы с помощью метода.

//# Синтаксис
form.submit();

//# Пример
input.addEventListener('input', function () {
  // если введено четыре символа сгенерируем событие submit
  if (input.length === 4) {
    form.submit();
  }
});

form.addEventListener('submit', function () {
  // обработка события submit
});
