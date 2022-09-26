const person = {
  name: "Oleg",
  age: 100,
  city: "Spb",
  getName: function () {
    return this.name;
  },
  getName2() {
    return this.name;
  },
};

const profit = {
  cost: "$ 100 000",
};

console.log(person.getName2());

// TODO Метод assign. Объединение объектов
console.log(Object.assign(person, profit));
console.log({ ...person, ...profit });

// TODO Метод entries. Преобразует объект в массив (по строчкам ключ-значение)
console.log(Object.entries(person));

// Keys and Values
console.log(Object.keys(person));
console.log(Object.values(person));
