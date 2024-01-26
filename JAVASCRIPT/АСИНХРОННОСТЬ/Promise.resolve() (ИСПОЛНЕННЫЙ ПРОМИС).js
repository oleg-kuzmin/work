//# Promise.resolve() (ИСПОЛНЕННЫЙ ПРОМИС)
// Если вы сразу хотите создать исполненный или отклонённый промис, вызывать new Promise необязательно. Можно обратиться к методам Promise.resolve и Promise.reject. Эти методы создают промис, переводят его в статус «исполнен» или «отклонён» соответственно, и записывают как результат промиса — то, что мы передали этим методам.

Promise.resolve('Этот промис исполнен').then(function (value) {
  console.log(value); // "Этот промис исполнен"
});

const happyDog = Promise.resolve('happy');
happyDog.then(function (dog) {
  console.log(dog); // happy
});
