//# Установка
/*
Системные Требования:
- Node.js 16.14 or later.
- macOS, Windows (including WSL), and Linux are supported.
*/

//# Автоматическая установка
// Мы рекомендуем запустить новое приложение Next.js с помощью create-next-app, который автоматически все настроит за вас. Чтобы создать проект, запустите:

//* npx create-next-app@latest .

/* При установке вы увидите следующие подсказки:
- Would you like to use TypeScript?                    / No
- Would you like to use ESlint?                        / Yes
- Would you like to use Tailwind CSS?                  / No
- Would you like to use `src/` directory?              / Yes
- Would you like to use App Router?                    / Yes
- Would you like to customize the default import alias / No
*/

// После появления подсказок create-next-app создаст папку с именем вашего проекта и установит необходимые зависимости.

/* Хорошо знать:
- Next.js теперь поставляется с конфигурацией CSS TypeScript, ESLint и Tailwind по умолчанию.
- При желании вы можете использовать каталог src в корне вашего проекта, чтобы отделить код вашего приложения от файлов конфигурации.
*/

//# Ручная установка
// Чтобы вручную создать новое приложение Next.js, установите необходимые пакеты:

//* npm install next@latest react@latest react-dom@latest

/* Откройте файл package.json и добавьте следующие скрипты:
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
*/

/* Эти сценарии относятся к различным этапам разработки приложения:
- dev: запускает next dev для запуска Next.js в режиме разработки.
- build: запускает next build для сборки приложения в production.
- start: запускает next start для запуска рабочего сервера Next.js.
- lint: запускает next lint для настройки встроенной конфигурации ESLint Next.js.
*/

//# Создание каталогов
// Next.js использует маршрутизацию файловой системы. Это означает, что маршруты в вашем приложении определяются тем, как вы структурируете свои файлы.

//* The app directory
// Для новых приложений мы рекомендуем использовать App Router. Этот маршрутизатор позволяет вам использовать новейшие функции React и представляет собой развитие Pages Router, основанное на отзывах сообщества.

// Создайте папку app/, затем добавьте файлы layout.tsx и page.tsx. Они будут отображаться, когда пользователь посетит корень вашего приложения (/).

// Создайте root layout внутри app/layout.tsx с необходимыми тегами <html> и <body>:

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// Наконец, создайте домашнюю страницу app/page.tsx с некоторым начальным содержимым:

export default function Page() {
  return <h1>Hello, Next.js!</h1>
}

// Полезно знать: если вы забудете создать файл Layout.tsx, Next.js автоматически создаст этот файл при запуске сервера разработки с помощью next dev.

//# The pages directory (optional)
// Если вы предпочитаете использовать Pages Router вместо App Router, вы можете создать каталог pages/ в корне вашего проекта.

// Затем добавьте файл index.tsx в папку страниц. Это будет ваша домашняя страница (/):

/* Затем добавьте файл _app.tsx внутри pages/, чтобы определить global layout.
Узнайте больше о custom App file (https://nextjs.org/docs/pages/building-your-application/routing/custom-app).
*/

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

/* Наконец, добавьте файл _document.tsx внутри pages/, чтобы контролировать первоначальный ответ сервера.
Узнайте больше о custom Document file (https://nextjs.org/docs/pages/building-your-application/routing/custom-document).
*/

// Узнайте больше о Pages Router (https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts).

// Полезно знать: хотя вы можете использовать оба маршрутизатора в одном проекте, маршруты в App Router будут иметь приоритет над Pages Router. Мы рекомендуем использовать только один маршрутизатор в вашем новом проекте, чтобы избежать путаницы.

//# The public folder (optional)
// Создайте public папку для хранения статических ресурсов, таких как изображения, шрифты и т. д. Затем ваш код может ссылаться на файлы внутри public каталога, начиная с базового URL-адреса (/).

//# Запустите сервер разработки
/*
1. Запустите npm run dev, чтобы запустить сервер разработки.
2. Посетите http://localhost:3000, чтобы просмотреть свое приложение.
3. Отредактируйте файл app/layout.tsx (или pages/index.tsx) и сохраните его, чтобы увидеть обновленный результат в своем браузере.
*/
