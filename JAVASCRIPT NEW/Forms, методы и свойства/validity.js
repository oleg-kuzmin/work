//# validity
// В JS есть ValidityState — встроенный объект для сверки данных. Он присутствует в каждом поле ввода и тесно связан с его HTML-атрибутами. Само свойство называется validity. Свойство validity — объект из 11 свойств с булевыми значениями.

//# вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

//# слушатель события input
formInput.addEventListener('input', function (evt) {
  // Выведем в консоль значение свойства validity.valid поля ввода, на котором слушаем событие input
  console.log(evt.target.validity.valid);
});

//# значения
//* badInput: false
//* customError: false
//* patternMismatch: false
//* rangeOverflow: false
//* rangeUnderflow: false
//* stepMismatch: false

//* tooLong: false
// Всегда false, потому что в современных браузерах невозможно ввести больше символов, чем указано в maxlength

//* tooShort: true
// Принимает true, когда количество символов не превышает значение атрибута minlength.

//* typeMismatch: true
// Принимает true, когда ввели неправильные значения данных для атрибута type.

//* valid: false
// Итоговое решение проверки данных. Если во всех других 10 свойствах значения корректны - valid приобретает значение true.

//* valueMissing: false
// Принимает true, когда обязательное поле пустое
