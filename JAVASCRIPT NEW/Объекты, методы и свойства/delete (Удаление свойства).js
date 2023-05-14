//# оператор delete (Удаление свойства из объекта)
// Удалится и ключ и значение. Если вы знаете наверняка, что ключ в объекте вам больше не понадобится, удаляйте его оператором delete.

const obj = { one: 1 };
console.log(obj.one); // 1

delete obj.one;
console.log(obj.one); // undefined
