//# Possibilities Array(7kyu)
/*
- Непустой массив a длины n называется массивом всех возможностей, если он содержит все числа между [0,a.length-1]. Напишите метод с именем isAllPossibilities, который принимает целочисленный массив и возвращает true, если массив является массив всех возможностей, иначе false.

a=[1,2,0,3]
a.length-1=3
a includes [0,3] // true
*/

//* мое решение
function isAllPossibilities(arr) {
  if (arr.length === 0) {
    return false;
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr.includes(i));
  }

  return res.every(boolean => {
    return boolean;
  });
}

//* лучшее на сайте
function isAllPossibilities(x) {
  return x.length > 0 ? x.every((a, i) => x.includes(i)) : false;
}
