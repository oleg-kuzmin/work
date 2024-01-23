//# dblclick (ДВОЙНОЙ КЛИК ЛЕВОЙ КНОПКОЙ МЫШКИ)
// Возникает при двойном щелчке левой кнопкой. Обработчик отслеживает два срабатывания click подряд на одном элементе.

//# Пример
//* onclick
button.dblclick = function () {
  console.log('Клик!');
};

//* addEventListener
button.addEventListener('dblclick', function () {
  console.log('Клик!');
});
