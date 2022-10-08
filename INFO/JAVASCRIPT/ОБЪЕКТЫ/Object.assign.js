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
