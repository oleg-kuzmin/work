//# bigInt
// Тип большого целого BigInt — примитивный тип, который представляет целые числа больше 253-1. Эти числа уже не помещаются в стандартный примитив «число». Этот тип может использоваться для работы с произвольно большими целыми числами.

//# пример
//* суффикс n в конец записи числа
const biggy = 9997000254740991n;

//* конструктор BigInt
const alsoBig = BigInt(9997000254999999);

//* операция деления также работает, но дробная часть будет отброшена
const seven = 7n;
const five = 5n;
console.log(seven / five); // 1

//# общая информация
/* Для BigInt определены операции сложения +, вычитания -, умножения *, взятия остатка от деления %, возведение в степень **.
- BigInt не сериализуется в JSON. Это усложняет использование этого типа данных в задачах взаимодействия с сервером. */
