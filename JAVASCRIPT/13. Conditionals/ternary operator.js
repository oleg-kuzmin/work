//# Ternary Operator (Тернарный оператор)
/*
- Тернарный оператор работает с тремя операндами: одним условием и двумя выражениями.
- Унарные: один операнд, бинарные: два операнда, тернарные: три операнда.
- Возвращает первое выражение, если условие истинно и второе, если условие ложно.
- Используется как компактная замена условного оператора if...else.
- Первое выражение вернётся, если результат проверки true, второе — если false.
- Главное отличие — тернарный оператор возвращает значение, а условная конструкция — нет.
- Так как результат работы тернарного оператора можно записать в переменную, то смело делаем вывод, тернарный оператор — выражение.
- При выборе между if...else и тернарным оператором в приоритет нужно ставить читабельность. Код читается чаще, чем пишется, поэтому чем лучше код читается, тем легче его понимать и изменять.
*/

//# синтаксис
(условие) ? (значениеЕслиTrue) : (значениеEслиFalse)

//# пример
//* 2 значения
const love = true;
const result = love ? 'к сердцу прижмёт' : 'к чёрту пошлёт';
console.log(result); // "к сердцу прижмёт"

//* несколько значений и стрелочная функция
const getStatus = age => (age < 14 ? 'Children' : age < 20 ? 'Teen' : age < 50 ? 'Adult' : 'Old');
