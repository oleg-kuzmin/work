//# Реализация getStaticProps
// Нам нужно получить необходимые данные для отображения сообщения с заданным расширением id.

// Для этого откройте lib/posts.js снова и добавьте следующую getPostData функцию внизу. Он вернет данные публикации на основе id:

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}

// Затем откройте pages/posts/[id].js и замените эту строку:

import { getAllPostIds } from '../../lib/posts';

// следующим кодом:

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Страница публикации теперь использует getPostData функцию для getStaticProps получения данных публикации и возврата их в качестве реквизита.

// Теперь давайте обновим Post компонент для использования postData. Замените pages/posts/[id].js экспортированный Post компонент следующим кодом:

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

// Мы успешно создали динамические маршруты.
