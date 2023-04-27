//# JSON.stringify()
// Преобразование в JSON: для того что бы превратить данные в JSON-код, используйте метод JSON.stringify(). Первым аргументом метод принимает значение, которое нужно преобразовать. Возвращает JSON - строку.

//# пример
const hero = {
  nickname: "BestHealerEver",
  level: 7,
  age: 141,
  race: "Gnome",
  isImmortal: false,
  things: ["sword", "helmet", "belt"],
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
