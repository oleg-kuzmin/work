//# .nextElementSibling (Находит следующий соседний элемент)
/*
- Свойство previousElementSibling содержит ссылку на следующий соседний элемент.
- Если у элемента нет соседа, вернется null. Все эти свойства доступны только для чтения. Перезаписать их не получится.
*/

//# пример
const element = document.querySelectorAll('p')[1];
console.log(element.nextElementSibling); // <p>Ребёнок три</p>
