//# Параллельные маршруты
// Параллельная маршрутизация позволяет одновременно или условно отображать одну или несколько страниц в одном макете. Для высокодинамичных разделов приложения, таких как информационные панели и каналы социальных сайтов, параллельная маршрутизация может использоваться для реализации сложных шаблонов маршрутизации.

// Например, вы можете одновременно отображать страницы team и analytics.

/*
app
  @team
    page.js
  @analytics
    page.js
  layout.js
  page.js
*/

//* layout.js
function layout(props) {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  );
}
