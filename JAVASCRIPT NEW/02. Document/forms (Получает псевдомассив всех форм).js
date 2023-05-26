//# .forms (Получает псевдомассив всех форм)
// Получить список форм (псевдомассив) на странице. Свойство только для чтения, напрямую перезаписать его нельзя.

//# пример
const collection = document.forms; // псевдомассив форм
const myForm = document.forms.formName; // поиск по имени
const element = document.forms.formName.element; // элемент формы
document.forms.formName.elements; // все элементы формы
