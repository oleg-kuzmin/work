//# switch-case-break-default
/* Оператор switch применяют, когда в условии только один ответ правильный.
- Каждый вариант описывают между ключевым словом case и инструкцией break.
- Каждый раз case завершается break: так движок JS понимает, что из конструкции switch-case нужно выйти.
- Если не поставить break, сработает код не только «нужного» case, но и всех под ним.
- Поэтому для последнего case писать break не нужно.
- Можно сознательно пропустить break, чтобы прописать логику сразу нескольких случаев.
- Ещё есть необязательная инструкция default. Сюда записывают код, который должен сработать, если ни один case не подошёл. */

//# пример
//* электронная очередь
const yourNumber = 'Л055';
let windowNumber;
switch (yourNumber) {
  case 'Л054':
    windowNumber = 1;
    break;
  case 'Л055':
    windowNumber = 2;
    break;
  case 'Л056':
    windowNumber = 3;
    break;
  case 'Л057':
    windowNumber = 4;
    break;
  case 'Л058':
    windowNumber = 5;
}
console.log(windowNumber); // 2

//* break пропущен специально
let catName;
const cartoon = 'Зима в Простоквашино';
switch (cartoon) {
  case 'Зима в Простоквашино':
  case 'Весна в Простоквашино':
  case 'Трое из Простоквашино':
    catName = 'Матроскин';
    break;
  case 'Лето кота Леопольда':
    catName = 'Леопольд';
}
console.log(catName); // "Матроскин"

//* default
let catName2;
const cartoon2 = 'Лето кота Леопольда';

switch (cartoon) {
  case 'Зима в Простоквашино':
    catName = 'Матроскин';
    break;
  default:
    catName = 'Леопольд';
}

console.log(catName); // "Леопольд"
