//# .firstElementChild
/*
- Свойство firstElementChild позволяет получить первый дочерний элемент.
- Если у элемента нет дочерних элементов, вернется null. Все эти свойства доступны только для чтения. Перезаписать их не получится.
*/

//# пример
const body = document.querySelector('body');
console.log(body.firstElementChild); // <p>Ребёнок раз</p>
