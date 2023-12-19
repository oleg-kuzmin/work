//# Атрибут for
/*
- значением может быть один или несколько ID, разделённые пробелом.
- Указывает на связь перечисленных элементов ввода (например, <input>) с элементом <output>.
*/

//# Пример
<form>
  <label for="people-num">Для скольких людей приготовить яичницу:</label>
  <input type="number" id="people-num" name="people" oninput="eggs.value = (parseInt(people.value) * 2)" />
  <p>Необходимое количество яиц:</p>
  <output role="status" name="eggs" for="people-num"></output>
</form>;
