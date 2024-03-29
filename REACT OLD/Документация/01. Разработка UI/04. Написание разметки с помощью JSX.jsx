//# Написание разметки с помощью JSX
// JSX - это расширение синтаксиса для JavaScript, позволяющее писать HTML-подобную разметку внутри файла JavaScript. Хотя существуют и другие способы написания компонентов, большинство разработчиков React предпочитают лаконичность JSX, и большинство кодовых баз используют именно его.

/* Вы узнаете
- Почему React смешивает разметку с логикой рендеринга
- Чем JSX отличается от HTML
- Как отображать информацию с помощью JSX
*/

//# JSX: размещение разметки в JavaScript
// Веб был построен на HTML, CSS и JavaScript. В течение многих лет веб-разработчики хранили содержимое в HTML, дизайн в CSS, а логику в JavaScript - часто в отдельных файлах! Контент размечался внутри HTML, а логика страницы жила отдельно в JavaScript:

// Но по мере того, как веб становился все более интерактивным, логика все больше определяла содержание. JavaScript стал отвечать за HTML! Вот почему в React логика рендеринга и разметка живут вместе в одном месте - в компонентах.

// Совместное использование логики рендеринга и разметки кнопки гарантирует, что они будут синхронизироваться друг с другом при каждом редактировании. И наоборот, детали, не связанные между собой, такие как разметка кнопки и разметка боковой панели, изолированы друг от друга, что делает более безопасным изменение любой из них по отдельности.

// Каждый компонент React - это функция JavaScript, которая может содержать некоторую разметку, которую React отображает в браузере. Компоненты React используют расширение синтаксиса под названием JSX для представления этой разметки. JSX очень похож на HTML, но он немного строже и может отображать динамическую информацию. Лучший способ понять это - преобразовать некоторую HTML-разметку в JSX-разметку.

//* Примечание
// JSX и React - это две разные вещи. Их часто используют вместе, но вы можете использовать их независимо.
//* Примечание

//# Преобразование HTML в JSX
// Предположим, что у вас есть некоторый (совершенно правильный) HTML:

/*
<h1>Hedy Lamarr's Todos</h1>
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
/>
<ul>
  <li>Invent new traffic lights</li>
  <li>Rehearse a movie scene</li>
  <li>Improve the spectrum technology</li>
</ul>
*/

// И вы хотите поместить его в свой компонент:

function TodoList() {
  // ...
}

// Если вы скопируете и вставите его как есть, он не будет работать:

//* App.js
/*
export default function TodoList() {
return (
    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve the spectrum technology
    </ul>
  );
}
*/

// Это связано с тем, что JSX более строгий и имеет несколько больше правил, чем HTML! Если вы прочитаете приведенные выше сообщения об ошибках, они подскажут вам, как исправить разметку, или вы можете следовать руководству, приведенному ниже.

//* Примечание
// В большинстве случаев экранные сообщения об ошибках React помогут вам найти причину проблемы. Прочитайте их, если вы застряли!
//* Примечание

//# Правила JSX
//* 1. Возвращает один корневой элемент
// Чтобы вернуть несколько элементов из компонента, оберните их одним родительским тегом.

// Например, вы можете использовать <div>:
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
  <ul>...</ul>
</div>;

// Если вы не хотите добавлять в разметку лишние <div>, вместо них можно написать <> и </>:
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
  <ul>...</ul>
</>;

// Этот пустой тег называется Фрагмент. Фрагменты позволяют группировать элементы, не оставляя никаких следов в HTML-дереве браузера.

//* Почему несколько тегов JSX должны быть обернуты?
// JSX выглядит как HTML, но под капотом он преобразуется в обычные объекты JavaScript. Вы не можете вернуть два объекта из функции, не обернув их в массив. Это объясняет, почему вы также не можете вернуть два тега JSX, не обернув их в другой тег или фрагмент.
//* Почему несколько тегов JSX должны быть обернуты?

//* 2. Закройте все теги
// JSX требует, чтобы теги были явно закрыты: самозакрывающиеся теги, такие как <img> должны стать <img />, а оберточные теги типа <li>oranges должны быть записаны как <li>oranges</li>.

// Так выглядит закрытый образ Хеди Ламарр и элементы списка:

<>
  <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>;

//* 3. camelCase!
// JSX превращается в JavaScript, а атрибуты, записанные в JSX, становятся ключами объектов JavaScript. В ваших собственных компонентах вы часто захотите считать эти атрибуты в переменные. Но JavaScript имеет ограничения на имена переменных. Например, их имена не могут содержать тире или быть зарезервированными словами, такими как class.

// Вот почему в React многие атрибуты HTML и SVG записываются в camelCase. Например, вместо stroke-width вы используете strokeWidth. Поскольку class является зарезервированным словом, в React вместо него пишется className, названный в честь соответствующего свойства DOM:

<img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />;

// Вы можете найти все эти атрибуты в списке атрибутов компонентов DOM. Если вы ошибетесь, не волнуйтесь - React выведет сообщение с возможным исправлением в консоль браузера.

//! Внимание
// По историческим причинам атрибуты aria-* и data-* записываются как в HTML с тире.
//! Внимание

//* Совет: Используйте JSX-конвертер
// Преобразование всех этих атрибутов в существующей разметке может быть утомительным! Мы рекомендуем использовать конвертер (https://transform.tools/html-to-jsx) для перевода существующих HTML и SVG в JSX. Конвертеры очень полезны на практике, но все же стоит понимать, что происходит, чтобы вам было удобно писать JSX самостоятельно.

// Вот ваш конечный результат:

//* App.js
function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

//# Итоги
/* Теперь вы знаете, зачем существует JSX и как использовать его в компонентах:
- Компоненты React группируют логику рендеринга вместе с разметкой, потому что они связаны.
- JSX похож на HTML, с некоторыми отличиями. При необходимости вы можете использовать конвертер.
- Сообщения об ошибках часто указывают вам правильное направление для исправления разметки.
*/
