//# Promise.reject() (ОТКЛОНЕННЫЙ ПРОМИС)
// Если вы сразу хотите создать исполненный или отклонённый промис, вызывать new Promise необязательно. Можно обратиться к методам Promise.resolve и Promise.reject. Эти методы создают промис, переводят его в статус «исполнен» или «отклонён» соответственно, и записывают как результат промиса — то, что мы передали этим методам.

Promise.reject('Этот промис отклонён').catch(function (value) {
  console.log(value); // "Этот промис отклонён"
});

const sadDog = Promise.reject('happy');
sadDog.catch(function (dog) {
  console.log(dog); // happy
});
