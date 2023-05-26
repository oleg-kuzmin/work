//# .forms (Получает псевдомассив всех форм)
// Получить список форм (псевдомассив) на странице. Свойство только для чтения, напрямую перезаписать его нельзя.

//# пример
const collection = document.forms; // псевдомассив форм
const myForm = document.forms.имяФормы; // поиск по имени
const element = document.forms.имяФормы.element; // элемент формы
document.forms.имяФормы.elements; // все элементы формы
