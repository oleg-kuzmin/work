//# window.console.log(), window.console.dir(), window.console.table() (КОНСОЛЬ
/*
- console.log() — это метод, предназначенный для печати в консоль браузера.
- При написании скриптов иногда нужно увидеть промежуточный результат прямо в консоли браузера — это просто, удобно и не требует никакой дополнительной логики для отображения.
- console.log() отражает любой объект в консоли в удобном виде. Если это примитив — то его значением, если объект — его древовидной формой. DOM-элемент — его можно также раскрыть и увидеть, что внутри.
- Но console.log() показывает содержимое DOM, а не его свойства. Если нужно увидеть свойства DOM-элемента, то лучше использовать console.dir().
- console.log() удобен для исследования объектов и их вложенных элементов, а console.dir() удобен для просмотра свойств объекта.
- Если у нас есть массив с каким-то количеством однотипных объектов, то можно воспользоваться console.table().
*/

//# Синтаксис console.log()
//* Любой аргумент или переменная
console.log('hello'); // 'hello'

//# Синтаксис console.dir()
//* Любой аргумент или переменная
console.dir('hello'); // 'hello'

//# Синтаксис console.table()
//* Массив однотипных объектов
const data = [
  { section: 'HTML', count: 212 },
  { section: 'CSS', count: 121 },
  { section: 'JavaScript', count: 182 },
  { section: 'Tools', count: 211 },
];

console.table(data);
// ┌─────────┬──────────────┬───────┐
// │ (index) │   section    │ count │
// ├─────────┼──────────────┼───────┤
// │    0    │    'HTML'    │  212  │
// │    1    │    'CSS'     │  121  │
// │    2    │ 'JavaScript' │  182  │
// │    3    │   'Tools'    │  211  │
// └

//# Возвращает
//* Все что угодно.

//# Проверка мутации ссылочного типа
/*
- В браузере с помощью console.log() можно проверить мутацию ссылочного типа. Этого можно добиться, раскрыв выведенное значение в консоли. Всё что нам нужно сделать — нажать на иконку с перевёрнутым треугольником (►).
- Причина в том, что значение ссылочного типа читается браузером только при его первом раскрытии. Этот процесс также называют ленивым чтением (lazy-read).
- Google Chrome при этом показывает информационную иконку, при наведении на которую отобразится подсказка с текстом: "This value was evaluated upon first expanding. It may have changed since then."
*/

const disneyCharacters = [{ name: 'Mickey Mouse', type: 'mouse' }];
console.log(disneyCharacters); // Выведет массив с ДВУМЯ объектами
disneyCharacters.push({ name: 'Pluto', type: 'dog' });
