//# Асинхронность в JS
/*
- Чтобы понять, что такое асинхронность, сперва поговорим о синхронном коде и том, как в принципе JavaScript выполняет код.
- Чтобы выполнить код, нам нужен JavaScript Engine (движок) — программа, которая «читает и выполняет» то, что мы написали. Самый распространённый движок среди всех — это V8, он используется в Google Chrome и Node.js.
- Выполнение JS-кода — однопоточное. Это значит, что в конкретный момент времени движок может выполнять не более одной строки кода. То есть вторая строка не будет выполнена, пока не выполнится первая.
- Такое выполнение кода (строка за строкой) называется синхронным.
*/

//# Стек вызовов
// При вызове какой-то функции она попадает в так называемый стек вызовов.

// Стек — это структура данных, в которой элементы упорядочены так, что последний элемент, который попадает в стек, выходит из него первым (LIFO: last in, first out). Стек похож на стопку книг: та книга, которую мы кладём последней, находится сверху.

// В стеке вызовов хранятся функции, до которых дошёл интерпретатор, и которые надо выполнить.


