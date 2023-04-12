//# function declaration
// Объявленную функцию можно вызвать до объявления, функциональное выражение — нельзя.

//# пример
//* может принимать аргументы
function showMessage(user, message) {
  console.log(user + ": " + message);
}
//* использование параметра по умолчанию (text = "текст не добавлен")
function showMessage(from, text = "текст не добавлен") {
  console.log(from + ": " + text);
}
//* использование в качестве параметра по умолчанию вызов другой функции (text = anotherFunction())
function showMessage(from, text = anotherFunction()) {
  console.log(from + ": " + text);
  // если параметр text не передан, то выполнится функция anotherFunction()
}

//* рекурсивные функции (внутри функции вызывает сама себя)
function fac(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}
console.log(fac(3)); // 6