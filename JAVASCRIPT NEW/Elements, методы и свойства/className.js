//# .className
// У каждого элемента DOM есть свойство className. С его помощью можно прочитать или записать значение атрибута class

//# пример
<div class="princess">Елизавета</div>;

// выбираем элемент c классом 'princess'
let rank = document.querySelector('.princess');
console.log(rank.className); // princess

rank.className = 'queen'; // принцесса стала королевой, перезаписываем класс на 'queen'
console.log(rank.className); // queen

// если у элемента несколько классов, в свойстве className они будут разделены пробелами.
console.log(rank.className); // her majesty queen
