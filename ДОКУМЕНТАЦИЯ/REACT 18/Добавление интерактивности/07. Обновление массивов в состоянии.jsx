//# Обновление массивов в состоянии
// Массивы изменяемы в JavaScript, но вы должны обращаться с ними как с неизменяемыми, когда сохраняете их в состоянии. Как и в случае с объектами, когда вы хотите обновить массив, хранящийся в состоянии, вам нужно создать новый (или сделать копию существующего), а затем установить состояние для использования нового массива.

/* Вы выучите:
- Как добавлять, удалять или изменять элементы в массиве в состоянии React
- Как обновить объект внутри массива
- Как сделать копирование массива менее повторяющимся с помощью Immer
*/

//# Обновление массивов без мутации
// В JavaScript массивы — это еще один вид объектов. Как и в случае с объектами , вы должны рассматривать массивы в состоянии React как доступные только для чтения. Это означает, что вы не должны переназначать элементы внутри массива, например arr[0] = 'bird', а также не должны использовать методы, изменяющие массив, такие как push() и pop().

// Вместо этого каждый раз, когда вы хотите обновить массив, вы захотите передать новый массив в функцию настройки состояния. Для этого вы можете создать новый массив из исходного массива в своем состоянии, вызвав его немутирующие методы, такие как filter() и map(). Затем вы можете установить свое состояние в полученный новый массив.

/* Вот справочная таблица общих операций с массивами. При работе с массивами внутри состояния React вам нужно избегать методов в левом столбце и вместо этого предпочитать методы в правом столбце:

избежать (мутирует массив)	                 предпочесть (возвращает новый массив)
добавление	push, unshift	                   concat, [...arr] синтаксис распространения
удаление	  pop, shift, splice	             filter, slice
замена	    splice, arr[i] = ...присвоение	 map
сортировка	reverse, sort	                   сначала скопируйте массив
*/

// В качестве альтернативы вы можете использовать Immer, который позволяет использовать методы из обоих столбцов.

//* Важно
/* К сожалению, slice и splice называются одинаково, но сильно отличаются:
- slice позволяет копировать массив или его часть.
- splice изменяет массив (чтобы вставлять или удалять элементы).

В React вы будете использовать slice(нет p!) гораздо чаще, потому что не хотите изменять объекты или массивы в состоянии. Обновление объектов объясняет, что такое мутация и почему ее не рекомендуется использовать для состояния.
*/

//# Добавление в массив


