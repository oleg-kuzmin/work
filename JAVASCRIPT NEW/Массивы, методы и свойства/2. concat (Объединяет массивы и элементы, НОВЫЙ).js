//# .concat()
// Метод concat не меняет структуру начального массива, а возвращает новый. Изменения в новом массиве не приведут к изменению исходного.

//# пример
const moscowAttractions = ['Кремль', 'Третьяковская галерея'];
const spbAttractions = ['Эрмитаж', 'Мариинский театр'];
const volgogradAttractions = ['Мамаев Курган', 'Родина-мать'];

const russiaAttractions = moscowAttractions.concat(spbAttractions, volgogradAttractions);

// получим новый массив со значениями всех исходных массивов

console.log(russiaAttractions);

/*
  [
    "Кремль",
    "Третьяковская галерея",
    "Эрмитаж",
    "Мариинский театр",
    "Мамаев Курган",
    "Родина-мать"
  ]
*/
