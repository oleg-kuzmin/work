const headingElement = document.querySelector("h1"); // поиск по тегу
const bodyElem = document.querySelector(".body"); // поиск по классу
const button = document.querySelector('#button'); // поиск по id
const button1 = document.querySelectorAll('.button'); // найдет все по классу
bodyElem.style.backgroundColor = "gray"; // синтаксис camelCase для стилей
headingElement.style.fontSize = "40px";
headingElement.style.color = "white";
headingElement.textContent = "текст";
headingElement.append("новый текст");

element.insertAdjacentHTML('beforebegin', '***') // гибкая вставка до открытия тега ! не использовать из-за безопасности !
// <div class="***">
      element.insertAdjacentHTML('afterbegin', '***') // гибкая вставка перед разметкой ! не использовать из-за безопасности !
      // текущая разметка
      element.insertAdjacentHTML('beforeend', '***') // гибкая вставка после разметки ! не использовать из-за безопасности !
// </div>
element.insertAdjacentHTML('afterend', '***') // гибкая вставка после закрытия тега ! не использовать из-за безопасности !

element.textContent // получим текстовое содержимое тега, можно перезаписать ! а вот это можно и нужно использовать !
element.insertAdjacentText // гибкая вставка текстового содержимого тега, работает так же как insertAdjacentHTML ! а вот это можно и нужно использовать !