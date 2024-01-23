//# element.children (КОЛЛЕКЦИЯ ДОЧЕРНИХ ЭЛЕМЕНТОВ)
// Свойство children содержит псевдомассив всех дочерних элементов указанного элемента.

//# Возвращает
//* HTMLCollection (Динамическая коллекция).

//# пример
const body = document.querySelector('body');
console.log(body.children); // HTMLCollection(3) [p, p, p]
