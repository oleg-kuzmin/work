//# slice() (Копирует часть массива, без мутации)
/*
- Метод slice копирует часть массива и делает из неё новый массив.
- Можно вызывать slice без аргументов. Получится новый массив, состоящий из всех элементов исходного.

- Он принимает на вход два аргумента:
1) индекс элемента, с которого нужно начать копирование (включительно). Можно передавать как аргумент и отрицательные числа. Тогда индекс будет считаться с конца массива.
2) индекс элемента, на котором нужно остановиться (не включительно). Второй аргумент можно не указывать. Тогда скопированы будут все элементы до конца.
*/

//# пример
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const spring = months.slice(2, 5); // копирует с 2 элемента и до 5 элемента (не включительно)
console.log(spring); // ["Март", "Апрель", "Май"]

const autumn = months.slice(-4, -1); // копирует с 4 элемента с конца и до 1 элемента с конца (не включительно)
console.log(autumn); // ["Сентябрь", "Октябрь", "Ноябрь"]

const fourthQuarter = months.slice(-3); // с 3 элемента с конца и до конца
console.log(fourthQuarter); // ["Октябрь", "Ноябрь", "Декабрь"]
