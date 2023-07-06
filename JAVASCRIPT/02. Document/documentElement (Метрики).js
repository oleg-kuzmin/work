//# document.documentElement.clientWidth
// ширина окна за вычетом полосы прокрутки

//# document.documentElement.clientHeight
// высота окна за вычетом полосы прокрутки

//* Чтобы надёжно получить полную высоту документа, нам следует взять максимальное из этих свойств:

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
