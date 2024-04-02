//# for in (ПЕРЕБОР СВОЙСТВ ОБЪЕКТА С ПРОТОТИПАМИ)
/*
- не перебирает свойства с символами.
- for...in позволяет пройти в цикле по перечисляемым свойствам объекта, в том числе по свойствам из прототипа.
- Перечисляемые свойства – это свойства, которые разработчик добавляет объекту. Встроенные свойства, например length у массива, не обходятся в цикле for...in.
- Перечисляемые свойства объекта – это свойства, которые явно помечены такими. Сказать свойству, что оно перечисляемое, можно через специальный метод defineProperty(). Но для простоты все свойства, которые добавляются к объекту, являются перечисляемыми по умолчанию. Встроенные свойства не перечисляется. Например, метод indexOf() у объекта String или метод toString() у любого объекта не участвуют в цикле for...in.
- В цикле будут перечислены не только собственные свойства объекта, но и все перечисляемые свойства из прототипа объекта и прототипа прототипа и так далее
- Похоже на поведение функции обратного вызова, перебирающей массив.
- Если во время выполнения for...in добавлять свойства в объект, то нет гарантии, что это свойство попадёт в цикл. Свойство, удалённое из объекта до того, как до него дошёл цикл, не будет участвовать в итерации.
- Порядок перечисления:
- В стандарте языка нет описания того, как свойства должны перечисляться, потому порядок будет зависеть от реализации в конкретном движке браузера. Но есть базовые правила, которое можно встретить во всех браузерах:
1) Строковые имена свойств будут перечисляться в порядке их присвоения к объекту
2) Числовые свойства будут перечисляться в отсортированном порядке по возрастанию
- Несмотря на договорённости о порядке вывода числовых ключей, не нужно использовать for...in для перебора массива. В будущем правила могут измениться. Для перебора у массива есть собственные методы: forEach(), map() и другие. В этих методах порядок перебора гарантирован.
*/

//# Синтаксис
//* Этот цикл обходит все свойства, по очереди сохраняя ключ каждого в переменной перебора.
for (let переменная in коллекция) {
  // Код, который нужно выполнить несколько раз
}

//# Пример
const cat = {
  name: 'Борис',
  color: 'red',
  age: 8,
};

for (const key in cat) {
  console.log(`${key} – ${cat[key]}`);
}

// name – 'Борис',
// color – 'red',
// age – 8

//# Разница между "for in" И "for of"
let array = [1, 2, 3];
array.property = 'value';

for (let i in array) {
  console.log(i); // выводит "0", "1", "2", "property"
}

for (let i of array) {
  console.log(i); // выводит "1", "2", "3"
}
