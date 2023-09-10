//# Sass
// Next.js имеет встроенную поддержку Sass с использованием расширений .scss и .sass. Вы можете использовать Sass на уровне компонентов через модули CSS и расширение .module.scss или .module.sass.

// Сначала установите SASS

//* npm install --save-dev sass

/* Хорошо знать: Sass поддерживает два разных синтаксиса, каждый со своим расширением. Расширение .scss требует использования синтаксиса SCSS, а расширение .sass требует использования синтаксиса с отступом («Sass»).
- Если вы не уверены, что выбрать, начните с расширения .scss, которое является надмножеством CSS и не требует изучения синтаксиса с отступом («Sass»).
*/

//# Настройка параметров Sass
// Если вы хотите настроить компилятор Sass, используйте sassOptions в next.config.js.

//* next.config.js
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

//# Переменные Sass
// Next.js поддерживает переменные Sass, экспортированные из файлов модулей CSS.

// Например, используя экспортированную переменную PrimaryColor:

//* app/page.js
import variables from './variables.module.scss';

export default function Page() {
  return <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>;
}
