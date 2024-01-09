//# Атрибут form (СВЯЗЬ С ФОРМОЙ)
// Указывается ID формы в этом же документе, с которой связывается поле вывода.

//# Пример
<form id="my-form">
  <label for="people-num">Для скольких людей приготовить яичницу:</label>
  <input type="number" id="people-num" name="people" oninput="eggs.value = (parseInt(people.value) * 2)" />
  <p>Необходимое количество яиц:</p>
  <output role="status" form="my-form" name="eggs" for="people-num"></output>
</form>;
