//# getTimezoneOffset() (РАЗНИЦА В МИНУТАХ С UTC)
// Возвращает смещение в минутах между текущей часовой зоной и UTC.

//# Синтаксис
//* без переменной
new Date().getTimezoneOffset();

//* с переменной
const currentDate = new Date();
currentDate.getTimezoneOffset();

//# Возвращает
//* Число - минуты смещения между текущей часовой зоной и UTC.
