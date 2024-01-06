//# .querySelector() (Поиск по селектору)
/*
- Метод определён для объекта document и любого HTML-элемента (Element) страницы. Позволяет найти элемент по CSS-селектору среди дочерних.
- Метод принимает один параметр — CSS-селектор в виде строки. Если передан не CSS-селектор, то система выбросит ошибку.
- Если элементов несколько, то вернётся первый подходящий. Если подходящих элементов нет, то вернёт null.
- Для поиска первого элемента в DOM нужно передать строку '*' аргументом querySelector(), её называют wildcard.
*/

//# пример
const input = document.querySelector('input'); // поиск по тегу
const firstElement = document.querySelector('.class'); // поиск по классу
const secondElement = document.querySelector('#id'); // поиск по id
const checkbox = document.querySelector('input[type=checkbox]'); // поиск по тегу с атрибутом
const ulElement = document.querySelector('ul')[0]; // ищем li
const lastLi = ulElement.querySelector('li:last-child'); // последний li
const element = document.querySelector('[data-id="123"]'); // элемент с дата-атрибутом
