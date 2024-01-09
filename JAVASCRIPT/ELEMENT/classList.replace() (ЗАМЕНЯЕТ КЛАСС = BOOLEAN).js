//# element.classList.replace() (ЗАМЕНЯЕТ КЛАСС = BOOLEAN)
// Метод позволяет заменить одно значение класса другим.

//# Синтаксис
element.classList.remove('меняем класс', 'на класс');
/*
Метод принимает 2 параметра:
1. название класса, который нужно заменить;
2. название класса, на что нужно заменить.

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
