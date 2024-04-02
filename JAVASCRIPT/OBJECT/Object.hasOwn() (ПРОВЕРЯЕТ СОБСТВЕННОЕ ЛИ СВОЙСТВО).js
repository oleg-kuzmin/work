//# Object.hasOwn() (ПРОВЕРЯЕТ СОБСТВЕННОЕ ЛИ СВОЙСТВО)
//  Проверяет принадлежность свойства самому объекту, исключая свойства прототипов.

//# Синтаксис
//* obj: Объект для проверки
//* prop: Строка - имя проверяемого свойства
Object.hasOwn(obj, prop);

//# Возвращает
//* BOOLEAN-значение.
// Возвращает true, если свойство принадлежит самому объекту.

//# Пример
const object1 = {
  prop: 'exists',
};

console.log(Object.hasOwn(object1, 'prop')); // true
console.log(Object.hasOwn(object1, 'toString')); // false
console.log(Object.hasOwn(object1, 'undeclaredPropertyValue')); // false
