//# Полировка макета
// До сих пор мы добавили лишь минимальный код React и CSS, чтобы проиллюстрировать такие концепции, как модули CSS. Прежде чем мы перейдем к следующему уроку о извлечении данных, давайте отточим стиль и код нашей страницы.

//# Обновите components/layout.module.css
/*
Сначала откройте components/layout.module.css и замените его содержимое следующими более совершенными стилями макета и изображения профиля:

.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backToHome {
  margin: 3rem 0 0;
}
*/

//# Создайте styles/utils.module.css
// Во-вторых, давайте создадим набор служебных классов CSS (для стилей текста), которые можно будет повторно использовать в нескольких компонентах.

/*
Добавьте новый CSS-файл styles/utils.module.cssсо следующим содержимым:

.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}
*/

// Вы можете повторно использовать эти служебные классы в своем приложении и даже использовать служебные классы в своем файле global.css. Служебные классы относятся к подходу к написанию селекторов CSS, а не к методу (например, глобальные стили, модули CSS, Sass и т. д.).

//# Обновите components/layout.js
// В-третьих, откройте components/layout.js и замените его содержимое следующим кодом, изменив его Your Name на фактическое имя:

import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

/* Вот что нового:
- metaтеги (например, og:image), которые используются для описания содержимого страницы.
- Логическое homeсвойство, которое будет регулировать размер заголовка и изображения.
- Ссылка «Вернуться домой» внизу, если home false
- Добавлены изображения с next/image предустановленным атрибутом Priority.
*/

//# Обновите pages/index.js
// Наконец, давайте обновим домашнюю страницу.

// Откройте pages/index.jsи замените его содержимое на:

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

// Затем замените [Your Self Introduction] представлением себя. Вот пример профиля автора:

// Вот и все! Теперь у нас есть отточенный код макета, и мы готовы перейти к урокам по извлечению данных.

// Прежде чем завершить этот урок, давайте на следующей странице поговорим о некоторых полезных методах, связанных с поддержкой CSS в Next.js.
