//# firstElementChild
// Свойство firstElementChild позволяет получить первый дочерний элемент.

//# пример
const body = document.querySelector('body');
console.log(body.firstElementChild); // <p>Ребёнок раз</p>

//# общая информация
// Если у элемента нет дочерних элементов, вернется null.
