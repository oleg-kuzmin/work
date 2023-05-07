/*
1. Сделать пустой span (в него будем добавлять текст из validationMessage)
2. Добавить id/name для input (id="email-input") или (name="email-input")
3. Добавить уникальный class для span (class="email-input-error)
*/

//# html
<form class="form" novalidate>
  <label class="form__field">
    Введите адрес электронной почты
    <input id="email-input" class="form__input" type="email" placeholder="Email" required />
    <span class="email-input-error form__input-error"></span>
  </label>
  <button class="form__submit">Войти</button>
</form>;

//# настройка валидации
const validateConfig = {
  buttonSubmit: '.popup__button-save',
  buttonSubmitInvalid: 'popup__button-save_disabled',
  input: '.popup__input',
  inputInvalid: 'popup__input_type_error',
  spanInvalid: 'popup__input-error_active',
  pattern: /^([а-яА-ЯёЁa-zA-Z]|\s|-|\n)+$/,
  patternMessage: 'Допустимы только латинские буквы, кириллические буквы, знаки дефиса или пробелы',
};

//# 1 — Функция, которая найдет и переберет все формы на странице
const enableValidation = () => {
  //* найдём все формы, сделаем из них массив
  const formList = Array.from(document.forms);

  //* Переберём полученную коллекцию
  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    //* вызовем функцию setEventListeners, передав ей элемент формы
    setEventListeners(form);
  });
};

//# 2 — Функция, которая примет параметром элемент формы и добавит её полям нужные обработчики
const setEventListeners = (form) => {
  //* находим все поля input внутри формы с указанным классом, сделаем из них массив
  const inputList = Array.from(form.querySelectorAll(validateConfig.input));

  //* найдём в форме кнопку submit
  const buttonSubmit = form.querySelector(validateConfig.buttonSubmit);

  //* проверим состояние кнопки submit
  checkButtonSubmit(inputList, buttonSubmit);

  //* обойдём все элементы массива input и каждому добавим обработчик события
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input);
      checkButtonSubmit(inputList, buttonSubmit);
    });
  });
};

//# 3 - Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const checkButtonSubmit = (inputList, buttonSubmit) => {
  if (hasInvalidInput(inputList)) {
    // disableButtonSubmit(buttonSubmit);
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add(validateConfig.buttonSubmitInvalid);
  } else {
    // enableButtonSubmit(buttonSubmit);
    buttonSubmit.disabled = false;
    buttonSubmit.classList.remove(validateConfig.buttonSubmitInvalid);
  }
};

//# Функция выключает кнопку
const disableButtonSubmit = (button) => {
  button.disabled = true;
  button.classList.add(validateConfig.buttonSubmitInvalid);
};

//# Функция включает кнопку
const enableButtonSubmit = (button) => {
  button.disabled = false;
  button.classList.remove(validateConfig.buttonSubmitInvalid);
};

//# 4 - Функция, которая проверяет валидность массива всех полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    if (!inputElement.validity.valid || !validateConfig.pattern.test(inputElement.value)) {
      return true;
    } else return false;
  });
};

//# 5 — Функция, которая проверяет валидность поля
const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else if (!validateConfig.pattern.test(input.value)) {
    showInputError(form, input, validateConfig.patternMessage);
  } else {
    hideInputError(form, input);
  }
};

//# 6 — Функция, которая добавляет класс с ошибкой
const showInputError = (form, input, errorMessage) => {
  const span = form.querySelector(`.${input.id}-error`);
  input.classList.add(validateConfig.inputInvalid);
  span.textContent = errorMessage;
  span.classList.add(validateConfig.spanInvalid);
};

//# 7 — Функция, которая удаляет класс с ошибкой
const hideInputError = (form, input) => {
  const span = form.querySelector(`.${input.id}-error`);
  input.classList.remove(validateConfig.inputInvalid);
  span.classList.remove(validateConfig.spanInvalid);
  span.textContent = '';
};

export { enableValidation };
