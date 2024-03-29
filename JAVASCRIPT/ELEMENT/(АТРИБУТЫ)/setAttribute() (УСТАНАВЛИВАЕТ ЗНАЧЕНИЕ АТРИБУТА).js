//# element.setAttribute() (УСТАНАВЛИВАЕТ ЗНАЧЕНИЕ АТРИБУТА)
// Устанавливает конкретное значение атрибута у элемента.

//# Синтаксис
//* 1. Строка - имя атрибута, значение которого мы хотим задать
//* 2. Строка - само значение
element.setAttribute('lang', 'ru');

// Согласно спецификации у setAttribute есть два обязательных параметра, но в то же время disabled не предполагает никакого значения. Получается, чтобы метод сработал, второй аргумент необходим, но его значение неважно:
element.setAttribute('disabled', true);

//# Возвращает
//* NONE (undefined).
