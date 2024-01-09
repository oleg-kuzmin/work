//# element.onsubmit (ОБРАБОТЧИК ONSUBMIT)
const someForm = document.querySelector('.some-form');

someForm.onsubmit = function () {
  console.log('Форма отправлена!');
};
