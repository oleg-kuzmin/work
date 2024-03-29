//# endsWith() (ПРОВЕРКА В КОНЦЕ СТРОКИ)
/*
- Метод endsWith сравнивает конец строки с переданной ему подстрокой.
- Он отвечает на вопрос: «Эта строка заканчивается вот таким набором символов?»
- Если ответ «да», метод возвращает true, иначе — false.
*/

//# Синтаксис
//* Строка - текст, на который заканчивается строка
string.endsWith('конец');

//# Возвращает
//* BOOLEAN-значение.
// Метод вернёт true если строка заканчивается переданным набором символов и false - если нет.

//# Пример
const theRealEnd = 'Это ещё не конец';
theRealEnd.endsWith('конец'); // true
