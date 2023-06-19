//# Convert a string to an array (8kyu)
/*
Напишите функцию, которая разбивает строку и преобразует ее в массив слов.

"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

//* мое решение
function stringToArray(string) {
  return string.split(' ');
}
