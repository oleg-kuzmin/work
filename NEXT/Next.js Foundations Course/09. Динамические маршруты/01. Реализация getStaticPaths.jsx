//# Реализация getStaticPaths
/* Сначала настроим файлы:
- Создайте файл с именем [id].js внутри pages/posts каталога.
- Также удалите first-post.js внутри pages/posts каталога — мы больше не будем это использовать.
*/

// Затем откройте pages/posts/[id].js в редакторе и вставьте следующий код. Заполним ... позже:

import Layout from '../../components/layout';

export default function Post() {
  return <Layout>...</Layout>;
}

// Затем откройте lib/posts.js и добавьте следующую getAllPostIds функцию внизу. Он вернет список имен файлов (за исключением .md) в posts каталоге:

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// Важно  возвращаемый список — это не просто массив строк — это должен быть массив объектов, похожих на комментарий выше. Каждый объект должен иметь params ключ и содержать объект с id ключом (потому что мы используем его [id] в имени файла). В противном случае, getStaticPaths потерпит неудачу.

// Наконец, мы импортируем getAllPostIds функцию и будем использовать ее внутри getStaticPaths. Откройте pages/posts/[id].js и скопируйте следующий код над экспортированным Post компонентом:

import { getAllPostIds } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// paths содержит массив известных путей, возвращаемых getAllPostIds(), включая параметры, определенные pages/posts/[id].js. Узнайте больше в paths ключевой документации.

// fallback: false Пока игнорируйте — мы объясним это позже.

// Мы почти закончили, но нам еще нужно реализовать getStaticProps. Давайте сделаем это на следующей странице!
