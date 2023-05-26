//# .setAttribute() (Устанавливает атрибут)
/*
- Метод setAttribute принимает на вход два аргумента: имя атрибута, значение которого мы хотим задать, и само значение.
- Чтобы сделать чекбокс неактивным, нужно передать методу setAttribute два аргумента: disabled и любой другой. Согласно спецификации у setAttribute есть два обязательных параметра, но в то же время disabled не предполагает никакого значения. Получается, чтобы метод сработал, второй аргумент необходим, но его значение неважно.
*/

//# пример
bigAndRed.setAttribute('lang', 'ru');
сonsole.log(bigAndRed.hasAttribute('lang')); //true

//* Если передать значение другого типа, оно всё равно будет приведено к строке.
disabledCheckbox.setAttribute('disabled', true);
disabledCheckbox.setAttribute('disabled', 'Значение этого аргумента может быть любым');
disabledCheckbox.setAttribute('disabled', 'Мы передаём его, только чтобы метод отработал');
disabledCheckbox.setAttribute('disabled', false); // и даже этот вызов сработает

//* передача стиля
hint.setAttribute(
  'style',
  `position: absolute;
  top: ${event.pageY}px;
  left: ${event.pageX}px;
  display: block;
  background-color: rgba(255, 204, 0, 0.5)`
);
