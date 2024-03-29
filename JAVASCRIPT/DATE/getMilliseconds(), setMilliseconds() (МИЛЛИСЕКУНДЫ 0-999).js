//# getMilliseconds() (МИЛЛИСЕКУНДЫ 0-999)
// Возвращает миллисекунды.

//# Синтаксис
//* без переменной
new Date().getMilliseconds();

//* с переменной
const currentDate = new Date();
currentDate.getMilliseconds();

//# Возвращает
//* Число - миллисекунды.

//# setMilliseconds() (МИЛЛИСЕКУНДЫ 0-999)
// Устанавливает миллисекунды. Изменяет объект - экземпляр класса new Date().

//# Синтаксис
setMilliseconds(millisecondsValue);
//* Число: millisecondsValue - целое число от 0 до 999, представляющее миллисекунды.

//# Возвращает
//* Число - количество миллисекунд от начала эпохи (1 января 1970 00:00:00 UTC) для полученного значения объекта.

//# Также есть методы getUTCMilliseconds() и setUTCMilliseconds()
