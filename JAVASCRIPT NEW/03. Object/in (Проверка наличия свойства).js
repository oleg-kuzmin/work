//# in (Проверка наличия свойства)
// Для проверки, есть ли свойство у объекта, используйте оператор in:

const user = {
  firstName: 'Марина',
  username: 'zloyDuh',
};

console.log('firstName' in user); // true
console.log('age' in user); // false
