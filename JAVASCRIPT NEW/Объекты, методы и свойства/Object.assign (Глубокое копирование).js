//# Object.assign (Глубокое копирование)
/* примерный алгоритм:
1) циклом начинаем проходить по всем свойствам объекта;
2) если встречаем примитивное свойство — копируем;
3) если встречаем свойство-объект — повторяем для него все шаги, начиная с первого. */

//# пример
const original = {
  one: 1,
  two: 2,
  three: { message: 'I love JS' },
};

const copy = Object.assign({}, original); // копируем все примитивы и ссылки на объект
copy.three = Object.assign({}, original.three); // копируем объект внутри объекта

console.log(copy); // { one: 1, two: 2, three: { message: "I love JS" } } (это копия)
console.log(copy === original); // false (копия имеет общие корни с оригиналом?)
console.log(copy.three === original.three); // false (свойство three копии имеет общие корни со свойством three оригинала?)

//# глубокая копия (сработает только если в свойствах нет функции)
const userDeepCopy = JSON.parse(JSON.stringify(user));
