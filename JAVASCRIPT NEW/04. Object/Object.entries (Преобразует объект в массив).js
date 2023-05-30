//# Object.entries() (Преобразует объект в массив)
// Метод возвращает все пары «ключ-значение».

//# пример
const paulMcCartney = {
  yesterday: 'all my troubles seemed so far away',
};
console.log(Object.entries(paulMcCartney)); // [["yesterday", "all my troubles seemed so far away"]]

const person = {
  name: 'Oleg',
  age: 100,
  isProgrammer: true,
  cars: ['Lada', 'Porshe'],
};
console.log(Object.entries(person)); // [ ['name', 'Oleg'], ['age', 100], ['isProgrammer', true], ['cars', ['Lada', 'Porshe'] ] ]
