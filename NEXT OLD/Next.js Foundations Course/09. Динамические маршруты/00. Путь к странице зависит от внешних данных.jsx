//# Динамические маршруты
// Мы заполнили индексную страницу данными блога, но еще не создали отдельные страницы блога (https://next-learn-starter.vercel.app/). Мы хотим, чтобы URL-адрес этих страниц зависел от данных блога, а это значит, что нам нужно использовать динамические маршруты.

//# Что вы узнаете на этом уроке
/*
В этом уроке вы узнаете:
- Как статически генерировать страницы с динамическими маршрутами, используя getStaticPaths.
- Как написать getStaticProps, чтобы получить данные для каждого сообщения в блоге.
- Как визуализировать уценку с помощью remark.
- Как красиво печатать строки даты.
- Как создать ссылку на страницу с динамическими маршрутами.
- Немного полезной информации о динамических маршрутах.
*/

//# Путь к странице зависит от внешних данных
// В предыдущем уроке мы рассмотрели случай, когда содержимое страницы зависит от внешних данных. Раньше мы в getStaticProps получали необходимые данные для отображения индексной страницы.

// В этом уроке мы поговорим о случае, когда каждый путь к странице зависит от внешних данных. Next.js позволяет статически генерировать страницы с путями, зависящими от внешних данных. Это позволяет использовать динамические URL-адреса в Next.js.

//# Как статически генерировать страницы с динамическими маршрутами
/*
В нашем случае мы хотим создать динамические маршруты для сообщений в блоге:
- Мы хотим, чтобы каждое сообщение имело путь /posts/<id>, где <id>— имя файла md в каталоге верхнего уровня posts.
- Поскольку у нас есть ssg-ssr.md и pre-rendering.md, нам бы хотелось, чтобы пути были /posts/ssg-ssr и /posts/pre-rendering.
*/

//# Обзор шагов
// Мы можем сделать это, предприняв следующие шаги. Вам пока не обязательно вносить эти изменения — мы сделаем все это на следующей странице.

// Сначала мы создадим страницу [id].js под названием pages/posts. Страницы, которые начинаются и заканчиваются на [] являются динамическими маршрутами в Next.js.

// В pages/posts/[id].js мы напишем код, который будет отображать страницу публикации, как и другие страницы, которые мы создали.

import Layout from '../../components/layout';

function Post() {
  return <Layout>...</Layout>;
}

// Теперь вот что нового: мы экспортируем асинхронную функцию, вызываемую getStaticPaths с этой страницы. В этой функции нам нужно вернуть список возможных значений для id.

import Layout from '../../components/layout';

function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

// Наконец, нам нужно реализовать getStaticProps еще раз — на этот раз для получения необходимых данных для сообщения в блоге с заданным расширением id. getStaticProps дается params, который содержит id (потому что имя файла [id].js).

import Layout from '../../components/layout';

function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}

// Давайте попробуем это на следующей странице!
