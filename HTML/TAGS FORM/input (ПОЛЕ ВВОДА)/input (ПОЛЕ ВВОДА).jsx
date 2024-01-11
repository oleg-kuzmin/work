//# input (ПОЛЕ ВВОДА) (input: ввод)
/*
- <input> — это контейнер для интерактивных элементов, с помощью которых пользователь может ввести данные, что-то выбрать, поставить галочку или нажать кнопку.
*/

//# Пример
//* <input> внутри <form>
<form class="form">
  <input type="text" placeholder="Введите логин" />
</form>;

//* <input> с атрибутом form и <form> с атрибутом id
<input type="button" placeholder="Введите логин" form="my-form" />;
<form class="form" id="my-form"></form>;
