//# element.classList.replace() (ЗАМЕНЯЕТ КЛАСС)
// Метод позволяет заменить одно значение класса другим.

//# Синтаксис
//* 1. Строка - имя класса, которое нужно заменить
//* 2. Строка - имя класса, на что нужно заменить
element.classList.remove('меняем класс', 'на класс');

//# Возвращает
//* BOOLEAN-значение об успешности операции.
/*
После выполнения replace() возвращает boolean-значение, которые сообщает нам об успешности операции:
- true если класс был заменён;
- false если ничего не изменилось.
*/

//# Пример
// На кнопке есть класс hidden
const button = document.querySelector('button.hidden');

// Заменяем класс hidden на visible
const result = button.classList.replace('hidden', 'visible');
console.log(result); // true, класс успешно заменился на visible
