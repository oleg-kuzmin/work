//# element.checked (ВЫБОР ЧЕКБОКСА, РАДИО)
// Это свойство есть только у чекбоксов и радиокнопок. Оно содержит true, если чекбокс отмечен, и false — если нет.

//# Возвращает
//* BOOLEAN-значeние отмеченной кнопки.

//# Пример
<form name="myForm">
  <input type="checkbox" name="myCheckbox" />
  <button class="button">Отправить</button>
</form>;

const button = document.querySelector('.button');
const checkbox = document.forms.myForm.elements.myCheckbox;

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(checkbox.checked); // true или false
});
