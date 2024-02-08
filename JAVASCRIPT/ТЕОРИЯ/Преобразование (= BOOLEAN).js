//# Преобразование (= BOOLEAN)
/* В круглых скобках условия if любые данные всегда приводятся к логическому типу
Главное правило: Все, что не приводится к false, будет true.
1) false               // false
2) 0                   // false
3) -0                  // false
4) ''                  // false
5) null                // false
6) undefined           // false
7) NaN                 // false
8) 0n(тип BigInt)      // false
*/

Boolean('Непустая строка'); // true
Boolean(' ');               // true
Boolean('');                // false
Boolean(1);                 // true
Boolean(0);                 // false
Boolean(-0);                // false
Boolean(NaN);               // false
Boolean(null);              // false
Boolean(undefined);         // false
Boolean({});                // true
Boolean([]);                // true