// Condition & ternary operator

function getStatus(age) {
  if (age < 14) return "Children";
  if (age < 20) return "Teen";
  if (age < 50) return "Adult";
  return "Old";
}

function getStatus2(age) {
  if (age < 14) return "Children";
  else if (age < 20) return "Teen";
  else if (age < 50) return "Adult";
  else return "Old";
}

// ternary operator
const getStatus3 = (age) =>
  age < 14 ? "Children" : age < 20 ? "Teen" : age < 50 ? "Adult" : "Old";

// swith
function getStatus4(model) {
  switch (model) {
    case "Mercedes":
    case "Porshe":
      return "$ 100 000";
    case "BMW":
      return "$ 80 000";
    case "Lada":
      return "$ 50 000";
    default:
      return null;
  }
}

// x &&= y
// Если x === true, выражение x = y сработает
let a = 1;
let b = 0;
a &&= 2;
console.log(a); // output: 2
b &&= 2;
console.log(b); // output: 0

// x ||= y
// Если x === false, выражение x = y сработает
const a1 = 50;
const b1 = '';
a1 ||= 10;
console.log(a1);  // output: 50
b1 ||= 'string is empty.';
console.log(b1); // output: "string is empty."

// x ??= y
// Если x имеет значение null или undefined.
const a2 = { limit: 50 };
a2.limit ??= 10;
console.log(a.limit); // output: 50
a2.speed ??= 25;
console.log(a.speed); // output: 25

