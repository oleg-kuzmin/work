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