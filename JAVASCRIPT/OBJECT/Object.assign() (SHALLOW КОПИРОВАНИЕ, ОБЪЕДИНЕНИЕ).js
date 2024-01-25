//# Object.assign() (SHALLOW КОПИРОВАНИЕ, ОБЪЕДИНЕНИЕ)
/*
- При копировании объектов или массивов JavaScript копирует данные только на один уровень вглубь.
- Непримитивные типы данных, такие как массивы и объекты, хранятся по ссылке. Так как копирование происходит только на один уровень вглубь, то при копировании массива происходит копирование ссылок на старые объекты в новый массив.
- Если необходимо полностью скопировать сложную структуру данных, например, массив с объектами, то нужно делать глубокое (deep) или полное копирование данных. JavaScript не содержит функций для глубокого копирования, лучший вариант сделать глубокую копию — сериализовать структуру в JSON и тут же распарсить.
*/

//# Синтаксис
//* 1. Объект - куда копируем
//* 2 и далее. Объекты - что копируем
Object.assign({}, objectDonor);

//# Возвращает
//* Итоговый объект.

//# Пример
const person = {
  name: 'Oleg',
  age: 100,
  isProgrammer: true,
  cars: ['Lada', 'Porshe'],
};

const profit = {
  cost: '$ 100 000',
};

//* Поверхностное копирование
const copy1 = Object.assign({}, profit);

//* Поверхностное копирование (спред оператор)
const copy2 = { ...person };

//* Глубокое копирование (JSON)
const deepCopy = JSON.parse(JSON.stringify(profit));
/*
У этого метода есть ограничение — копируемые данные должны быть сериализуемы.
Вот примеры несериализуемых данных: примитив undefined, функция, symbol - при вызове JSON.stringify получаем undefined.

Массивы и объекты - сериализуемы. Что будет если у них в качестве ключа или значения будут несериализуемые данные?
1) для массивов: такие значения будут превращены в null;
2) для объектов: такие значения будут опущены, а если symbol является ключом объекта, то он будет проигнорирован, даже при использовании функции replacer.
*/

//* Поверхностное объединение
const newObject1 = Object.assign(person, profit);

//* Поверхностное объединение (спред оператор)
const newObject2 = { ...person, ...profit };
