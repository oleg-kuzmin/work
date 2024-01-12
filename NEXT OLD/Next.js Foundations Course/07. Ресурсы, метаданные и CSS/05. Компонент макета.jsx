//# Компонент макета
// Сначала давайте создадим компонент макета, который будет использоваться на всех страницах.

// - Создайте каталог верхнего уровня с именем components.
// - Внутри components создайте файл layout.js со следующим содержимым:

function Layout({ children }) {
  return <div>{children}</div>;
}

// Затем откройте pages/posts/first-post.js, добавьте импорт компонента Layout и сделайте его самым внешним компонентом:

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}

//# Добавление CSS
// Теперь давайте добавим несколько стилей к компоненту Layout. Для этого мы будем использовать модули CSS, которые позволяют импортировать файлы CSS в компонент React.

/*
Создайте файл components/layout.module.css со следующим содержимым:
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
*/

// Важно: Чтобы использовать модули CSS, имя файла CSS должно заканчиваться на .module.css.

/* Чтобы использовать этот класс container внутри components/layout.js, вам необходимо:
- Импортируйте файл CSS и присвойте ему имя, например styles
- Используйте styles.container в качестве className
*/

// Откройте components/layout.js и замените его содержимое следующим:

import styles from './layout.module.css';

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

// Если вы сейчас перейдете по адресу http://localhost:3000/posts/first-post, вы увидите, что текст теперь находится внутри центрированного контейнера.

//# Автоматически генерирует уникальные имена классов
// Теперь, если вы посмотрите на HTML в инструментах разработчика вашего браузера, вы заметите, что отображаемый компонент div Layout имеет имя класса, которое выглядит так: layout_container__...

// Вот что делают модули CSS: они автоматически генерируют уникальные имена классов. Пока вы используете модули CSS, вам не нужно беспокоиться о конфликтах имен классов.

// Более того, функция разделения кода Next.js работает и с модулями CSS. Это гарантирует, что для каждой страницы загружается минимальное количество CSS. Это приводит к меньшим размерам пакетов.

// Модули CSS извлекаются из пакетов JavaScript во время сборки и генерируют .css файлы, которые автоматически загружаются Next
