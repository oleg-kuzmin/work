//# Symbol.for (ГЛОБАЛЬНЫЙ СИМВОЛ)
/*
- Созданный символ уникален, но как быть, если он нужен в нескольких местах программы? Для решения этой проблемы существует глобальный реестр символов, он хранит символы по строковым ключам. При обращении по ключу всегда будет возвращаться один и тот же символ.
*/

//# Синтаксис
Symbol.for(ключ);
// Возвращает символ, хранящийся по ключу. Если символа ещё не существует, он создаётся автоматически.

Symbol.keyFor(символ);
// Возвращает строковый ключ, который хранит переданный символ или undefined, если символ не хранится в реестре.

//# Пример
const secondaryId = Symbol();

const user = {
  id: 193,
  name: 'Ольга',
  [secondaryId]: 'olga-1',
};

console.log(Symbol.keyFor(secondaryId)); // undefined

const newSym = Symbol.for('registryKey');
const newestSym = Symbol.for('registryKey');
console.log(newSym === newestSym); // true

user[newSym] = 'hello';
console.log(Symbol.keyFor(newSym)); // registryKey
console.log(user); // { id: 193, name: 'Ольга' }
console.log(user[newSym]); // 'hello'
