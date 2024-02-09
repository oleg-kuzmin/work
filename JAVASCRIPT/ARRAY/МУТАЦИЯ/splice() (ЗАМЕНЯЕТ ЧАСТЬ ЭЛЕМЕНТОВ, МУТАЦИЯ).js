//# array.splice() (ЗАМЕНЯЕТ ЧАСТЬ ЭЛЕМЕНТОВ, МУТАЦИЯ)
/*
Метод splice выполняет два действия: удаляет элементы из массива и добавляет на их место новые.
*/

//# Синтаксис
array.splice(function (indexStart, quantity, elements) {});
//* 1. Число: indexStart - индекс элемента, с которого надо начать удалять.

//* 2. Число: quantity - сколько элементов нужно удалить.

//* 3. Элемент: elements - элементы, которые мы хотим поставить на место удалённых.
// Их может быть сколько угодно или не быть вообще.

//# Возвращает
//* Новый массив с удаленными элементами. Изменит исходный массив.

//# Пример
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// начиная с индекса 0 удалим пять элементов и вставим на их место другие пять
const removedItems = week.splice(0, 5, 'Воскресенье', 'Суббота', 'Воскресенье', 'Суббота', 'Воскресенье');

console.log(removedItems); // ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"]
console.log(week); // ["Воскресенье", "Суббота", "Воскресенье", "Суббота", "Воскресенье", "Суббота", "Воскресенье"]

