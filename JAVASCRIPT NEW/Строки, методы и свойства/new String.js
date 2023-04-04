//# new String
// String — это обёртка над примитивным строковым типом, которая содержит дополнительные методы работы со строками. Строки автоматически оборачиваются в обёртку String при вызове методов над ними.

//# пример
//* Обернуть строку в String можно вручную, вызвав конструктор new String(), создав объект
const primitive = 'приветики'; // typeof - string
const str = new String('приветики'); // typeof - object
console.log(primitive === 'приветики'); // true (строка равна строке)
console.log(str === 'приветики'); // false (строка не равна объекту, это разные типы даных)

//* Если вызывать методы String на примитиве, JavaScript автоматически обернёт его в обёртку
const primitive2 = 'привет!';
console.log(primitive2.toUpperCase()); // ПРИВЕТ!

//# общая информация
/* - Обёртка содержит дополнительные методы для работы со строками. Они не входят в стандарт типа данных «строка» и поэтому выделены в отдельный модуль.
- Обёртка используется автоматически и не требует дополнительной работы от программиста. JavaScript сам оборачивает строку, когда программист вызывает метод, находящийся в обёртке.*/
