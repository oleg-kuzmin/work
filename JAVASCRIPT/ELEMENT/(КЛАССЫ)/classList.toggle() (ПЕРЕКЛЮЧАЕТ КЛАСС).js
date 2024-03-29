//# element.classList.toggle() (ПЕРЕКЛЮЧАЕТ КЛАСС)
// Метод можно использовать, чтобы включать или выключать класс. Если при вызове toggle() переданный класс уже есть на элементе, то он будет убран. Если класса не было — то добавлен.

//# Синтаксис
//* 1. Строка - имя класса для переключения
element.classList.toggle('имя-класса');

//* 2. Boolean (опционально)
element.classList.toggle('имя-класса', true);

/*
true - метод будет работать как add()
false - метод будет работать как remove()
*/

//# Возвращает
//* BOOLEAN-значение об успешности операции.
/*
После выполнения toggle() возвращает boolean-значение, которые сообщает нам об успешности операции:
- true если класс был переключен;
- false если ничего не изменилось.
*/

//# Пример
// На кнопке есть класс hidden
const button = document.querySelector('button.hidden');

// Так как класс есть, то он будет убран
button.classList.toggle('hidden');

// А при повторном вызове будет снова добавлен
button.classList.toggle('hidden');
