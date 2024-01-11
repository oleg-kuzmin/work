//# Атрибут list (СВЯЗЫВАЕТ ЭЛЕМЕНТ С DATALIST)
/*
- Перед использованием списка подсказок элемент <datalist> нужно связать с элементом <input> через атрибут list.

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
<input list="fruits" />;
<datalist id="fruits">
  <option value="Банан" />
  <option value="Арбуз" />
  <option value="Киви" />
</datalist>;
