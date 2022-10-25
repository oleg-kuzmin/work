// TODO Метод assign. Объединение объектов
const person = {
  name: "Oleg",
  age: 100,
  isProgrammer: true,
  cars: ["Lada", "Porshe"],
};

const profit = {
  cost: "$ 100 000",
};

console.log(Object.assign(person, profit));
// или с новым синтаксисом
console.log({ ...person, ...profit });

// Поверхностное копирование
let user = {
  name: "John",
  age: 30
};
let clone = Object.assign({}, user);

// Глубокое копирование
_.cloneDeep(obj)