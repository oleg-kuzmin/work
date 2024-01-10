//# form (ФОРМА)
/*
- Тег <form> добавляет на страницу форму, которую пользователь может заполнить. Например, ввести своё имя, фамилию или почту. Данные формы отправляются на сервер.
- Стилизовать <form> можно с помощью CSS.
- На странице можно сделать сколько угодно форм. Но одновременно пользователь сможет отправить только одну заполненную форму.
*/

//# Пример
<form action="" method="get">
  <p>
    <label for="name">Введите имя:</label>
    <input type="text" name="name" id="name" required />
  </p>
  <p>
    <label for="email">Введите email:</label>
    <input type="email" name="email" id="email" required />
  </p>
  <button type="submit">Отправить</button>
</form>;
