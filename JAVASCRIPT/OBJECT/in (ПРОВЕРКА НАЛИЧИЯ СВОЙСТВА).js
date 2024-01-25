//# in (ПРОВЕРКА НАЛИЧИЯ СВОЙСТВА)
// Оператор проверяет наличие свойства у объекта.

//# Синтаксис
//* Строка - имя свойства
'name' in object;

//# Возвращает
//* BOOLEAN-значение.
// Возвращает true, если свойство есть, и false, если нет.

//# Пример
const user = {
  firstName: 'Марина',
  username: 'zloyDuh',
};

console.log('firstName' in user); // true
console.log('age' in user); // false
