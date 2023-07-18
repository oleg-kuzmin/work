//# Написание разметки с помощью JSX
// JSX — это расширение синтаксиса для JavaScript, позволяющее писать HTML-подобную разметку внутри файла JavaScript. Хотя есть и другие способы написания компонентов, большинство разработчиков React предпочитают лаконичность JSX, и большинство кодовых баз используют его.

/* Вы выучите:
- Почему React смешивает разметку с логикой рендеринга
- Чем JSX отличается от HTML
- Как отображать информацию с помощью JSX
*/

//# JSX: добавление разметки в JavaScript
// Интернет был построен на HTML, CSS и JavaScript. В течение многих лет веб-разработчики хранили контент в HTML, дизайн в CSS и логику в JavaScript — часто в отдельных файлах! Контент был размечен внутри HTML, а логика страницы жила отдельно в JavaScript.

// Но по мере того, как Интернет становился все более интерактивным, содержание все больше определялось логикой. JavaScript отвечал за HTML! Вот почему в React логика рендеринга и разметка живут вместе в одном месте — компонентах.

// Сохранение логики рендеринга кнопки и разметки вместе гарантирует их синхронизацию друг с другом при каждом редактировании. И наоборот, несвязанные детали, такие как разметка кнопки и разметка боковой панели, изолированы друг от друга, что делает более безопасным изменение любой из них по отдельности.

// Каждый компонент React — это функция JavaScript, которая может содержать некоторую разметку, которую React отображает в браузере. Компоненты React используют расширение синтаксиса под названием JSX для представления этой разметки. JSX очень похож на HTML, но немного строже и может отображать динамическую информацию. Лучший способ понять это — преобразовать некоторую разметку HTML в разметку JSX.

//# Примечание
// JSX и React — это две разные вещи. Они часто используются вместе, но вы можете  использовать их независимо друг от друга. JSX — это расширение синтаксиса, а React — это библиотека JavaScript.

//# Преобразование HTML в JSX
/* Предположим, что у вас есть некоторый (совершенно правильный) HTML:
<h1>Hedy Lamarr's Todos</h1>
<img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo">
<ul>
  <li>Invent new traffic lights
  <li>Rehearse a movie scene
  <li>Improve the spectrum technology
</ul>
*/

// И вы хотите поместить его в свой компонент:
function TodoList() {
  return somehing;
}

// Если вы скопируете и вставите его как есть, он не будет работать.

// Это потому, что JSX строже и имеет несколько больше правил, чем HTML! Если вы прочитали сообщения об ошибках выше, они помогут вам исправить разметку, или вы можете следовать приведенному ниже руководству.

//* Примечание
// В большинстве случаев сообщения об ошибках React на экране помогут вам найти источник проблемы. Прочитайте их, если вы застряли!

//# Правила JSX

