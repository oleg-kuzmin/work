//# Советы по стилю
// Вот несколько советов по стилю, которые могут оказаться полезными.

// Вы можете просто прочитать следующие разделы. Не нужно вносить изменения в наше приложение!

//# Использование clsx библиотеки для переключения классов
// clsx — это простая библиотека, которая позволяет легко переключать имена классов. Вы можете установить ее с помощью npm install clsx или yarn add clsx.

/*
Пожалуйста, ознакомьтесь с его документацией для получения более подробной информации, а вот основное использование:
- Предположим, вы хотите создать компонент Alert, который принимает type, что может быть 'success' или 'error'.
- Если это так 'success', вы хотите, чтобы цвет текста был зеленым. Если это так 'error', вы хотите, чтобы цвет текста был красным.
*/

/*
Сначала вы можете написать модуль CSS (например alert.module.css) следующим образом:

.success {
  color: green;
}

.error {
  color: red;
}
*/

// И используйте clsx так:

import styles from './alert.module.css';
import { clsx } from 'clsx';

function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}

//# Настройка конфигурации PostCSS
// «Из коробки», без какой-либо настройки, Next.js компилирует CSS с помощью PostCSS.

// Чтобы настроить конфигурацию PostCSS, вы можете создать файл верхнего уровня с именем postcss.config.js. Это полезно, если вы используете такие библиотеки, как Tailwind CSS.

/*
Вот шаги по добавлению Tailwind CSS. Сначала установите пакеты:
npm install -D tailwindcss autoprefixer postcss
*/

// Затем создайте postcss.config.js:

//* postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// Мы также рекомендуем настроить источники контента, указав content параметр tailwind.config.js:
//* tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
};

// Чтобы узнать больше о пользовательской конфигурации PostCSS, ознакомьтесь с документацией PostCSS.

// Чтобы легко начать работу с Tailwind CSS, ознакомьтесь с нашим примером.

//# Использование Sass
// По умолчанию Next.js позволяет импортировать Sass, используя расширения .scss и .sass. Вы можете использовать Sass на уровне компонентов через модули CSS и расширение .module.scss или .module.sass.

/* Прежде чем вы сможете использовать встроенную поддержку Sass в Next.js, обязательно установите sass:
npm install -D sass
*/

// Вот и все на этом уроке! Чтобы узнать больше о встроенной поддержке CSS и модулях CSS в Next.js, ознакомьтесь с документацией по CSS.
