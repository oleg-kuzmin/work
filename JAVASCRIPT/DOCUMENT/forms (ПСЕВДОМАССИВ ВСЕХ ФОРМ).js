//# document.forms (ПСЕВДОМАССИВ ВСЕХ ФОРМ)
// Получить псевдомассив форм на странице. Свойство только для чтения, напрямую перезаписать его нельзя.

//# Возвращает
//* NodeList (Псевдомассив-коллекция DOM-элементов).

//# Пример
//* Псевдомассив форм
const collection = document.forms;

//* Форма по имени
const myForm = document.forms.name;

//* Псевдомассив элементов формы
const elements = document.forms.name.elements;

//* Элемент по имени
const element = document.forms.name.elements.name;
