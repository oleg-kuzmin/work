//# .className (Имя класса)
/*
- У каждого элемента DOM есть свойство className. С его помощью можно прочитать или записать значение атрибута class
- Если у элемента несколько классов, в свойстве className они будут разделены пробелами.
*/

//# пример
<div class="princess">Елизавета</div>;

//* узнаем класс
let rank = document.querySelector('.princess');
console.log(rank.className); // princess

//* перезаписываем класс
rank.className = 'queen';
console.log(rank.className); // queen

//* несколько классов
console.log(rank.className); // her majesty queen
