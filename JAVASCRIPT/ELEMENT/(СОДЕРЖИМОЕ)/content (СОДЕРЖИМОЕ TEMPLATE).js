//# element.content (СОДЕРЖИМОЕ TEMPLATE)
// Мы можем получить доступ к template.content из JavaScript, клонировать его и переиспользовать в новом компоненте.

//# Возвращает
//* Элемент с html-содержимым <template>.

//# Пример
<template id="user">
  <div class="user">
    <img class="user__avatar" alt="avatar" />
    <p class="user__name"></p>
  </div>
</template>;

const userTemplate = document.querySelector('#user').content;
