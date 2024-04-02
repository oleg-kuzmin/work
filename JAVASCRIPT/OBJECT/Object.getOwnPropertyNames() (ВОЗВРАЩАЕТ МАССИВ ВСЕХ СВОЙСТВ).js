//# Object.getOwnPropertyNames() (ВОЗВРАЩАЕТ МАССИВ ВСЕХ СВОЙСТВ)
// Статический метод возвращает массив всех свойств (включая неперечисляемые свойства, за исключением тех, которые используют символ), найденных непосредственно в данном объекте.

//# Синтаксис
//* obj - искомый Объект
Object.getOwnPropertyNames(obj);

//# Возвращает
//* Массив строк, соответствующий свойствам, найденным непосредственно в данном объекте.

//# Пример
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1)); // ["a", "b", "c"]
