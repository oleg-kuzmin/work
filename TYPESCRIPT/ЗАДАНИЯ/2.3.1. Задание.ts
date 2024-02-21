//# Задание
// Перепишите js-функцию на TypeScript

function slice(str, start, end) {
  let newStr = '';

  let lastIndex;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }

  return newStr;
}

console.log(slice('Это строка для копирования', 4, 10)); // 'строка'
