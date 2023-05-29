//# do...while
/*
- Это такой же цикл как while, но с одним отличием: условие проверяется после каждой итерации, а не до неё.
- Это гарантирует, что тело цикла выполнится хотя бы один раз.

* тело цикла
это блок операций, которые будут выполнены один раз и далее в случае если условие истинно.
* условие
тут задаётся условие по которому выполняется цикл. Если условие ложно, работа цикла прекращается и тело цикла не выполняется.
*/

//# синтаксис
do {
  // тело цикла
} while (условие);

//# пример
let number = 21;

do {
  console.log(number);
} while (number <= 20);
