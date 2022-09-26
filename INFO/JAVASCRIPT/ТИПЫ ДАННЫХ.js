const a = 1; // константа не меняется, (!но может менятся если является объектом)
let   b = 2; // изменяемая переменная
var   c = 3; // устаревшее, область видимости максимальная

/*
строка           - string
число            - number
булево значение  - boolean (true && false)
массив           - array (может содержать строки, числа, объекты и тд)
объект           - object ()
неопределен      - undefined (когда переменной нет вообще)
неизвестен       - null (переменная есть но данные неизвестны)
*/

const myName = 'Oleg';
const age = 100;
const isProgrammer = true;
const cars = ['Lada', 'Porshe'];

const person = {               // object
  myName: 'Oleg',              // string
  age: 100,                    // number
  isProgrammer: true,          // boolean
  cars: ['Lada', 'Porshe']     // array
}

const person2 = {
  myName,
  age,
  isProgrammer,
  cars
}



