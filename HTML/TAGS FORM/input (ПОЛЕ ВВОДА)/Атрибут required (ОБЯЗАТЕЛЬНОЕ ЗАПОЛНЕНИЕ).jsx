//# Атрибут required (ОБЯЗАТЕЛЬНОЕ ЗАПОЛНЕНИЕ)
/*
- Атрибут required добавляется обязательным полям формы. Если поле с таким атрибутом не заполнено, то при отправке формы браузер покажет предупреждение и отменит отправку.
- Достаточно написать атрибут required без значения, ведь он булевый: если он есть — поле обязательное, а если нет — не обязательное. Если вам по какой-то причине нельзя использовать булевы атрибуты (например, в XML-разметке), напишите required="required".
- Если в группе радиокнопок с одинаковым значением атрибута name хотя бы у одной указан атрибут required, то вся группа будет считаться обязательной. Поэтому лучше явно прописывать required всем радиокнопкам в группе. При этом для чекбоксов с одинаковыми именами это не работает. Обязательным будет только тот чекбокс, у которого прописан атрибут.
- Атрибут не сработает для любых кнопок, а также для полей ввода с типами color и range. Причина в том, что у таких полей существует значение по умолчанию, даже если оно явно не прописано в атрибуте value. У <input type="color"> это #000000, а у <input type="range"> это среднее значение между min и max. Так что браузер посчитает их заполненными в любом случае и не покажет предупреждение.
- Кроме того, атрибут required не работает для скрытых полей type="hidden" и для полей с атрибутом readonly.
- Поля с атрибутом required можно стилизовать при помощи псевдокласса :required. Поля, у которых нет этого атрибута, стилизуются псевдоклассом :optional.
- Необходимо визуально выделять обязательные для заполнения поля формы. Почему-то исторически сложилось, что рядом с подписью для поля ставят звёздочку. Раньше под формой писали пояснение, что звёздочка значит обязательное поле. Но со временем пропало даже пояснение.
- Звёздочка — плохой паттерн. Как минимум потому что скринридер прочитает её просто как «звёздочка». Лучше явно написать в скобках «(обязательное)». Тогда пользователь, каким бы инструментом он не пользовался, точно будет знать, что поле надо заполнить.

- Атрибут required можно использовать для <select>, <textarea>, а также для <input> со следующими типами:
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
13. checkbox
14. radio
15. file
*/

//# Пример
<form>
  <label>
    Ваше имя:
    <input type="text" />
  </label>
  <label>
    Ваш номер телефона (обязательно):
    <input type="tel" required />
  </label>
  <button type="submit">Отправить заявку</button>
</form>;
