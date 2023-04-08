//# .shift()
// Метод shift удаляет первый элемент массива. Возвращает удалённый элемент. Исходный массив при этом изменится.

//# пример
const italyCities = ['Помпеи', 'Рим', 'Неаполь'];
const volcanoEruption = italyCities.shift();
// метод shift() возвращает удалённый элемент console.log(volcanoEruption); // "Помпеи"
// массив остался без первого элемента
console.log(italyCities); // ["Рим", "Неаполь"]
