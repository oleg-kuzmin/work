//# validity (ОБЪЕКТ С ДАННЫМИ О ВАЛИДАЦИИ)
// В JS есть ValidityState — встроенный объект для сверки данных. Он присутствует в каждом поле ввода и тесно связан с его HTML-атрибутами. Само свойство называется validity. Свойство validity — объект из 11 свойств с булевыми значениями.

//# Пример
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
formInput.addEventListener('input', function (evt) {
  console.log(evt.target.validity.valid);
});

//# Все свойства объекта validity
//* valid: false
// Итоговое решение проверки данных. Если во всех других 10 свойствах значения корректны - valid приобретает значение true.

//* tooLong: false
// Всегда false, потому что в современных браузерах невозможно ввести больше символов, чем указано в maxlength

//* tooShort: true
// Принимает true, когда количество символов не превышает значение атрибута minlength.

//* typeMismatch: true
// Принимает true, когда ввели неправильные значения данных для атрибута type.

//* valueMissing: false
// Принимает true, когда обязательное поле пустое

//* badInput: false
//* customError: false
//* patternMismatch: false
//* rangeOverflow: false
//* rangeUnderflow: false
//* stepMismatch: false
