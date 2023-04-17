//# IIFE (immediately invoked function expression: немедленно вызванное функциональное выражение)
// Если заключить функцию в скобки, это станет функциональным выражением. Поскольку IIFE — функция, все переменные, объявленные внутри неё, не видны снаружи. Если обернуть весь код в IIFE, можно полностью избавиться от глобальных переменных в нашем коде.

//# пример
//* добавим скобки в конце, тем самым вызвав функцию
(function () {
  console.log('Hello world!');
})();

//* Код без глобальных переменных
(function () {
  const button = document.querySelector('button');
  function handleClick(evt) {}
  button.addEventListener('click', handleClick);
})();
