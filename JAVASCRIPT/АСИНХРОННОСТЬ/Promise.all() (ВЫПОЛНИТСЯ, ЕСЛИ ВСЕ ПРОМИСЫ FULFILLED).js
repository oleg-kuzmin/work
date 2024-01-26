//# Promise.all() (ВЫПОЛНИТСЯ, ЕСЛИ ВСЕ ПРОМИСЫ FULFILLED)
// принимает на вход массив с промисами и выполняет записанный в then код, только когда все промисы вернулись со статусом «исполнен».

//* Создаём первый промис
const firstPromise = new Promise((resolve, reject) => {
  if (someCondition) {
    resolve('Первый промис');
  } else {
    reject();
  }
});

//* Создаём второй промис
const secondPromise = new Promise((resolve, reject) => {
  if (secondCondition) {
    resolve('Второй промис');
  } else {
    reject();
  }
});

//* Создаём массив с промисами
const promises = [firstPromise, secondPromise];

//* Передаём массив с промисами методу Promise.all
Promise.all(promises).then(results => {
  console.log(results); // ["Первый промис", "Второй промис"]
});
