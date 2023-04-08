//# .previousElementSibling
// Свойство previousElementSibling содержит ссылку на предыдущий соседний элемент.

//# пример
const element = document.querySelectorAll('p')[1];
console.log(element.previousElementSibling); // <p>Ребёнок раз</p>

//# общая информация
// Если у элемента нет соседа, вернется null. Все эти свойства доступны только для чтения. Перезаписать их не получится.
