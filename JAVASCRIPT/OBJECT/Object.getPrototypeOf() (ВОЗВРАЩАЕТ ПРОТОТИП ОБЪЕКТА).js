//# Object.getPrototypeOf() (ВОЗВРАЩАЕТ ПРОТОТИП ОБЪЕКТА)
// Статический метод Object.getPrototypeOf() возвращает прототип указанного объекта. Другими словами - значение внутреннего свойства [[Prototype]].

//# Синтаксис
//* Объект, значение прототипа которого мы хотим получить
Object.getPrototypeOf(object);

//# Возвращает
//* Значение свойства [[Prototype]].

//# Пример
const prototype1 = {};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1); // true
