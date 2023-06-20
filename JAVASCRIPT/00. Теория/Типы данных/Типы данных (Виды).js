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

//# bigInt
/*
- Тип большого целого BigInt — примитивный тип, который представляет целые числа больше 253-1. Эти числа уже не помещаются в стандартный примитив «число». Этот тип может использоваться для работы с произвольно большими целыми числами.
- Для BigInt определены операции сложения +, вычитания -, умножения *, взятия остатка от деления %, возведение в степень **.
- BigInt не сериализуется в JSON. Это усложняет использование этого типа данных в задачах взаимодействия с сервером.
*/

//* суффикс n в конец записи числа
const biggy = 9997000254740991n;

//* конструктор BigInt
const alsoBig = BigInt(9997000254999999);

//* операция деления также работает, но дробная часть будет отброшена
const seven = 7n;
const five = 5n;
console.log(seven / five); // 1


//# boolean
/*
- Логический или булев тип boolean может принимать лишь истинное (true) и ложное (false) значения.
- Обычно логическим переменным дают названия, начинающиеся с английских глаголов is, should, does, can и подобных.
*/

//* Первый способ создания — явно указать значение, используя ключевые слова true и false
const truthyValue1 = true; // Истина
const falsyValue1 = false; // Ложь

//* Второй способ создания — использовать метод Boolean
const truthyValue2 = Boolean(1); // «Истина»
const falsyValue2 = Boolean(''); // «Ложь»

//* Третий способ — использовать выражения, значениями которых будут «истина» или «ложь»
const truthyValue3 = Boolean(4 < 5); // true
const anotherTruthy3 = 4 < 5; // true
const falsyValue3 = Boolean(2 * 2 === 5); // false
const anotherFalsy3 = 2 * 2 === 5; // false

//# null
/*
- Null — это примитивный тип данных, который состоит из единственного значения null. Значение null используют, когда нужно обозначить намеренное отсутствие значения.
- null обозначает понятия «отсутствует», «ничего», «пусто» или «значение неизвестно». Оно всегда явно задаётся программистом, JavaScript автоматически не устанавливает его.
- В JavaScript null используется только для обозначения конца цепочки прототипов, чтобы показать, что следующий прототип отсутствует.
- В языке существует похожий примитив undefined, он обозначает, что значение ещё не установлено. Их можно легко спутать, потому что оба обозначают отсутствие значения. Разница состоит в том, что null обозначает намеренное отсутствие, а undefined — неявное.
- Например, сам JavaScript использует undefined для обозначения не проинициализированных переменных.
*/

//* намеренное отсутствие значения
let password = null;

//# undefined
/*
- Undefined — это примитивный тип данных, состоящий из одного значения undefined. Оно используется, чтобы обозначить неизвестное или неопределённое значение.
- Но будьте аккуратны, когда устанавливаете undefined свойствам объектов. Если у объекта person удалить age, то при обращении к несуществующему свойству также вернётся undefined.
- undefined обозначает, что значение по каким-то причинам ещё не установлено или неизвестно. В этом контексте его использует сам язык JavaScript.
- В языке существует похожий примитив null. Он обозначает, что значение отсутствует. undefined и null можно легко спутать, потому что это близкие понятия. Различие состоит в том, что null обозначает отсутствие значения, а undefined — что значение неизвестно или не задано.
*/

//* JavaScript автоматически устанавливает значение undefined объявленным переменным, которые не были проинициализированы значением
let userName;
console.log(userName); // undefined (в Chrome и Safari)
console.log(userName); // undefined (в Firefox)

//* Также JavaScript автоматически устанавливает значение undefined в аргумент функции, если значение не передали при вызове
function hello(name) {
  console.log('Привет, ' + name);
}
hello('Витя'); // Привет, Витя
hello(); // Привет, undefined

//* Вручную установленное undefined используют, чтобы обозначить неизвестное значение
const person = {
  name: 'Пётр',
  lastName: 'Романов',
  age: undefined,
};

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
