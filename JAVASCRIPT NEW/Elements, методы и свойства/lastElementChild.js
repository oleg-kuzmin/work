//# lastElementChild
// Свойство lastElementChild позволяет получить последний дочерний элемент.

//# пример
const body = document.querySelector('body');
console.log(body.lastElementChild); // <p>Ребёнок три</p>

//# общая информация
// Если у элемента нет дочерних элементов, вернется null.
