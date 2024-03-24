//# Преобразование (Логическое)
/*
- Происходит в логических операциях, но также может быть выполнено явно с помощью функции Boolean(value).
- В круглых скобках условия if любые данные всегда неявно приводятся к логическому типу.

Правила преобразования:
- Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false:
1. false               // false
2. 0                   // false
3. -0                  // false
4. ''                  // false
5. null                // false
6. undefined           // false
7. NaN                 // false
8. 0n(тип BigInt)      // false

- Все остальные значения становятся true.
*/

//# Пример
Boolean('Непустая строка'); // true
Boolean(' ');               // true
Boolean('');                // false
Boolean(1);                 // true
Boolean(-1);                // true
Boolean(0);                 // false
Boolean(-0);                // false
Boolean(NaN);               // false
Boolean(null);              // false
Boolean(undefined);         // false
Boolean({});                // true
Boolean([]);                // true
