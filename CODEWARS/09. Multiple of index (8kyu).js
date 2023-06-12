//# Multiple of index (8kyu)
/*
Возвращает новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве (длина > 1).

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

*/

//* мое решение
function multipleOfIndex(array) {
  return array.filter((element, index) => {
    return element % index === 0;
  });
}

//* лучшее на сайте
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
