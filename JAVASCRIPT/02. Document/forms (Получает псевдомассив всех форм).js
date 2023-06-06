//# .forms (Получает псевдомассив всех форм)
// Получить список форм (псевдомассив) на странице. Свойство только для чтения, напрямую перезаписать его нельзя.

//# пример
const collection = document.forms; // псевдомассив форм
const myForm = document.forms.______; // поиск по имени
const elements = document.forms.______.elements; // все элементы формы
const element = document.forms.______.elements.______; // элемент формы
