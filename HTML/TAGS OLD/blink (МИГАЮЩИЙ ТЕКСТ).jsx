// # blink (МИГАЮЩИЙ ТЕКСТ) (blink: мигание, мерцание)
// Использовалось для визуального выделения текста, который в результате буквально будет мигать.

//# Пример
<blink>Зачем кому-либо так делать? Выглядит не гуманно.</blink>;

//# Чем заменить
/* CSS
blink {
  animation: 2s linear infinite condemned_blink_effect;
}

@keyframes condemned_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
*/
