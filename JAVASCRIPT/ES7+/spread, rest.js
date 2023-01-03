// spread оператор объекты
const language = { name: "RU", level: "difficult" };
const languagePopulation = { population: 400000000 };
console.log({ ...language, ...languagePopulation });


// spread оператор массивы
const namesFirst = ["Oleg", "Max", "Dima"];
const namesSecond = ["Alex", "Victor", "Den"];
console.log([...namesFirst, ...namesSecond]);


// rest
const {nameCountry, ...rest} = {
  nameCountry: "RU",
  level: "difficult",
  id: '123'
};
const {namePerson, ...rest1} = {
  namePerson: "RU",
  level: "difficult",
  id: '345'
};
console.log(nameCountry);
console.log({...rest});
console.log({...rest1});


// default
const getPriceCar = (carName = 'Lada') => {
  if (carName === 'Lada') return 1000000;
  if (carName === 'Porshe') return 9000000;
}
console.log(getPriceCar());