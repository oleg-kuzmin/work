//# Полировка страницы публикации

//# Добавление title на страницу публикации
// Давайте в pages/posts/[id].js добавим title тег, используя данные публикации. Вам нужно будет добавить импорт next/head в верхней части файла и добавить title тег, обновив Post компонент:

// Add this import
import Head from 'next/head';

function Post({ postData }) {
  return (
    <Layout>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      {/* Keep the existing code here */}
    </Layout>
  );
}

//# Форматирование даты
// Для форматирования даты мы воспользуемся библиотекой date-fns. Сначала установите его:

// npm install date-fns

// Затем создайте файл с именем components/date.js и добавьте следующий Date компонент:

import { parseISO, format } from 'date-fns';

function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

// Примечание. Вы можете просмотреть различные format()параметры строки на веб-сайте date-fns.

// Теперь откройте pages/posts/[id].js, добавьте импорт компонента Date в начало файла и используйте его поверх {postData.date}:

// Add this import
import Date from '../../components/date';

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Replace {postData.date} with this */}
      <Date dateString={postData.date} />

      {/* Keep the existing code here */}
    </Layout>
  );
}

//# Добавление CSS
// Наконец, давайте добавим немного CSS, используя файл, который styles/utils.module.css мы добавили ранее. Откройте pages/posts/[id].js, затем добавьте импорт для файла CSS и замените Post компонент следующим кодом:

// Add this import at the top of the file
import utilStyles from '../../styles/utils.module.css';

function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// Если вы зайдете на http://localhost:3000/posts/pre-rendering, страница теперь должна выглядеть немного лучше.

// Отличная работа! Далее мы доработаем индексную страницу, и на этом все будет готово!
