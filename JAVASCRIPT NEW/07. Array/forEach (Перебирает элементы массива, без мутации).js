//# .forEach() (Перебирает элементы массива, без мутации)
/*
- Метод forEach нужен для обхода массива.
- В качестве аргумента forEach принимает функцию. Она будет вызвана на каждом элементе массива поочерёдно.
- forEach вызовет функцию столько раз, сколько элементов в массиве.
- При каждом вызове forEach передаёт функции текущий элемент массива в качестве аргумента.
- Поэтому в передаваемой нами функции item — это текущий элемент массива. Параметр item можно назвать и по-другому. Но лучше сделать так, чтобы название отражало содержание.
- Метод forEach удобно использовать для работы с массивоподобными объектами. Например, с NodeList. Частая задача — пройтись по нескольким DOM элементам, вызвав для каждого из них функцию.
- Метод forEach — более удобная для работы с массивом версия цикла for.
- Но с forEach нельзя использовать директивы continue и break. Поэтому метод не используют, когда нужно прервать выполнение цикла каким-то условием.

Аргументы колбек-функции:
//* 1. Текущий элемент массива
Текущий элемент массива используется часто, поэтому и стоит на первом месте. Если другие аргументы не нужны, достаточно прописать его.

//* 2. Индекс текущего элемента
Второй аргумент колбэка — фактически счётчик цикла for. Его можно использовать, например, для расстановки позиций в списке.

//* 3. Исходный массив
Исходный массив как аргумент пригодится, когда нужно обратиться к свойствам этого исходного массива.
*/

//# Синтаксис
array.forEach(function (item, index, array) {});

//# пример
const how = ['быстрее', 'выше', 'сильнее'];
how.forEach(function (item) {
  console.log(item + '.'); // 'быстрее.' 'выше.' 'сильнее.'
});

const elements = document.querySelectorAll('.text');
elements.forEach(item => {
  item.classList.add('text_is-active');
});
