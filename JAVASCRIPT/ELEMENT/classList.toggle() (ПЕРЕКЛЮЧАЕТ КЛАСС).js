//# element.classList.toggle() (ПЕРЕКЛЮЧАЕТ КЛАСС)
// Метод можно использовать, чтобы включать или выключать класс. Если при вызове toggle() переданный класс уже есть на элементе, то он будет убран. Если класса не было — то добавлен.

//# Синтаксис
//* 1. Класс для переключения
element.classList.toggle('имя-класса');

//* 2. boolean-значение (Опционально)
element.classList.toggle('имя-класса', true);

/*
true - метод будет работать как add()
false - метод будет работать как remove()
*/

//# Пример
// На кнопке есть класс hidden
const button = document.querySelector('button.hidden');

// Так как класс есть, то он будет убран
button.classList.toggle('hidden');

// А при повторном вызове будет снова добавлен
button.classList.toggle('hidden');
