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

// swith (всегда строгое равенство) (применяют, когда в условии только один ответ правильный)
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

let b = 3;
switch (b) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}

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