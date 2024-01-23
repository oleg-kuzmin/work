//# orientationchange (ИЗМЕНЕНИЕ ОРИЕНТАЦИИ ЭКРАНА)
// Срабатывает при изменении ориентации с альбомной на книжную и наоборот.

//# Пример
//* onorientationchange
window.onorientationchange = function () {
  window.location.reload();
};

//* addEventListener
window.addEventListener('orientationchange', function () {
  window.location.reload();
});
