//# element.cloneNode() (КЛОНИРОВАНИЕ ЭЛЕМЕНТА)
// Создает копию элемента без обработчиков.

//# Синтаксис
//* Boolean - с содержимым или нет
elementCopy.cloneNode(true);
// Если хотите скопировать элемент вместе с содержимым, передайте true, без — false. Обработчики событий элемента не скопируются. Их придётся добавить заново.

//# Возвращает
//* Новый DOM-элемент.

//# Пример
const container = document.querySelector('.container');
const element = document.querySelector('.element');
const elementCopy = element.cloneNode(true);
container.append(elementCopy);
