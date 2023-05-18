/*
1. Сделать пустой span (в него будем добавлять текст из validationMessage)
2. Добавить id для input (id="email-input")
3. Добавить уникальный class для span (class="email-input-error)
*/

//# настройка валидации
const validateConfig = {
  buttonSubmit: '.popup__button-save',
  buttonSubmitInvalid: 'popup__button-save_disabled',
  input: '.popup__input',
  inputInvalid: 'popup__input_type_error',
  spanInvalid: 'popup__input-error_active',
  form: '.popup__form',
  pattern: /^([а-яА-ЯёЁa-zA-Z]|\s|-|\n)+$/,
  patternMessage: 'Допустимы только латинские буквы, кириллические буквы, знаки дефиса или пробелы',
};

//# 1. Функция, которая найдет и переберет все формы на странице
const enableValidation = () => {
  //* найдём все формы, сделаем из них массив
  const formList = Array.from(document.forms);

  //* Переберём полученную коллекцию и вызовем функцию setEventListeners, передав ей элемент формы
  formList.forEach(form => {
    setEventListeners(form);
  });
};

//# 2. Функция, которая принимает параметром форму и добавляет её полям нужные обработчики
const setEventListeners = form => {
  //* находим все поля input внутри формы с указанным классом, сделаем из них массив
  const inputList = Array.from(form.querySelectorAll(validateConfig.input));

  //* найдём в форме кнопку submit
  const buttonSubmit = form.querySelector(validateConfig.buttonSubmit);

  //* проверим состояние кнопки submit
  checkButtonSubmit(inputList, buttonSubmit);

  //* обойдём все элементы массива input и каждому добавим обработчик
  inputList.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input);
      checkButtonSubmit(inputList, buttonSubmit);
    });
  });
};

//# 3. Функция принимает массив полей ввода и submit, состояние которого нужно менять
const checkButtonSubmit = (inputList, buttonSubmit) => {
  if (hasInvalidInput(inputList)) {
    disableButtonSubmit(buttonSubmit);
  } else {
    enableButtonSubmit(buttonSubmit);
  }
};

//# 4. Функция выключает submit
const disableButtonSubmit = button => {
  button.disabled = true;
  button.classList.add(validateConfig.buttonSubmitInvalid);
};

//# 5. Функция включает submit
const enableButtonSubmit = button => {
  button.disabled = false;
  button.classList.remove(validateConfig.buttonSubmitInvalid);
};

//# 6. Функция, которая проверяет валидность массива всех полей
const hasInvalidInput = inputList => {
  return inputList.some(inputElement => {
    if (!inputElement.validity.valid || (!validateConfig.pattern.test(inputElement.value) && inputElement.type !== 'url')) {
      return true;
    } else return false;
  });
};

//# 7. Функция, которая проверяет валидность поля
const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else if (!validateConfig.pattern.test(input.value) && input.type !== 'url') {
    showInputError(form, input, validateConfig.patternMessage);
  } else {
    hideInputError(form, input);
  }
};

//# 8. Функция, которая добавляет класс с ошибкой
const showInputError = (form, input, errorMessage) => {
  const span = form.querySelector(`.${input.name}-error`);
  input.classList.add(validateConfig.inputInvalid);
  span.textContent = errorMessage;
  span.classList.add(validateConfig.spanInvalid);
};

//# 9. Функция, которая удаляет класс с ошибкой
const hideInputError = (form, input) => {
  const span = form.querySelector(`.${input.name}-error`);
  input.classList.remove(validateConfig.inputInvalid);
  span.textContent = '';
  span.classList.remove(validateConfig.spanInvalid);
};

//# 10. Функция, сброс по умолчанию
const resetForm = node => {
  const currentSubmitButton = node.querySelector(validateConfig.buttonSubmit);
  const currentForm = node.querySelector(validateConfig.form);
  const currentInputList = Array.from(currentForm.querySelectorAll(validateConfig.input));
  disableButtonSubmit(currentSubmitButton);
  currentInputList.forEach(input => {
    hideInputError(currentForm, input);
  });
  currentForm.reset();
};

export { enableValidation, resetForm };
