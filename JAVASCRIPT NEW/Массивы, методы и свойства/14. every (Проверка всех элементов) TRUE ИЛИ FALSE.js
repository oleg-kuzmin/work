//# .every()
/* Метод every тоже похож на some, но проверяет все элементы массива и возвращает true, только если все элементы прошли проверку.
- Колбэк — единственный аргумент метода. Он содержит логику проверки каждого элемента и возвращает true или false.
- Если по мере перебора элементов колбэк возвращает false, метод every завершает проверку и тоже возвращает false. */

//# пример
const jokes = [
  'смешная шутка и доля правды',
  'не очень смешной анекдот + доля правды',
  'доля правды в дурацкой шутке, услышав которую, все улыбнулись из вежливости',
];
const allJokesWithTruth = jokes.every(function (joke) {
  return joke.indexOf('доля правды') > -1;
});
console.log(allJokesWithTruth); // true

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
integersToCheck.every(isPrime);
