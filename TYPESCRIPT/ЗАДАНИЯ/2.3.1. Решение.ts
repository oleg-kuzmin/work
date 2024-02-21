//# Решение
// Перепишите js-функцию на TypeScript

// нужно объявить опциональный параметр
function slice1(str: string, start: number, end?: number): string {
  let newStr = '';

  let lastIndex: number; // нужно объявить аннотацию, т.к. мы не назначаем переменной никакого значения

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
