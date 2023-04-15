//# validity
// В JS есть ValidityState — встроенный объект для сверки данных. Он присутствует в каждом поле ввода и тесно связан с его HTML-атрибутами. Само свойство называется validity.

//# вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

//# слушатель события input
formInput.addEventListener('input', function (evt) {
  // Выведем в консоль значение свойства validity.valid поля ввода, на котором слушаем событие input
  console.log(evt.target.validity.valid);
});

//# значения
//* valueMissing
// Принимает true, когда обязательное поле пустое

//* typeMismatch
// Принимает true, когда ввели неправильные значения данных для атрибута type.
// Это круто работает в связке с type="email" и type="url";

//* tooLong
// Всегда false, потому что в современных браузерах невозможно ввести больше символов, чем указано в maxlength;

//* tooShort
// Принимает true, когда количество символов не превышает значение атрибута minlength.

//* valid
// Итоговое решение проверки данных. Если во всех других 10 свойствах значения корректны, поле ввода валидно и свойство valid приобретает значение true.
