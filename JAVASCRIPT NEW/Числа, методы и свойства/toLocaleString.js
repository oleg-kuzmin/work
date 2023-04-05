//# .toLocaleString()
// Преобразует число в строку, учитывая локаль пользователя.

//# пример
const bigNumber = 100_000_000;
console.log(bigNumber.toLocaleString('ru')); // 100 000 000
console.log(bigNumber.toLocaleString('en-US')); // 100,000,000
console.log(bigNumber.toLocaleString('ar-SA')); // ١٠٠٬٠٠٠٬٠٠٠

const bigNumber2 = 100_000_000;
console.log(bigNumber.toLocaleString('es', { style: 'currency', currency: 'EUR' })); // 100.000.000,00 €
console.log(bigNumber.toLocaleString('ru', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })); // 100 000 000 ₽

//# общая информация
/* Локаль — это информация о языке пользователя, а также региональных настройках: какие символы чисел используются, какие разделители между разрядами считаются стандартными и так далее.
- Локаль представляет собой строку сформированную по спецификации. Чаще всего используются два вида:
1) код_языка.
Например, 'ru' (русский язык), 'de' (немецкий), 'en' (английский).
2) код_языка-код_региона.
Например, de-AT (австрийский немецкий), 'en-US' (американский английский), es-AR (аргентинский испанский).
- По умолчанию используется локаль браузера, но первым аргументов можно передать любую.
- Вторым аргументом в метод можно передать объект с тонкими настройками форматирования. Например, указать, что форматируемое число — деньги.*/
