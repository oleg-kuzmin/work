//# element.closest() (НАХОДИТ БЛИЖАЙЩЕГО РОДИТЕЛЯ ПО СЕЛЕКТОРУ)
// Метод, который возвращает ближайший родительский элемент или его самого.

//# Синтаксис
//* Строка - CSS-селектор
element.closest('CSS-селектор');

//# Пример
<article class="container">
  <span class="element-one">Первый элемент</span>
  <span class="element-two">Второй элемент</span>
  <span class="element-three">Третий элемент</span>
</article>;

const element = document.querySelector('.element-one');
const neighbourElement = element.closest(':not(span)');
console.log(neighbourElement); // Вернёт тег <article>
