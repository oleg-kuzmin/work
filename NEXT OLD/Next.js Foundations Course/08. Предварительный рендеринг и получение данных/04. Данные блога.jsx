//# Создание простой архитектуры блога
// Сообщения блога в нашем примере будут храниться в виде локальных файлов markdown в каталоге нашего приложения (не извлекаемых из внешнего источника данных), поэтому нам нужно будет прочитать данные из файловой системы.

// В этом разделе мы рассмотрим этапы создания блога, который считывает данные markdown из файловой системы.

//# Создание файлов markdown
// Сначала создайте новый каталог верхнего уровня с именем posts(это не то же самое, что pages/posts) в вашей корневой папке. Внутри posts создайте два файла: pre-rendering.md и ssg-ssr.md.

/*
Теперь скопируйте следующий код в posts/pre-rendering.md:

---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
*/

/*
Затем скопируйте следующий код в posts/ssg-ssr.md:

---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
*/

// Возможно, вы заметили, что каждый файл md имеет раздел метаданных вверху, содержащий title и date. Это называется YAML Front Matter, который можно проанализировать с помощью библиотеки Gray-Matter.

//# Установка Gray-Matter
/*
Сначала установите Gray-Matter, которое позволит нам анализировать метаданные в каждом файле md.
npm install gray-matter
*/

//# Создание служебной функции для чтения файловой системы
/*
Далее мы создадим служебную функцию для анализа данных файловой системы. С помощью этой полезной функции мы хотели бы:
- Проанализировать каждый файл md и получить title, date и имя файла (которое будет использоваться как id URL-адрес публикации).
- Перечислить данные на индексной странице, отсортированные по дате.
*/

// Создайте каталог верхнего уровня с именем lib в корневом каталоге. Затем внутри lib создайте файл с именем posts.js и скопируйте и вставьте этот код:

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/* Примечание: Вам не нужно понимать, что делает приведенный выше код, чтобы изучить Next.js, его функция — сделать пример блога функциональным. Но если вы хотите узнать больше:

- fs— это модуль Node.js, который позволяет читать файлы из файловой системы.
- path— это модуль Node.js, который позволяет управлять путями к файлам.
- matter— это библиотека, которая позволяет анализировать метаданные в каждом файле уценки.
- В Next.js у lib папки нет назначенного имени, как у pages папки, поэтому вы можете назвать ее как угодно. Обычно принято использовать lib или utils.
*/

//# Получение данных блога
// Теперь, когда данные блога проанализированы, нам нужно добавить их на нашу индексную страницу (pages/index.js). Мы можем сделать это с помощью метода выборки данных Next.js под названием getStaticProps(). В следующем разделе мы узнаем, как реализовать getStaticProps().

// Давайте сделаем это на следующей странице!
