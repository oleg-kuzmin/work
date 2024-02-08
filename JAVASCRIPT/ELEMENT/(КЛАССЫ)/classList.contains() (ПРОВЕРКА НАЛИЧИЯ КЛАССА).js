//# element.classList.contains() (ПРОВЕРКА НАЛИЧИЯ КЛАССА)
// Метод позволяет проверить наличие класса у элемента.

//# Синтаксис
//* Строка - имя класса, наличие которого нужно проверить
element.classList.contains('имя-класса');

//# Возвращает
//* BOOLEAN-значение о наличии класса.
// Метод contains() вернёт true если класс есть и false если класса нет.

//# Пример
// На кнопке есть класс hidden, найдем эту кнопку.
const button = document.querySelector('button.hidden');

// Проверим, есть ли класс visible на кнопке
const isVisible = button.classList.contains('visible');
console.log(isVisible); // false, класс 'visible' у кнопки отсутствует

// Проверим, есть ли класс hidden на кнопке
const isHidden = button.classList.contains('hidden');
console.log(isHidden); // true, класс 'hidden' у кнопки присутствует
