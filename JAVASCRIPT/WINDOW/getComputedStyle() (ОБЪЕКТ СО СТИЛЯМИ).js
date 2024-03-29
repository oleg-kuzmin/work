//# window.getComputedStyle() (ОБЪЕКТ СО СТИЛЯМИ)
/*
- Получаем текущее значение CSS-свойства элемента.
- Давным-давно getComputedStyle был создан для получения вычисленных значений, но оказалось, что окончательные значения гораздо удобнее, и стандарт изменился.
- Так что, в настоящее время getComputedStyle фактически возвращает окончательное значение свойства, для геометрии оно обычно в пикселях.
- Результат вызова – объект со стилями, похожий на elem.style, но с учётом всех CSS-классов.
- Для правильного получения значения нужно указать точное свойство. Например: paddingLeft, marginTop, borderTopWidth. При обращении к сокращённому: padding, margin, border – правильный результат не гарантируется.
*/

//# Синтаксис
//* 1. element
// Элемент, значения для которого нужно получить
//* 2. pseudo
// Указывается, если нужен стиль псевдоэлемента, например ::before). Пустая строка или отсутствие аргумента означают сам элемент.

getComputedStyle(element, [pseudo]);

//# Возвращает
//* Объект со стилями.
