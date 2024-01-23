//# onresize (ИЗМЕНЕНИЕ ОКНА БРАУЗЕРА)
// Событие сработает только на объекте window. Поскольку среди элементов html нету тега, отождествленного с окном браузера, то обработать в javascript событие onresize можно при помощи присваивания функции свойству объекта window.

//# Пример
//* onresize
window.onresize = function () {
  console.log('Размер окна изменен');
};

//* addEventListener
window.addEventListener('resize', function () {
  console.log('Размер окна изменен');
});
