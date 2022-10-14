// TODO Метод some. Проверка элементов массива.
const oceanResidents = ['Флаундер', 'Немо', 'Губка Боб', 'Аквамен'];
const nemo = oceanResidents.some(function (resident) {
    return resident === 'Немо';
});
console.log(nemo); // true