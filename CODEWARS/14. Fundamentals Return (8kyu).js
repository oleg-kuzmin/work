//# Fundamentals Return (8kyu)
/*
Создайте несколько функций, которые будут возвращать сумму, разность, модуль, произведение, частное и показатель степени соответственно.

Используйте следующие имена функций:

addition = add
multiply = multiply
division = divide (both integer and float divisions are accepted)
modulus = mod
exponential = exponent
subtraction = subt

Note: All math operations will be: a (operation) b
*/

//* мое решение
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}
