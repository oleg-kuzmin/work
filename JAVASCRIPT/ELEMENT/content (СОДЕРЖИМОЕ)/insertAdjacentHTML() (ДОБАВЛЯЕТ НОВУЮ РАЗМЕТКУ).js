//# element.insertAdjacentHTML() (ДОБАВЛЯЕТ НОВУЮ РАЗМЕТКУ)
// Добавляет разметку и текст в документ и не затрагивает существующие элементы.

//# Синтаксис
//* 1. Строка - место добавления ('beforebegin' <div> 'afterbegin' <текущая разметка> 'beforeend' </div> 'afterend')
//* 2. Строка - разметка
element.insertAdjacentHTML('beforeend', '<div class="className"></div>');

//# Возвращает
//* NONE (undefined).
