//# Рендеринг md
// Для рендеринга содержимого уценки мы будем использовать библиотеку remark. Сначала давайте установим его:

// npm install remark remark-html

// Затем откройте lib/posts.js и добавьте следующий импорт в начало файла:

import { remark } from 'remark';
import html from 'remark-html';

// И обновите getPostData() функцию в том же файле следующим образом remark:

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// Важно: мы добавили asyncключевое слово to, getPostDataпотому что нам нужно использовать awaitfor remark. async/ awaitпозволяет получать данные асинхронно.

// Это означает, что нам нужно обновить getStaticProps, pages/posts/[id].js чтобы использовать await при вызове getPostData:

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

// Наконец, обновите Post компонент pages/posts/[id].js для рендеринга, contentHtml используя dangerouslySetInnerHTML:

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

// Мы почти закончили! Давайте отполируем каждую страницу дальше.
