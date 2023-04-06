//# использование template

//* создание разметки
<template id="user">
  <div class="user">
    <img class="user__avatar" alt="avatar" />
    <p class="user__name"></p>
  </div>
</template>;

//* получаем содержимое (content) template по id
const userTemplate = document.querySelector('#user').content;

//* клонируем содержимое тега template
const userElement = userTemplate.querySelector('.user').cloneNode(true);

//* наполняем содержимым
userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

//* добавляем на страницу
usersOnline.append(userElement);

//# общая информация
/*
- Если понадобится ещё один такой элемент, содержимое template снова клонируют.
- Ещё одно преимущество template перед createElement — браузер проверяет на валидность код внутри этого тега. Допускается любой корректный HTML-код. */
