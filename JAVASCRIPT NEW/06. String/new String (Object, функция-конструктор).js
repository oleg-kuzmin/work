//# new String()
/*
- Создаст новый объект.
- String — это обёртка над примитивным строковым типом, которая содержит дополнительные методы работы со строками.
- Строки автоматически оборачиваются в обёртку String при вызове методов над ними.
- Обёртка содержит дополнительные методы для работы со строками.
- Они не входят в стандарт типа данных «строка» и поэтому выделены в отдельный модуль.
- Обёртка используется автоматически и не требует дополнительной работы от программиста.
- JavaScript сам оборачивает строку, когда программист вызывает метод, находящийся в обёртке.
*/

//# значения
//* Если вызывать методы String на примитиве, JavaScript автоматически обернёт его в обёртку
const primitive = 'привет!';
console.log(primitive.toUpperCase()); // ПРИВЕТ!

//* Обернуть строку в String можно вручную, вызвав конструктор new String(), создав объект
const primitiveHello = 'приветики'; // typeof - string
const string = new String('приветики'); // typeof - object
console.log(primitiveHello == 'приветики'); // true (строка равна строке)
console.log(string === 'приветики'); // false (строка не равна объекту, это разные типы даных)
