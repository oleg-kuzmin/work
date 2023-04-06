//# .cloneNode()
// У метода один аргумент — true или false. Если хотите скопировать элемент вместе с содержимым, передайте true, без — false.

//# пример
const container = document.querySelector('.container');
const element = document.querySelector('.element');
const elementCopy = element.cloneNode(true);
container.append(elementCopy);

//# общая информация
// Обработчики событий элемента не скопируются. Их придётся добавить заново.
