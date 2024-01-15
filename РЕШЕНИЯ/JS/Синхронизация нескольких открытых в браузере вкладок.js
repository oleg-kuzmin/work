//# Синхронизация нескольких открытых в браузере вкладок
// Можно использовать событие storage для синхронизации нескольких открытых в браузере вкладок. При изменении размера шрифта в одной вкладке мы узнаем об этом во всех остальных и тоже изменим размер.

function changePageFontSize(size) {
  document.style.fontSize = `${size}px`;
}

window.addEventListener('storage', function (evt) {
  if (evt.key === 'pageFontSize') {
    changePageFontSize(evt.newValue);
  }
});
