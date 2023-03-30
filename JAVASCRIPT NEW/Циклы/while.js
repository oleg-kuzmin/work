//# while
// Управляющая конструкция, которая создаёт цикл.

//# синтаксис
while (условие) {
  //тело цикла
}

//# пример
const numbers = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbers.length) {
  const currentElement = numbers[i];
  console.log(currentElement * currentElement);
  i++;
}
// напечатает 1, 4, 9, 16, 25

let count = numbers.length;
while (count) {
  // вариант с приведением типов в условии цикла
  console.log(count);
  count--;
}
// напечатает 5, 4, 3, 2, 1

//# общая информация
/* Всегда используйте альтернативы циклу while, которые лучше подходят под задачу. Например, у массивов есть много удобных методов: forEach(), filter(), map(). Они лучше читаются и содержат меньше кода.
- Следите, чтобы условие менялось с каждым выполнением тела цикла. Если этого не происходит, то, скорее всего, цикл будет бесконечным.
- while более гибкий цикл чем for, но при его написании легко совершить ошибку. Момент инициализации и изменения переменных в for (операция инициализации и шага) заранее определены. Их можно нарушить, но это не будет хорошо читаться. while предоставляет полную свободу организовывать цикл как угодно, это полностью ручное управление. Можно легко забыть написать что-либо — чаще всего забывают менять переменную из условия в теле цикла. */
