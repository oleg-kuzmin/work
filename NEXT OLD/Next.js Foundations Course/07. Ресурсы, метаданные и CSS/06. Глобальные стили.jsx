//# Глобальные стили
// Модули CSS полезны для стилей на уровне компонентов. Но если вы хотите, чтобы некоторый CSS загружался на каждой странице, Next.js также поддерживает это.

// Чтобы загрузить глобальный CSS в ваше приложение, создайте файл pages/_app.js со следующим содержимым:

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// По умолчанию экспортируется _app.js - компонент React верхнего уровня, который обертывает все страницы вашего приложения. Вы можете использовать этот компонент для сохранения состояния при навигации между страницами или для добавления глобальных стилей, как мы делаем здесь.

// Перезапустите сервер разработки.

/*
Важно: при добавлении pages/_app.js. Нажмите Ctrl + c, чтобы остановить сервер, и запустите:
npm run dev
*/

//# Добавление глобального CSS
// В Next.js вы можете добавлять глобальные файлы CSS, импортируя их из pages/_app.js. Вы не можете импортировать глобальный CSS куда-либо еще.

// Причина, по которой глобальный CSS не может быть импортирован за пределы pages/_app.js заключается в том, что глобальный CSS влияет на все элементы на странице.

// Если бы вы перешли с главной страницы на другую /posts/first-post, глобальные стили с главной страницы могли бы непреднамеренно повлиять.

/*
Вы можете разместить глобальный файл CSS где угодно и использовать любое имя. Итак, давайте сделаем следующее:
- Создайте каталог верхнего уровня styles и файл global.css.
- Добавьте следующий CSS внутрь styles/global.css. Этот код сбрасывает некоторые стили и меняет цвет тега a:

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
*/

// Наконец, импортируйте файл CSS в pages/_app.js файл, который вы создали ранее:

//* `pages/_app.js`
import '../styles/global.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Теперь, если вы зайдете на http://localhost:3000/posts/first-post, вы увидите, что стили применены. Любые импортированные стили _app.js будут применяться глобально, ко всем страницам приложения.

// Если это не сработало: обязательно перезапустите сервер разработки при обновлении pages/_app.js.
