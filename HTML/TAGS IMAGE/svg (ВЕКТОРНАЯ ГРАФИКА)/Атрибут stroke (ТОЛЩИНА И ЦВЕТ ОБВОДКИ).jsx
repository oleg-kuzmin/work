//# Атрибут stroke (ТОЛЩИНА И ЦВЕТ ОБВОДКИ)
// Мы можем управлять толщиной и цветом линии, которая будет соединять все перечисленные точки svg-изображения. Причём можно задать один общий атрибут stroke для контейнера <svg>, а можно задавать его каждому отдельному вложенному элементу, сделав обводку разных частей картинки разного цвета.

//# Пример
<svg stroke="#123456" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24">
  <path d="..." />
</svg>;

//# Значения
//* stroke="#123456"
// Cтандартный формат цвета: именованный цвета (orange, rebeccapurple и др.), RGB(A), HEX и HSL(A).

//* stroke="url(#pattern)"
// Ссылка на SVG-элемент, который будет как паттерн заполнять площадь обводки.
