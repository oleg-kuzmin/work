//# substring() (КОПИРУЕТ ЧАСТЬ СТРОКИ)
/*
- Самый удобный способ получить подстроку — это метод substring().
- Метод substring() копирует указанную часть строки и возвращает копию в качестве результата.
- Индекс окончания не включается в копию.
- Поменяв местами аргументы (индекс старта и индекс окончания копирования) substring() поймёт, что копировать.
*/

//# Синтаксис
string.substring(4, 10);
//* 1. Число - индекс символа, с которого начинать копирование
// Eсли указан только один аргумент, то результатом будет строка, начинающаяся с указанного индекса и до конца строки.

//* 2. Число - индекс символа, на котором закончить копирование (опционально)

//# Возвращает
//* Копию строки.

//# Пример
const phrase = 'javascript';
const substring = phrase.substring(4, 10);
console.log(substring); // script
console.log(phrase.substring(4, 9)); // scrip
