//# element.value (ЗНАЧЕНИЕ ПОЛЯ ВВОДА)
// Значение поля ввода. Оно есть у всех элементов input и textarea.

//# Возвращает
//* Строка с значением поля ввода.

//# Пример
//* input, textarea
<form name="myForm">
  <input type="text" name="myInput" />
  <textarea name="myTextArea"></textarea>
  <button class="button">Отправить</button>
</form>;

const button = document.querySelector('.button');
const form = document.forms.myForm;
const input = form.elements.myInput;
const textArea = form.elements.myTextArea;

// по нажатию на кнопку выведем в консоль значения текстовых полей
button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(input.value); // значение input
  console.log(textArea.value); // значение textArea
});

//* select
<form name="myForm">
  <select name="mySelect">
    <option value="right">Направо</option>
    <option value="left">Налево</option>
    <option value="forward">Прямо</option>
  </select>
  <button class="button">Submit</button>
</form>;

const button2 = document.querySelector('.button');
const select = document.forms.myForm.elements.mySelect;

// по нажатию на кнопку выведем в консоль значения свойства value выпадающего списка
button2.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(select.value); // попадёт то, что выбрано
});
