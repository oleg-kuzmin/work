//# .lastElementChild
/*
- Свойство lastElementChild позволяет получить последний дочерний элемент.
- Если у элемента нет дочерних элементов, вернется null. Все эти свойства доступны только для чтения. Перезаписать их не получится.
*/

//# пример
const body = document.querySelector('body');
console.log(body.lastElementChild); // <p>Ребёнок три</p>
