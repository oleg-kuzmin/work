//# Реализация getStaticProps

//# Предварительный рендеринг в Next.js
// В Next.js есть две формы предварительного рендеринга: статическая генерация и рендеринг на стороне сервера. Разница заключается в том, когда он генерирует HTML для страницы.

// Статическая генерация — это метод предварительной отрисовки, который генерирует HTML во время сборки. Предварительно обработанный HTML затем повторно используется при каждом запросе.

// Серверный рендеринг — это метод предварительной рендеринга, который генерирует HTML-код при каждом запросе.

// Важно отметить, что Next.js позволяет вам выбирать, какую форму предварительного рендеринга использовать для каждой страницы. Вы можете создать «гибридное» приложение Next.js, используя статическую генерацию для большинства страниц и серверную рендеринг для других.

//# Использование статической генерации ( getStaticProps())
// Теперь нам нужно добавить импорт getSortedPostsData и вызвать его getStaticProps внутри pages/index.js.

// Откройте pages/index.js в редакторе и добавьте следующий код над экспортируемым Home компонентом:

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// При возврате allPostsData внутрь props объекта в getStaticProps, сообщения блога будут переданы компоненту Home в качестве реквизита. Теперь вы можете получить доступ к сообщениям в блоге следующим образом:

// export default function Home({ allPostsData }) {}

// Чтобы отображать сообщения в блоге, давайте обновим Home компонент, добавив еще один <section> тег с данными под разделом с вашим представлением. Не забудьте также изменить реквизиты с () на ({ allPostsData }):

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// Теперь вы должны увидеть данные блога, если зайдете на http://localhost:3000.

// Поздравляем! Мы успешно получили внешние данные (из файловой системы) и предварительно обработали индексную страницу с этими данными.

// Давайте поговорим о некоторых советах по использованию getStaticProps на следующей странице.
