//# Все Promise исполнены - Promise.all()
// Возвращает Promise с fulfilled, когда все промисы-аргументы вернулись со статусом fulfilled.

//# Синтаксис
Promise.all(promises);
//* Массив с промисами

//# Возвращает
//* Promise.

//# Пример
//* Создаём первый промис
const firstPromise = new Promise((resolve, reject) => {
  resolve('Первый промис');
});

//* Создаём второй промис
const secondPromise = new Promise((resolve, reject) => {
  resolve('Второй промис');
});

//* Создаём массив с промисами
const promises = [firstPromise, secondPromise];

//* Передаём массив с промисами методу Promise.all()
Promise.all(promises).then(results => {
  console.log(results); // ["Первый промис", "Второй промис"]
});

//# Параллельное использование
// Запустив getNews параллельно c getUser, мы в большинстве случаев получим результат быстрее. Promise.all() позволяет запустить запросы параллельно, при этом дожидаться результата мы можем как и раньше при помощи await.

const [user, news] = await Promise.all([getUser(), getNews()]);
