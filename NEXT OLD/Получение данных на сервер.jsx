//# Получение данных на сервер
// Например на странице page.jsx в src/blog нужно получать данные чтобы рисовать реальные блоги. Для этого создаем функцию, ее не нужно экспортировать (getData, название может быть любым). Fetch похож на обычный, но дополнен настройками next. Кеширование по умолчанию включено всегда, если мы получили один раз данные, то они больше не запрашиваются.

//* src/blog/page.jsx

export const metadata = {
  title: 'Страница блогов',
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map(post => {
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>;
        })}
      </ul>
    </>
  );
}

async function getData() {
  const responseWithCash = await fetch('https://json.com'); // с кешированием данных
  const response = await fetch('https://json.com', {
    next: {
      revalidate: 60, // время в секунда с каким промежутком делать запрос
    },
  });
  return response.json();
}
