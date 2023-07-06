//# Типы данных (Виды)
/*
- Типы 1-7 называются «примитивными», их значениями могут быть только простые значения. (Хранение по значению)
1) число            - number (для любых чисел, ограничены диапазоном ±(2 в 53 степени -1)
2) большое число    - bigInt (для целых чисел произвольной длины)
3) строка           - string (может содержать ноль или больше символов, нет отдельного символьного типа)
4) булевый тип      - boolean (true || false)
5) неизвестно       - null (для неизвестных значений)
6) неопределен      - undefined (для неприсвоенных значений)
7) символ           - symbol (для уникальных идентификаторов.)

- Тип 8 называется ссылочным, объекты, массивы и функции это все объекты. (Хранение по ссылке)
8) объект           - object (для более сложных структур данных.)
*/

//# symbol
/*
- Символ (Symbol) — примитивный тип, значения которого создаются с помощью вызова функции Symbol. Каждый созданный символ уникален.
- Символы могут использоваться в качестве имён свойств в объектах. Символьные свойства могут быть прочитаны только при прямом обращении и не видны при обычных операциях.
- Создание символа через конструктор new Symbol() не поддерживается.
- Символы используются для создания скрытых свойств объектов. В отличие от свойств, ключом которых является строка, символьные свойства может читать только владелец символа. Скрытые свойства не видны при его обходе с помощью for...in.
- Это может пригодиться, когда необходимо добавить свойства объекту, который могут модифицировать другие части программы. Таким образом только вы сможете читать созданное свойство, а гарантия уникальности символов гарантирует и отсутствие конфликтов имён.
*/

//* Для создания символа нужно вызвать функцию Symbol
const sym = Symbol();
const symTwo = Symbol();
console.log(sym === symTwo); // false

//* При создании символа первым аргументом можно передать его описание. Оно ни на что не влияет и необходимо только для отладки
const mySym = Symbol('name');
const mySymTwo = Symbol('name');
console.log(mySym === mySymTwo); // false

//* Использование
const secondaryId = Symbol();

const user = {
  id: 193,
  name: 'Ольга',
  [secondaryId]: 'olga-1',
};

for (const prop in user) {
  console.log(prop, user[prop]); // id 193, name Ольга
}

console.log(user[secondaryId]); // olga-1

//* Глобальный реестр символов
/*
- Созданный символ уникален, но как быть, если он нужен в нескольких местах программы? Для решения этой проблемы существует глобальный реестр символов, он хранит символы по строковым ключам. При обращении по ключу всегда будет возвращаться один и тот же символ.

- Работа с реестром символов организована с помощью двух методов:
1) Symbol.for(ключ) — возвращает символ, хранящийся по ключу. Если символа ещё не существует, он создаётся автоматически.
2) Symbol.keyFor(символ) — возвращает строковый ключ, который хранит переданный символ или undefined, если символ не хранится в реестре.
*/
