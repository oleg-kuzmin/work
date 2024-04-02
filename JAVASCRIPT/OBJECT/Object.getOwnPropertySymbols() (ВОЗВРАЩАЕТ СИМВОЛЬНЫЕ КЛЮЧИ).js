//# Object.getOwnPropertySymbols() (ВОЗВРАЩАЕТ СИМВОЛЬНЫЕ КЛЮЧИ)
// Статический метод возвращает массив всех свойств символа, найденных непосредственно в данном объекте.

//# Синтаксис
//* obj - искомый Объект
Object.getOwnPropertySymbols(obj);

//# Возвращает
//* Массив строк, соответствующий всем свойствам символов, найденных непосредственно в данном объекте.

//# Пример
const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols.length); // 2
