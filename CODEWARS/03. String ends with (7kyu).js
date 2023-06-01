//# String ends with (7kyu)
/*
Завершите решение, чтобы оно
возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).


solution('abc', 'bc') // true
solution('abc', 'd') // false

*/

//* мое решение
function solution(str, ending) {
  return str.endsWith(ending);
}
