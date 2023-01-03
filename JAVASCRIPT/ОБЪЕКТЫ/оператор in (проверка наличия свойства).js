// TODO оператор "in" для проверки существования свойства в объекте.
// Синтаксис:
"key" in object

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует

let obj = {
  test: undefined
};
alert( obj.test ); //  выведет undefined, значит свойство не существует?
alert( "test" in obj ); // true, свойство существует!