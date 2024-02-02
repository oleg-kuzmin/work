//# JSON.stringify() (ПРЕОБРАЗУЕТ ОБЪЕКТ В JSON)
/*
- Для того что бы превратить данные в JSON-код, используйте метод JSON.stringify(). Первым аргументом метод принимает значение, которое нужно преобразовать.
- JSON основан на JavaScript, но является независимой от языка спецификацией для данных и может использоваться почти с любым языком программирования, поэтому он пропускает некоторые специфические значения объектов JavaScript:
1. Методы объектов (функции) — {greetings() {alert("Hello World!")}};
2. Ключи со значением undefined — {"value": undefined}.
*/

//# Синтаксис
//* Объект
JSON.stringify(object);

//# Пример
const hero = {
  nickname: 'BestHealerEver',
  level: 7,
  age: 141,
  race: 'Gnome',
  isImmortal: false,
  things: ['sword', 'helmet', 'belt'],
  money: {
    gold: 6387,
    silver: 1264,
    bronze: 931,
    diamonds: 2,
  },
};

console.log(typeof hero); // object
console.log(typeof JSON.stringify(hero)); // string
console.log(JSON.stringify(hero)); // '{"nickname":"BestHealerEver","level":7,"age":141,"race":"Gnome","isImmortal":false,"things":["sword","helmet","belt"],"money":{"gold":6387,"silver":1264,"bronze":931,"diamonds":2}}'
