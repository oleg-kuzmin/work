//# .previousElementSibling (Находит предыдущий соседний элемент)
/*
- Свойство previousElementSibling содержит ссылку на предыдущий соседний элемент.
- Если у элемента нет соседа, вернется null. Все эти свойства доступны только для чтения. Перезаписать их не получится.
*/

//# пример
const element = document.querySelectorAll('p')[1];
console.log(element.previousElementSibling); // <p>Ребёнок раз</p>
