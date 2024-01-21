//# document.querySelector() (ПОИСК ЭЛЕМЕНТА В DOM)
//# element.querySelector() (ПОИСК ЭЛЕМЕНТА В DOM)
/*
- Метод определён для объекта document и любого HTML-элемента (Element) страницы. Позволяет найти элемент по CSS-селектору среди дочерних. Если элементов несколько, то вернётся первый подходящий. Если подходящих элементов нет, то вернёт null.
- Метод принимает один параметр — CSS-селектор в виде строки. Если передан не CSS-селектор, то система выбросит ошибку.
*/

//# Синтаксис
//* Строка - CSS-селектор
document.querySelector('CSS-селектор');
// Если передан не CSS-селектор, то система выбросит ошибку.

//# Возвращает
//* Первый DOM-элемент, который соответствует критериям поиска. || null - если совпадений нет.

//# Пример
// Поиск по тегу.
document.querySelector('input');

// Поиск первого элемента в DOM.
document.querySelector('*');
