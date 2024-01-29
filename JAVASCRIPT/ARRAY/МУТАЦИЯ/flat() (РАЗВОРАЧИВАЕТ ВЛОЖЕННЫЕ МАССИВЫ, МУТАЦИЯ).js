//# array.flat() (РАЗВОРАЧИВАЕТ ВЛОЖЕННЫЕ МАССИВЫ, МУТАЦИЯ)
// Разворачивает вложенные массивы.

//# Синтаксис
array.flat();

//# Возвращает
//* Измененный массив.

//# Пример
const cars = ['Lada', 'Porshe', ['Mercedes', 'BWM']];
console.log(cars); // [ 'Lada', 'Porshe', ['Mercedes', 'BWM'] ]
console.log(cars.flat()); // [ 'Lada', 'Porshe', 'Mercedes', 'BWM']
