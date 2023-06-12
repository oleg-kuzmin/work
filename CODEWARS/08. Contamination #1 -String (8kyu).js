//# Contamination #1 -String (8kyu)
/*
ИИ заразил текст персонажем!!
Этот текст теперь полностью изменен на этот символ.
Если текст или символ пусты, вернуть пустую строку.
Никогда не будет случая, когда оба пусты, так как ничего не происходит!!
Примечание. Символ представляет собой строку длиной 1 или пустую строку.

Пример:
text before = "abc"
character   = "z"
text after  = "zzz"
*/

//* мое решение
function contamination(text, char) {
  return !text || !char ? '' : text.split('').fill(char).join('');
}

//* лучшее на сайте
function contamination(text, char) {
  return char.repeat(text.length);
}

function contamination(text, char) {
  return text.replace(/./g, char);
}

console.log(contamination('abc', 'z'));
