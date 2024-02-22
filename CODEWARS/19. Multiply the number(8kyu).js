//# 19. Multiply the number(8kyu)
/*
- Джеку очень нравится его число пять: хитрость здесь в том, что вам нужно умножить каждое число на 5, возведенное в число цифр каждого числа, так, например:

multiply(3) == 15 # 3 * 5¹
multiply(10) == 250 # 10 * 5²
multiply(200) == 25000 # 200 * 5³
multiply(0) == 0 # 0 * 5¹
multiply(-3) == -15 # -3 * 5¹
*/

//* мое решение
function multiply(number) {
  if (number > 0) {
    return number * 5 ** number.toString().length;
  } else {
    return number * 5 ** (number.toString().length - 1);
  }
}

//* лучшее на сайте
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}
