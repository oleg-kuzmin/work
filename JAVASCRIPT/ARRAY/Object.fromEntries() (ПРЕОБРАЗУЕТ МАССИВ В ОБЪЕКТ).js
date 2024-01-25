//# Object.fromEntries() (ПРЕОБРАЗУЕТ МАССИВ В ОБЪЕКТ)
// Метод преобразует массив, состоящий из элементов - других массивов [ 'ключ', значение ] в объект.

//# Синтаксис
//* Массив состоящий из элементов - других массивов [ 'ключ', значение ].
Object.fromEntries(array);

//# Возвращает
//* Объект.

//# Пример
const person = [
  ['name', 'Oleg'],
  ['isProgrammer', 'true'],
  ['cars', ['Lada', 'Porshe']],
];

console.log(Object.fromEntries(person));
// { name: 'Oleg', isProgrammer: 'true', cars: ['Lada', 'Porshe'] }
