//# Regex validate PIN code (7kyu)
/* Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
Если функции передана допустимая строка PIN-кода, верните true, иначе верните false. */

//* мое решение c проверкой на тип
function validatePIN(pin) {
  if (
    (typeof pin === 'number' && Number.isFinite(pin) && (String(pin).length === 4 || String(pin).length === 6)) ||
    (typeof pin === 'string' && (pin.length === 4 || pin.length === 6))
  ) {
    const noNumber = /\D/g;
    if (!noNumber.test(pin)) {
      return true;
    } else return false;
  } else return false;
}

//* мое решение без проверки на тип
function validatePIN(pin) {
  if (typeof pin === 'string' && (pin.length === 4 || pin.length === 6)) {
    const noNumber = /\D/g;
    if (noNumber.test(pin)) {
      return false;
    } else return true;
  } else return false;
}

//* лучшеe на сайте
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
