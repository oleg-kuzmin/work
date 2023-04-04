//# .substring()
/* Самый удобный способ получить подстроку — это метод substring(). Метод substring() копирует указанную часть строки и возвращает копию в качестве результата. Метод принимает один или два аргумента.
- При вызове с двумя аргументами нужно передать индекс символа, с которого начинать копирование и индекс символа, на котором закончить. Индекс окончания не включается в копию.*/

//# пример
const phrase = 'javascript';
const substring = phrase.substring(4, 10);
console.log(substring); // script
console.log(phrase.substring(4, 9)); // scrip

//* Если указан только один аргумент, то результатом будет строка, начинающаяся с указанного индекса и до конца строки:
const phrase2 = 'javascript';
console.log(phrase2.substring(0, 4)); // java
console.log(phrase2.substring(1)); // avascript
console.log(phrase2.substring(4)); // script

//* поменяв местами индекс старта и индекс окончания копирования substring() поймёт, что копировать
console.log(phrase2.substring(4, 0)); // java
