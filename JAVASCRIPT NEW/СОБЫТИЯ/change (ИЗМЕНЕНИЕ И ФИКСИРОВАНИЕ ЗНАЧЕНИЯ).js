//# change (ИЗМЕНЕНИЕ И ФИКСИРОВАНИЕ ЗНАЧЕНИЯ)
/*
- Событие change срабатывает, когда пользователь изменяет значение в <input>, <select> или <textarea> и фиксирует свои изменения.
- Фиксация изменения это когда пользователь закончил ввод, передвинул ползунок и отпустил его. Или ввёл что-то в текстовое поле и убрал из него курсор.
- Срабатывает когда значение поля изменено, но при условии снятия с него фокуса.
- Это событие лучше всего использовать при создании форм, когда не требуется постоянно взаимодействовать с каждым изменённым символом в поле ввода. Так же данное событие пригодится и при создании чекбоксов, полей выбора и т. п.

- События input и change похожи — оба помогают отслеживать изменения в полях ввода.
- Различие есть для текстовых полей ввода:
1. input — срабатывает при каждом изменении значения в поле;
2. change — срабатывает когда изменяемый элемент теряет фокус: например, при переходе к другому полю или клику на другую часть страницы.
*/

//# Пример
//* onchange
select.onchange = function () {
  console.log(select.value);
};

//* addEventListener
select.addEventListener('change', function (evt) {
  console.log(evt.target.value);
});
