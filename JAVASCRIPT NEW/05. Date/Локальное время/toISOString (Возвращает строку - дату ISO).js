//# .toISOString() (Возвращает строку - дату ISO)

//* без переменной
new Date().toISOString(); // '2011-01-26T13:51:50.417Z' (string)

//* с переменной
const currentDate = new Date();
currentDate.toISOString(); // '2011-01-26T13:51:50.417Z' (string)
