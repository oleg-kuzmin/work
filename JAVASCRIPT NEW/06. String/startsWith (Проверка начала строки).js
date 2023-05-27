//# .startsWith()
/*
- Метод startsWith сравнивает начало строки с переданной ему подстрокой.
- Он отвечает на вопрос: «Эта строка начинается с вот такого набора символов?»
- Если ответ «да», метод возвращает true, иначе — false.
*/

//# пример
const phrase = 'папа мыл ногу';
console.log(phrase.startsWith('па')); // true
console.log(phrase.startsWith('мыл')); // false
console.log(phrase.startsWith('тикток')); // false
