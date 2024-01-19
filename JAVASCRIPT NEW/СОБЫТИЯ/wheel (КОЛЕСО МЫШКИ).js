//# wheel (КОЛЕСО МЫШКИ)
/*
- Событие wheel происходит, когда пользователь физически прокручивает колесо мыши, даже если на странице ничего не происходит. За традиционный скролл отвечает событие scroll.
- С помощью объекта события можно, например, перемещать элемент по экрану при прокрутке колеса мыши на десктопе. Чтобы посмотреть, как это работает, откройте демо в новой вкладке по ссылке внизу.
*/

//# Пример
//* onscroll
window.onwheel = function () {
  console.log('Колесико прокручено');
};

//* addEventListener
document.addEventListener('wheel', function () {
  console.log('Колесико прокручено');
});
