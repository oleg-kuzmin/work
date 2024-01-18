//# element.disabled (БЛОКИРУЕТ КНОПКУ)
// Блокировать и разблокировать кнопку в JavaScript можно, присваивая булевы значения свойству disabled (по-английски значит «отключён») этой кнопки. Если присвоено значение true, то кнопка заблокирована, а если false — разблокирована.

//# Пример
let button = document.querySelector('button');
button.disabled = true; // Блокирует кнопку
button.disabled = false; // Разблокирует кнопку
