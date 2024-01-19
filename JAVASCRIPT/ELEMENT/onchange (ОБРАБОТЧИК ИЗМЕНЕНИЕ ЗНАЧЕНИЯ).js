//# element.onchange (ОБРАБОТЧИК ИЗМЕНЕНИЕ ЗНАЧЕНИЯ)
/*
- Этот обработчик срабатывает, когда пользователь выбирает новое значение из выпадающего списка.
- Срабатывает, если значение поля ввода изменилось и пользователь закончил ввод. Например, если пользователь передвинул ползунок и отпустил его. Или ввёл что-то в текстовое поле и убрал из него курсор.
*/

//# Пример
select.onchange = function () {
  // Выводим в консоль новое значение
  console.log(select.value);
};
