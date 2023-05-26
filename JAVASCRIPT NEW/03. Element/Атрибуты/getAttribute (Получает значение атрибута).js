//# .getAttribute() (Получает значение атрибута)
/*
- Метод getAttribute() позволяет получить значение указанного атрибута у HTML-элемента. Если атрибута нет, то метод вернёт null.
- getAttribute() принимает один аргумент – строку с именем атрибута. В ответ метод возвращает значение атрибута в виде строки или null, если атрибута нет на элементе.
- Если атрибут задан, но не подразумевает значения, например disabled, мы получим пустую строку.
- Не все атрибуты имеет смысл считывать с помощью getAttribute(). Например, атрибут hidden лучше читать из поля hidden DOM-элемента, а дата-атрибуты — из поля dataset.
*/

//# пример
<script type="application/json" id="hydration"></script>;
const scriptElement = document.querySelector('script');
console.log(scriptElement.getAttribute('type')); // 'application/json'
console.log(scriptElement.getAttribute('id')); // 'hydration'
console.log(scriptElement.getAttribute('class')); // null
