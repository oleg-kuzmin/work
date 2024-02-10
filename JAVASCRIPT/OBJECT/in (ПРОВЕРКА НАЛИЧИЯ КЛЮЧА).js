//# in (ПРОВЕРКА НАЛИЧИЯ КЛЮЧА)
// Оператор проверяет наличие ключа у объекта.

//# Синтаксис
//* Строка - имя ключа
'name' in object;

//# Возвращает
//* BOOLEAN-значение.
// Возвращает true, если ключ есть, и false, если нет.

//# Пример
const user = {
  firstName: 'Марина',
  username: 'zloyDuh',
};

console.log('firstName' in user); // true
console.log('age' in user); // false

//#