//# Атрибут readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ)
/*
- Атрибут readonly добавляется полям формы, которые пользователь не сможет редактировать. Они будут доступны только для чтения.
- Атрибут readonly булевый, его можно добавить со значением: readonly="readonly", или без него — <input type="text" readonly>.
- Также для полей с атрибутом readonly не сработает атрибут required.
- Есть разница между disabled и readonly. Так, поля, доступные только для чтения (readonly), по-прежнему могут получать фокус и будут отправляться вместе с формой в отличие от неактивных полей (disabled).
- Поле с атрибутом readonly можно стилизовать при помощи псевдокласса :read-only, а поля без этого атрибута - :read-write.

- Атрибут readonly можно использовать для <textarea> и <input> со следующими типами:
1. text
2. search
3. url
4. tel
5. email
6. password
7. date
8. month
9. week
10. time
11. datetime-local
12. number

- Не используется:
1. с тегом <select>
2. c любым типом кнопок (даже если это изображение)
3. если у поля есть атрибут hidden
*/

//# Пример
<form>
  <div class="group">
    <input type="date" value="1995-04-04" readonly="readonly" id="date" />
    <label for="date">Дата рождения</label>
  </div>
</form>;
