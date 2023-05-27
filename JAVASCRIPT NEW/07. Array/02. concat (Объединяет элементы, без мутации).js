//# .concat() (Объединяет элементы, без мутации)
/*
- Метод concat не меняет структуру начального массива, а возвращает новый.
- Изменения в новом массиве не приведут к изменению исходного.
*/

//# пример
const moscowAttractions = ['Кремль', 'Третьяковская галерея'];
const spbAttractions = ['Эрмитаж', 'Мариинский театр'];
const volgogradAttractions = ['Мамаев Курган', 'Родина-мать'];

// получим новый массив со значениями всех исходных массивов
const russiaAttractions = moscowAttractions.concat(spbAttractions, volgogradAttractions);
