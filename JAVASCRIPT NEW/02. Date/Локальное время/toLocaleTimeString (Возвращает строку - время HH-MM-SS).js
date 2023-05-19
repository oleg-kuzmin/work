//# .toLocaleTimeString() (Возвращает строку - время HH-MM-SS)

//* без переменной
new Date().toLocaleTimeString(); // '17:46:28' (string)

//* с переменной
const currentDate = new Date();
currentDate.toLocaleTimeString(); // '17:46:28' (string)
