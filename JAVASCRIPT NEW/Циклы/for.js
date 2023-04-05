//# for
// Управляющая конструкция, которая создаёт цикл.

//# синтаксис
for (инициализация; условие; завершающаяОперация) {
  // тело цикла
}

/* 1) Инициализация — в этой части задаётся начальное значение счётчика цикла.
2) Условие — тут задаётся условие по которому выполняется цикл. Если условие ложно, работа цикла прекращается и тело цикла не выполняется.
3) Завершающая операция — в этой части задаётся выражение, которое будет исполнено после выполнения тела цикла. Обычно здесь содержится выражение изменения счётчика.
4) Тело цикла — это блок операций, которые будут выполнены в случае если условие истинно.
Любая часть for может быть пропущена. */

//# пример
for (let i = 0; i < 5; i++) {
  console.log('Счётчик равен: ' + i);
}

/* 1) Один раз выполнится инициализация.
2) Потом создастся переменная i и ей присвоится значение 0, let i = 0. Эта переменная доступна только пока работает цикл, так как мы её объявили через let. Переменные созданные через let доступны только в рамках блока, где они созданы. В нашем случае блок — это тело цикла и шаги инициализации, условия и итоговой операции.
3) Идёт проверка условия i < 5. Значение переменной в текущий момент времени это 0. 0 меньше 5, значит условие истинно.
4) Так как условие истинно, выполняется тело цикла: console.log('Счётчик равен: ' + i). В консоль будет выведено 'Счётчик равен: 0'.
5) После выполнения тела цикла идёт завершающая операция i++ после которой значение переменной i увеличивается на единицу и становится 1.
6) Последующие шаги повторения цикла уже не включают в себя инициализацию. Сразу идёт проверка условия i < 5. 1 меньше 5, поэтому условие истинно. Выполняется тело цикла. В консоль будет выведено 'Счётчик равен: 1'
7) Выполняется завершающая операция i++. Переменная i становится равной 2. Пропустим описание шагов, когда переменная равна 2, 3 и 4, перейдём к этапу когда переменная i станет равной 5.
8) Проверка условия i < 5. 5 < 5 и условие ложно. Выполнения тела цикла не происходит. Завершающая операция тоже не выполняется.
9) На этом работа цикла заканчивается. Программа переходит к следующей за циклом инструкции.*/

//# break (прерывает выполнение цикла)
for (let d = 0; d < 10; d++) {
  if (d === 5) {
    console.log('break');
    break;
  }
  console.log(d); // 0, 1, 2, 3, 4, break
}

//# continue (пропускает текущую итерацию)
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('continue');
    continue;
  }
  console.log(i); // 0, 1, 2, 3, 4, continue, 6, 7, 8, 9,
}

//# пропуск инициализации (мы уже имеем объявленную i с присвоенным значением)
let b = 0;
for (; b < 3; i++) {
  alert(b);
}

//# пропуск инициализации и завершающей операции (это сделает цикл аналогичным while (i < 3).)
let c = 0;
for (; c < 3; ) {
  alert(c++);
}

//# пропуск всех частей (будет выполняться вечно)
// for (;;) {}

//# общая информация
/* Необязательно начинать счётчик с нуля. Он может быть равным любому значению. Отсчёт с нуля делается для удобства восприятия и облегчения дальнейшего обслуживания кода. Условие проверки так же может быть любым, важно чтобы результат проверки был true или false.*/
