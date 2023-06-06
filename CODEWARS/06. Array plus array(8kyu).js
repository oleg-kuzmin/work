/*
Я новичок в кодировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Я буду признателен за вашу помощь. P.S. Каждый массив включает только целые числа. Выход - тоже число.
*/

//* мое решение
function arrayPlusArray(arr1, arr2) {
  const arr1Sum = arr1.reduce((prev, item) => {
    return prev + item;
  });

  const arr2Sum = arr2.reduce((prev, item) => {
    return prev + item;
  });

  return arr1Sum + arr2Sum;
}

//* лучшее на сайте
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
