//# .nextElementSibling
// Свойство previousElementSibling содержит ссылку на следующий соседний элемент.

//# пример
const element = document.querySelectorAll('p')[1];
console.log(element.nextElementSibling); // <p>Ребёнок три</p>

//# общая информация
// Если у элемента нет соседа, вернется null. Все эти свойства доступны только для чтения. Перезаписать их не получится.
