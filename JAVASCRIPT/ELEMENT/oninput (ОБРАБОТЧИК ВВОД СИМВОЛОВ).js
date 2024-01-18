//# element.oninput (ОБРАБОТЧИК ВВОД СИМВОЛОВ)
// Инструкции внутри обработчика oninput выполняются каждый раз, когда значение в поле ввода меняется.

//# Пример
const textarea = document.querySelector('textarea');

textarea.oninput = function () {
  console.log(textarea.value);
};
