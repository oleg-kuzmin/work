//# Динамические маршруты
// Если вы заранее не знаете точные имена сегментов и хотите создавать маршруты на основе динамических данных, вы можете использовать динамические сегменты, которые заполняются во время запроса или предварительно обрабатываются во время сборки.

//# Соглашение
// Динамический сегмент можно создать, заключив имя папки в квадратные скобки: [folderName]. Например, [id] или [slug].

// Динамические сегменты передаются в качестве свойства параметров для функций layout, page, route и generateMetadata.

//# Пример
// Например, блог может включать следующий маршрут app/blog/[slug]/page.js, где [slug] — это динамический сегмент для сообщений в блоге.

//* app/blog/[slug]/page.js
function Page({ params }) {
  return <div>My Post: {params.slug}</div>;
}

/*
Route	                      Example URL	   params
app/blog/[slug]/page.js	    /blog/a	       { slug: 'a' }
app/blog/[slug]/page.js	    /blog/b	       { slug: 'b' }
app/blog/[slug]/page.js	    /blog/c	       { slug: 'c' }
*/

// Полезно знать: динамические сегменты эквивалентны динамическим маршрутам в каталоге pages.

//# Генерация статических параметров
// Функцию generateStaticParams можно использовать в сочетании с динамическими сегментами маршрутов для статического создания маршрутов во время сборки, а не по требованию во время запроса.

//* app/blog/[slug]/page.js
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then(res => res.json());

  return posts.map(post => ({
    slug: post.slug,
  }));
}

// Основное преимущество функции generateStaticParams — интеллектуальное извлечение данных. Если содержимое извлекается с помощью функции generateStaticParams с помощью запроса на выборку, запросы автоматически запоминаются. Это означает, что запрос на выборку с одинаковыми аргументами для нескольких generateStaticParams, layouts и pages будет выполнен только один раз, что сокращает время сборки.

//# Catch-all Segments
// Динамические сегменты можно расширить, чтобы охватить все последующие сегменты, добавив многоточие внутри скобок [...folderName].

// Например, app/shop/[...slug]/page.jsбудет соответствовать /shop/clothes, но также /shop/clothes/tops, /shop/clothes/tops/t-shirtsи так далее.

/*
Route	                          Example URL	      params
app/shop/[...slug]/page.js	    /shop/a	          { slug: ['a'] }
app/shop/[...slug]/page.js	    /shop/a/b	        { slug: ['a', 'b'] }
app/shop/[...slug]/page.js	    /shop/a/b/c	      { slug: ['a', 'b', 'c'] }
*/

//# Optional Catch-all Segments
// Сегменты Catch-all можно сделать необязательными, включив параметр в двойные квадратные скобки: [[...folderName]].

// Например, app/shop/[[...slug]]/page.js также будет соответствовать /shop в дополнение к /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.

/*
Route	                          Example URL	      params
app/shop/[[...slug]]/page.js	  /shop	            {}
app/shop/[[...slug]]/page.js	  /shop/a	          { slug: ['a'] }
app/shop/[[...slug]]/page.js	  /shop/a/b	        { slug: ['a', 'b'] }
app/shop/[[...slug]]/page.js	  /shop/a/b/c	      { slug: ['a', 'b', 'c'] }
*/

//# TypeScript
/*
При использовании TypeScript вы можете добавлять типы параметров в зависимости от настроенного сегмента маршрута.

export default function Page({ params }: { params: { slug: string } }) {
  return <h1>My Page</h1>
}
*/

/*
Route	                              params Type Definition
app/blog/[slug]/page.js	            { slug: string }
app/shop/[...slug]/page.js	        { slug: string[] }
app/[categoryId]/[itemId]/page.js	  { categoryId: string, itemId: string }
*/

// Полезно знать: в будущем это может быть сделано автоматически плагином TypeScript.
