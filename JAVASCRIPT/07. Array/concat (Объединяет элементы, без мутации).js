//# .concat() (Объединяет элементы, без мутации)
/*
- Метод concat не меняет структуру начального массива, а возвращает новый.
- Изменения в новом массиве не приведут к изменению исходного.
- spread-оператор решает эту проблему лучше.
*/

//# пример
//* все аргументы будут добавлены в новый массив в том же порядке
const toDoList = ['Посадить дерево', 'Построить дом'];
const toDoListUpdated = toDoList.concat('Вырастить сына');
console.log(toDoListUpdated); // ["Посадить дерево", "Построить дом", "Вырастить сына"]

//* несколько значений
const moscowAttractions = ['Кремль', 'Третьяковская галерея'];
const spbAttractions = ['Эрмитаж', 'Мариинский театр'];
const volgogradAttractions = ['Мамаев Курган', 'Родина-мать'];
const russiaAttractions = moscowAttractions.concat(spbAttractions, volgogradAttractions);
console.log(russiaAttractions);
// ['Кремль', 'Третьяковская галерея', 'Эрмитаж', 'Мариинский театр', 'Мамаев Курган', 'Родина-мать'];

//* spread-оператор
const watchedMovies = ['Rocky', 'Terminator 2', 'The Matrix']
const watchedVideos = ['Rick&Morty', 'lofi hip hop radio', ...watchedMovies]

console.log(watchedVideos)
// ['Rick&Morty', 'lofi hip hop radio', 'Rocky', 'Terminator 2', 'The Matrix']


