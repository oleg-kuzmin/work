//# .splice()
/* Метод splice выполняет два действия: удаляет элементы из массива и добавляет на их место новые.
1) Первый аргумент — индекс элемента, с которого надо начать удалять.
2) Второй аргумент — сколько элементов нужно удалить.
3) Аргументы с третьего — элементы, которые мы хотим поставить на место удалённых. Их может быть сколько угодно или не быть вообще.
Возвращает массив с удаленными элементами. */

//# пример
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// начиная с индекса 0 удалим пять элементов и вставим на их место другие пять
const removedItems = week.splice(0, 5, 'Воскресенье', 'Суббота', 'Воскресенье', 'Суббота', 'Воскресенье');

console.log(removedItems); // ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"]
console.log(week); // ["Воскресенье", "Суббота", "Воскресенье", "Суббота", "Воскресенье", "Суббота", "Воскресенье"]
