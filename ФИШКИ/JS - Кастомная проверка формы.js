/*
1. Сделать пустой span (в него будем добавлять текст из validationMessage)
2. Добавить id для input (id="email-input")
3. Добавить уникальный class для span (class="email-input-error)
*/

//* html
<form class="form" novalidate>
  <label class="form__field">
    Введите адрес электронной почты
    <input id="email-input" class="form__input" type="email" placeholder="Email" required />
    <span class="email-input-error form__input-error"></span>
  </label>
  <button class="form__submit">Войти</button>
</form>;

//* 1 — Функция, которая найдёт и переберёт все формы на странице
const enableValidation = () => {
  // найдём все формы с указанным классом в DOM, сделаем из них массив
  const formList = Array.from(document.querySelectorAll('.form'));
  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    // для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
    setEventListeners(formElement);
  });
};

//* 2 — Функция, которая примет параметром элемент формы и добавит её полям нужные обработчики
// 1) formElement — html-элемент формы
const setEventListeners = (formElement) => {
  // находим все поля внутри формы, сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  // найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.form__submit');
  // обойдём все элементы полученной коллекции
  toggleButtonState(inputList, buttonElement);
  // вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      // вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//* 3 — Вызовем функцию
enableValidation();

//* Функция, которая проверяет валидность массива всех полей
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // если поле не валидно, колбэк вернёт true, Обход массива прекратится и вся функция вернёт true
    return !inputElement.validity.valid;
  });
};

//* Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.disabled = true;
    buttonElement.classList.add('form__submit_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.disabled = false;
    buttonElement.classList.remove('form__submit_inactive');
  }
};

//* 4 — Функция, которая проверяет валидность поля
// функция принимает сразу два параметра:
// 1) formElement — html-элемент формы, в которой находится проверяемое поле ввода. Он нужен для поиска элемента ошибки в форме.
// 2) inputElement — проверяемое поле ввода.
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // если inputElement не валидный вызовем функцию showInputError
    // 1) formElement — html-элемент формы
    // 2) inputElement — проверяемое поле ввода
    // 3) inputElement.validationMessage — текст ошибки
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // иначе вызовем функцию hideInputError:
    // 1) formElement — html-элемент формы
    // 2) inputElement — проверяемое поле ввода
    hideInputError(formElement, inputElement);
  }
};

//* 5 — Функция, которая добавляет класс с ошибкой, передадим текст ошибки вторым параметром
// 1) formElement — html-элемент формы
// 2) inputElement — проверяемое поле ввода
// 3) errorMessage — текст ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  // находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // добавим класс для невалидного input
  inputElement.classList.add('form__input_type_error');
  // заменим содержимое span с ошибкой на переданный параметр errorMessage
  errorElement.textContent = errorMessage;
  // добавим класс для показа элемента текста с ошибкой
  errorElement.classList.add('form__input-error_active');
};

//* 6 — Функция, которая удаляет класс с ошибкой
// 1) formElement — html-элемент формы
// 2) inputElement — проверяемое поле ввода
const hideInputError = (formElement, inputElement) => {
  // находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // удалим класс для невалидного input
  inputElement.classList.remove('form__input_type_error');
  // удалим класс для показа элемента текста с ошибкой
  errorElement.classList.remove('form__input-error_active');
  // очистим текст ошибки
  errorElement.textContent = '';
};





//! ПРОВЕРИТЬ
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('form__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('form__input-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('form__input_type_error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('button_inactive');
//   } else {
//     buttonElement.classList.remove('button_inactive');
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.form__input'));
//   const buttonElement = formElement.querySelector('.form__submit');
//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });

//     const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
//     fieldsetList.forEach((element) => {
//       setEventListeners(element);
//     });
//   });
// };

// enableValidation();