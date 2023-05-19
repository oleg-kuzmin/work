//# .toUTCString() (Возвращает строку - дату UTC)

//* без переменной
new Date().toUTCString(); // 'Wed Jan 26 2011 16:40:50 GMT+0300' (string)

//* с переменной
const currentDate = new Date();
currentDate.toUTCString(); // 'Wed Jan 26 2011 16:40:50 GMT+0300' (string)
