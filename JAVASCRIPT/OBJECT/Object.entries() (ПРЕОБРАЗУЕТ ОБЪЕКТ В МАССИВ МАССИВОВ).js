//# Object.entries() (ПРЕОБРАЗУЕТ ОБЪЕКТ В МАССИВ МАССИВОВ)
// Метод возвращает массив, состоящий из элементов - других массивов [ 'ключ', значение ].

//# Синтаксис
//* Объект, который должен стать прототипом нового объекта
Object.entries(object);

//# Возвращает
//* Созданный массив.

//# Пример
const person = {
  name: 'Oleg',
  isProgrammer: true,
  cars: ['Lada', 'Porshe'],
};

console.log(Object.entries(person));
// [ ['name', 'Oleg'], ['isProgrammer', true], ['cars', ['Lada', 'Porshe'] ] ]
