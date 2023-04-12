//# function expression
// Объявленную функцию можно вызвать до объявления, функциональное выражение — нельзя.

//# пример
const hello = function (name) {
  console.log(`Привет ${name}`);
};

//# стрелочные функции (нет контекста выполнения)
//* несколько параметров
const boatDeparture = (eater, food) => {
  console.log(`через речку в лодке поплывут ${eater} и ${food}`);
};
boatDeparture('козёл', 'капуста');

//* использование параметра по умолчанию (text = 'текст не добавлен')
const showMessage = (from, text = 'текст не добавлен') => console.log(from + ': ' + text);

//* короткий return
// Если директива return — единственное действие в теле стрелочной функции, можно опустить и директиву return, и фигурные скобки
const shorterSingleAnecdote = (anecdote) => `я знаю только один анекдот: ${anecdote}`;

// Если возвращаемое значение — объект, его нужно заключить в круглые скобки
const colorHex = () => ({ white: '#FFF' });

//* без параметров
const sayHi = () => alert('Привет');

//* короткая запись параметров
// Если у стрелочной функции один параметр, можно не заключать его в скобки
const boatArrival = survivor => {
  console.log(`до другого берега доберётся только ${survivor}`);
};

//* колбек
const array = [1, 2, 3, 4];
const newArray = array.map(elem => elem * 2);
