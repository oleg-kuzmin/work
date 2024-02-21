//# (ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ)
/*
- TS умеет делать вывод типов - самостоятельно вычислять тип значения у выражения.
- Явное определение типа обычно можно не писать.

- Но есть исключения, всегда нужно указывать тип:
1. Eсли возвращаемый тип - any, undefined, null, unknown.
2. Если объявление переменной и запись в нее первого значения на разных строчках.

- Для объектов TS проверяет только минимальное наличие всех ключей из интерфейса, если свойств в объекте больше - ошибки не будет.
*/

//* примитивы
const count: number = 42;
const man: string = 'John Snow';
const valid: boolean = true;
const u: undefined = undefined;
const n: null = null;
const symb: symbol = Symbol('as');
