//# .checked (Проверка выбора checkbox, radio)
// Это свойство есть только у чекбоксов и радиокнопок. Оно содержит true, если чекбокс отмечен, и false — если нет.

//# пример
<form name="myForm">
  <input type="checkbox" name="myCheckbox" />
  <button class="button">Отправить</button>
</form>;

const button = document.querySelector('.button');
const checkbox = document.forms.myForm.elements.myCheckbox;

// по нажатию на кнопку выведем в консоль значения свойства checked чекбокса
button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(checkbox.checked); // true или false
});
