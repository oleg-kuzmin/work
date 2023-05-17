//# Object.assign()
// Он принимает на вход два и более аргументов. Первый аргумент — объект-акцептор: скопированные ключи и их значения будут записаны в него. Второй и последующие аргументы — это объекты-доноры: из них будут скопированы все свойства.

//# пример
//* использование метода Object.assign()
const firstObj = {
  one: 1,
  two: 2,
};
const secondObj = Object.assign({}, firstObj);
console.log(secondObj === firstObj); // false

//* использование rest оператора
const superUser = {
  firstName: 'Марина',
  username: 'zloyDuh',
};
const copy = { ...superUser };
console.log(copy); // { firstName: 'Марина', username: 'zloyDuh'}
