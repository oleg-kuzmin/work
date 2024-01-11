//# datalist (СПИСОК ПОДСКАЗОК ДЛЯ INPUT) (data list: список данных)
/*
- Элемент <datalist> — это источник предложений, то есть такой элемент, который содержит предопределённые варианты выбора для пользователя. В основном за варианты выбора опций выступают элементы <option>.
- У тега по умолчанию есть роль listbox.
- Перед использованием элемент <datalist> нужно связать с элементом <input> через атрибут list:
- Элемент <datalist> не сработает, если между элементами <input> и <datalist> будет любой другой элемент c id. Даже если это сам <input> со значением, которое равно значению атрибута list элемента <input>.
- Элемент <datalist> не отображается браузерами, его значение display по умолчанию none. <datalist> просто содержит набор каких-то предопределённых вами вариантов выбора — опций. Их можно будет выбрать из выпадающего списка после того, как свяжите их с <input>. Эти значения будут по-разному отображаться в зависимости от значения атрибута type у <input>.
- Элемент <datalist> можно связать с элементом <input> только через атрибут list, но этот атрибут поддерживается не всеми интерактивными элементами.

- Элемент <input> не будут работать с элементом <datalist>, если у <input> одно из следующих значений атрибута type:
1. hidden;
2. password;
3. checkbox;
4. radio;
5. file;
6. submit;
7. image;
8. reset;
9. button.
*/

//# Пример
<form>
  <label for="my-browser">Выберите браузер из списка:</label>
  <input type="text" list="browsers" id="my-browser" name="my-browser" />
  <datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Yandex Browser" />
    <option value="Opera" />
    <option value="Safari" />
    <option value="Microsoft Edge" />
  </datalist>
</form>;
