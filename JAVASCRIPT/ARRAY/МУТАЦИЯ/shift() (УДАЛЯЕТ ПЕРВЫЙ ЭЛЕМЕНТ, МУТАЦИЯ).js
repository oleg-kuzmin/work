//# array.shift() (УДАЛЯЕТ ПЕРВЫЙ ЭЛЕМЕНТ, МУТАЦИЯ)
// Метод shift удаляет первый элемент массива.

//# Синтаксис
array.shift();

//# Возвращает
//* Удаленный элемент.
// Возвращает удалённый элемент.

//# Пример
const italyCities = ['Помпеи', 'Рим', 'Неаполь'];
const volcanoEruption = italyCities.shift();
console.log(italyCities); // ["Рим", "Неаполь"]
