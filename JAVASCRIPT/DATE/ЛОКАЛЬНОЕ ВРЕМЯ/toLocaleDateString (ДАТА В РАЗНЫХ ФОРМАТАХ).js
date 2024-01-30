//# toLocaleDateString (ДАТА В РАЗНЫХ ФОРМАТАХ)
// Для отображения Date в различных форматах существует метод toLocaleDateString.

//# Синтаксис
toLocaleDateString(local, options);

//* Строка - local
// это необязательный параметр, который является строкой или массивом строк с языковой меткой BCP 47. Например, en-US или de-DE. Локаль хранит региональные настройки о формате дат, номеров, адресов.

//* Объект - options
/* Необязательный параметр с объектом настроек. Доступные свойства:
1) localeMatcher — алгоритм поиска локали, используется для выбора подходящей локали. Принимает значения lookup или best fit. По умолчанию best fit.
2) timeZone — значение используемого часовой зоны. Все браузеры должны принимать значение UTC, значение по умолчанию равно значению часовой зоны среды выполнения. Формат принимаемого значения может различаться в различных браузерах.
3) hour12 — значение, которое определяет, использовать ли 12-часовой формат вывода. Принимает true или false.
4) formatMatcher — алгоритм поиска формата, используется для выбора формата отображения. Принимает значения basic или best fit. По умолчанию best fit.
5) timeZoneName — формат названия часовой зоны. Принимает long или short.
6) weekday — значение дня недели. Принимает narrow, short и long.
7) era — значение эры. Принимает narrow, short и long.
8) year — значение года. Принимает numeric и 2-digit.
9) month — значения месяца. Принимает numeric, 2-digit, narrow, short и long.
10) day — значения дня. Принимает numeric и 2-digit.
11) hour — значения часа. Принимает numeric и 2-digit.
12) minute — значения минут. Принимает numeric и 2-digit.
13) second — значения секунд. Принимает numeric и 2-digit.

- Браузеры обязаны поддерживать следующие наборы настроек отображения:
1) weekday, year, month, day, hour, minute, second
2) weekday, year, month, day
3) year, month, day
4) year, month
5) month, day
6) hour, minute, second
7) hour, minute
*/

//# Пример
const currentDate = new Date('August 14, 2022 14:15:30');

const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'long',
};

console.log(currentDate.toLocaleDateString('ru-RU', options));
// 14.08.2022, 14:15:30 Москва, стандартное время

console.log(currentDate.toLocaleDateString('en-US', options));
// 8/14/2022, 2:15:30 PM Moscow Standard Time
