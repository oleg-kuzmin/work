// в объект можно передать данные в виде ключа-значения,
const person = {               // object
  name: 'Oleg',                // string
  age: 100,                    // number
  isProgrammer: true,          // boolean
  cars: ['Lada', 'Porshe']     // array
}

// доступ к элементу
console.log(person.name);

// а также переменные (значения можно не писать если они дублируются)
const person2 = {
  myName, // (|| name: 'Oleg' || name: name)
  age,
  isProgrammer,
  cars
}

// работа с контекстом
const person3 = {
  name: "Oleg",
  age: 100,
  city: "Spb",
  getName2: function () {
    return this.name;
  },
  // или
  getName3() {
    return this.name;
  },
};
console.log(person.getName2());