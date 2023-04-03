//# .getAttribute()
// Метод getAttribute() позволяет получить значение указанного атрибута у HTML-элемента. Если атрибута нет, то метод вернёт null.

//# пример
<script type="application/json" id="hydration"></script>;
const scriptElement = document.querySelector("script");
console.log(scriptElement.getAttribute("type")); // 'application/json'
console.log(scriptElement.getAttribute("id")); // 'hydration'
console.log(scriptElement.getAttribute("class")); // null

<div data-color="red" hidden>Ошибка!</div>;
const element = document.querySelector("div");
console.log(element.hidden); // true
console.log(element.getAttribute("hidden")); // "" – пустая строка, т.к строкового значения у атрибута нет
console.log(element.dataset.color); // "red"
console.log(element.getAttribute("data-color")); // "red"

//# общая информация
/* getAttribute() принимает один аргумент – строку с именем атрибута. В ответ метод возвращает значение атрибута в виде строки или null, если атрибута нет на элементе.
- Не все атрибуты имеет смысл считывать с помощью getAttribute(). Например, атрибут hidden лучше читать из поля hidden DOM-элемента, а дата-атрибуты — из поля dataset.*/
