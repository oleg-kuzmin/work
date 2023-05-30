//# .flat() (Разворачивает вложенные массивы)

const cars = ['Lada', 'Porshe', ['Mercedes', 'BWM']];
console.log(cars); // [ 'Lada', 'Porshe', ['Mercedes', 'BWM'] ]
console.log(cars.flat()); // [ 'Lada', 'Porshe', 'Mercedes', 'BWM']