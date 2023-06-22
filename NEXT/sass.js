// Next.js имеет встроенную поддержку Sass с использованием расширений .scssи .sass. Вы можете использовать Sass на уровне компонентов через модули CSS и расширение .module.scssor .module.sass.

// Сначала установите sass

//* npm install --save-dev sass

//# Настройка параметров Sass
// Если вы хотите настроить компилятор Sass, используйте sassOptionsв next.config.js.

//* next.config.js
const path = require('path');
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

//# Sass-переменные
// Next.js поддерживает переменные Sass, экспортированные из файлов модулей CSS.

// Например, используя экспортированную primaryColorпеременную Sass:

//* app/variables.module.scss
// $primary-color: #64ff00;
// :export {
//   primaryColor: $primary-color;
// }

//* app/page.js
// maps to root `/` URL
import variables from './variables.module.scss';
export default function Page() {
  return <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>;
}
