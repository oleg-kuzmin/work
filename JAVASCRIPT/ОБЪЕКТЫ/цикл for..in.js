// TODO Для перебора всех свойств объекта используется цикл for..in.
// Синтаксис:

for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}

let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// Не целочисленные свойства
let codes2 = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes2) {
  alert( +code ); // 49, 41, 44, 1
}

