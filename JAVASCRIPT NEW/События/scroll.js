//# scroll
// Пользователь прокручивает страницу или элемент в любой плоскости.

//# пример
document.addEventListener('scroll', function (event) {
  console.log(event);
});

document.addEventListener('scroll', function () {
  // получаем высоту элемента, на котором произошло событие
  console.log(this.scrollTop);
});

//# общая информация
/* - Чтобы понять, насколько прокрутилась страница или элемент, этот элемент получают из DOM-дерева или ключевого слова this и запрашивают свойства scrollTop или scrollLeft.*/
