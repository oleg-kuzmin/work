//# 18. Sum without highest and lowest number (8kyu)
/*
- Суммируйте все числа данного массива ( cq. list ), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!).
- Самый высокий или самый низкий элемент соответственно представляет собой один элемент на каждом краю, даже если их несколько с одинаковым значением.
- Помните о проверке ввода.

Например:
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

- Если вместо массива задано пустое значение (null, None, Nothing и т. д.), или данный массив представляет собой пустой список или список только с 1 элементом, верните 0.
*/

//* мое решение
function sumArray(array) {
  if (!Array.isArray(array) || !(array.length > 2)) {
    return 0;
  } else {
    let max = array[0];
    let min = array[0];
    let res;

    array.forEach(number => {
      if (number > max) {
        max = number;
      }
      if (number < min) {
        min = number;
      }
    });

    const indexMax = array.indexOf(max);
    const indexMin = array.indexOf(min);

    res = array.sort(function (a, b) {
      return a - b;
    });

    console.log(res);

    res = array.filter((item, index) => {
      return !(index === indexMax || index === indexMin);
    });

    res = res.reduce((prev, current) => {
      return prev + current;
    });

    return res;
  }
}

console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([1, 1, 11, 2, 3])); // 6

//* лучшее на сайте
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
