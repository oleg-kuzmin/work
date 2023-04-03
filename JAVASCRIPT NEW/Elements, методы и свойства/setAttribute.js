//# .setAttribute()
// Метод setAttribute принимает на вход два аргумента: имя атрибута, значение которого мы хотим задать, и само значение.
bigAndRed.setAttribute("lang", "ru");
сonsole.log(bigAndRed.hasAttribute("lang")); //true

// Оба аргумента — строки. Если передать значение другого типа, оно всё равно будет приведено к строке.
disabledCheckbox.setAttribute("disabled", true); // Делаем чекбокс неактивным.

// Чтобы сделать чекбокс неактивным, нужно передать методу setAttribute два аргумента: disabled и любой другой. Согласно спецификации у setAttribute есть два обязательных параметра, но в то же время disabled не предполагает никакого значения. Получается, чтобы метод сработал, второй аргумент необходим, но его значение неважно:
disabledCheckbox.setAttribute("disabled", true);
disabledCheckbox.setAttribute("disabled", "Значение этого аргумента может быть любым");
disabledCheckbox.setAttribute("disabled", "Мы передаём его, только чтобы метод отработал");
disabledCheckbox.setAttribute("disabled", false); // и даже этот вызов сработает
