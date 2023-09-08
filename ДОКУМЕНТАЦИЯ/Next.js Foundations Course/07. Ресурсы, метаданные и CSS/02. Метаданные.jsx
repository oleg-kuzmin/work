//# Метаданные
// Что, если мы захотим изменить метаданные страницы, например тег <title>?

// <title> является частью тега <head>, поэтому давайте углубимся в то, как мы можем изменить тег <head> на странице Next.js.

// Откройте pages/index.js в редакторе и найдите следующие строки:

<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>;

// Обратите внимание, что <Head> используется вместо строчной буквы <head>. <Head>— это компонент React, встроенный в Next.js. Это позволяет вам изменять <head> страницы.

// Вы можете импортировать компонент Head из модуля next/head.

//# Добавление Head в first-post.js
// Мы не добавили <title> к нашему /posts/first-post маршруту. Давайте добавим один.

// Откройте pages/posts/first-post.js файл и добавьте "import Head from next/head" в начало файла:

import Head from 'next/head';

// Затем обновите экспортированный компонент FirstPost, включив в него этот компонент Head. Сейчас мы добавим только тег title:

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}

// Попробуйте зайти на страницу http://localhost:3000/posts/first-post. На вкладке браузера теперь должно быть написано «First Post». Используя инструменты разработчика вашего браузера, вы должны увидеть, что тег title добавлен в <head>.

// Чтобы узнать больше о компоненте Head, ознакомьтесь со справкой по API для next/head.

// Если вы хотите настроить тег <html>, например добавить атрибут lang, вы можете сделать это, создав pages/_document.js файл. Подробнее читайте в пользовательской Document документации.
