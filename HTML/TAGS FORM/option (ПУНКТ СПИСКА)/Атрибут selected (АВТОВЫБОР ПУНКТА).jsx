//# Атрибут selected (АВТОВЫБОР ПУНКТА)
// Атрибут булевого типа. Если он задан, это означает, что пункт списка будет выбран по умолчанию. Если у выпадающего списка <select> не задан атрибут multiple, то атрибут selected может быть задан только одному тегу <option> в пределах этого списка. Если тегу <select> задан атрибут multiple, то атрибут selected может быть задан любому количеству тегов <option> в пределах списка.

//# Пример
<select name="city3">
  <option value="">-- Выберите город --</option>
  <option value="petersburg">Санкт-Петербург</option>
  <option value="moscow">Москва</option>
  <option value="kazan" selected>
    Казань
  </option>
  <option value="samara">Самара</option>
  <option value="perm">Пермь</option>
  <option value="novosibirsk">Новосибирск</option>
</select>;
