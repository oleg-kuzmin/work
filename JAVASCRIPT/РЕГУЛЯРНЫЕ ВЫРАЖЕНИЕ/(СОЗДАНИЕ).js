//# (СОЗДАНИЕ)
/*
- https://regex101.com/
- Регулярное выражение regexp в обоих случаях является объектом встроенного класса RegExp.
- Основная разница между этими двумя способами создания заключается в том, что слеши /.../ не допускают никаких вставок переменных (наподобие возможных в строках через ${...}). Они полностью статичны.
- Слеши используются, когда мы на момент написания кода точно знаем, каким будет регулярное выражение – и это большинство ситуаций. А new RegExp – когда мы хотим создать регулярное выражение «на лету» из динамически сгенерированной строки.
- Cлеши /.../ говорят JavaScript о том, что это регулярное выражение. Они играют здесь ту же роль, что и кавычки для обозначения строк.
*/

//# Длинный синтаксис
regexp = new RegExp('шаблон', 'флаги');
//* Шаблон - строка, содержащая регулярное выражение.
//* Флаги - дополнительные флаги, определяющие, как будет работать регулярное выражение.

//# Короткий синтаксис
regexp = /шаблон/; // без флагов
regexp = /шаблон/gim; // с флагами gim

//# Пример
regexp = new RegExp('\\d', 'g'); // регулярное выражение, которое ищет все цифры в строке
regexp = /\d/g; // регулярное выражение, которое ищет все цифры в строке
