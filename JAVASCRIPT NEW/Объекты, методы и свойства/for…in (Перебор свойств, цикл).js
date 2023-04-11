//# for…in (Перебор свойств, цикл)
// При каждой итерации в переменную перебора записывается очередной ключ объекта.
// Похоже на поведение функции обратного вызова, перебирающей массив.

//# синтаксис
// emotion - переменная перебора
// object - имя объекта
// console.log(object[emotion]) - <тело цикла>

const object = {
  smile: '😃',
  kiss: '😚',
  smirk: '😏',
};

for (let emotion in object) {
  console.log(object[emotion]); // smile — 😃, kiss — 😚, smirk — 😏
}
