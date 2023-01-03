// в объект можно передать данные в виде ключа-значения,
const person = {               // object
  name: 'Oleg',                // string
  age: 100,                    // number
  isProgrammer: true,          // boolean
  cars: ['Lada', 'Porshe']     // array
}

// Короткий способ
function makeUser(name, age) {
  return {
    name,
    age,
    // ...другие свойства
  };
}

let user2 = makeUser("John", 30);
alert(user.name); // John

// TODO доступ к свойству через точку
console.log(person.name);

// TODO доступ к свойству через []
console.log(person[info]);

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// TODO удаление свойства-
delete person.name;

// TODO Свойство из нескольких слов
// имя свойства из нескольких слов должно быть в кавычках
let user = {
  name: "John",
  age: 30,
  "likes birds": true
};
// присваивание значения свойству
user["likes birds"] = true;
// получение значения свойства
alert(user["likes birds"]); // true
// удаление свойства
delete user["likes birds"];

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