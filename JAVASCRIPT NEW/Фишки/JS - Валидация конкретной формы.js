/*
1. Сделать пустой span (в него будем добавлять текст из validationMessage)
2. Добавить id для input (id="email-input")
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
  form: '.popup__form',
  buttonSubmit: '.popup__button-save',
  buttonSubmitInvalid: 'popup__button-save_disabled',
  input: '.popup__input',
  inputInvalid: 'popup__input_type_error',
  spanInvalid: 'popup__input-error_active',
};

//# 1 — Функция, которая найдет и переберет все формы на странице
const enableValidation = () => {
  //* найдём все формы с указанным классом в DOM, сделаем из них массив
  const formList = Array.from(document.querySelectorAll(validateConfig.form));

  //* Переберём полученную коллекцию
  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    //* при необходимости можно выделить отдельно fieldsetы
    const fieldsetList = Array.from(form.querySelectorAll('.form__set'));
    fieldsetList.forEach((element) => {
      setEventListeners(element);
    });

    //* или для каждой формы отдельно вызовем функцию setEventListeners, передав ей элемент формы
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
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add(validateConfig.buttonSubmitInvalid);
  } else {
    buttonSubmit.disabled = false;
    buttonSubmit.classList.remove(validateConfig.buttonSubmitInvalid);
  }
};

//# 4 - Функция, которая проверяет валидность массива всех полей
const hasInvalidInput = (inputList) => {
  //* проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    //* если поле не валидно, колбэк вернёт true, обход массива прекратится и вся функция вернёт true
    return !inputElement.validity.valid;
  });
};

//# 5 — Функция, которая проверяет валидность поля
const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
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
