//# Навигация
import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}

//# структура
/* Вложенность может быть любой
папка src
  папка app
    файл page.js
    файл page.module.css
    файл layout.js
    файл globals.css
    папка about
      файл page.jsx
      папка contacts
        файл page.jsx
    папка [id] // динамический роутинг
      файл page.jsx
*/

//# Динамический роутинг
// создать папку с скобками [] вокруг названия, например [id].
//* Файл src/app/[id]/page.jsx

function TestPageId({ params: { id } }) {
  return <h1>Это страница {id}</h1>;
}
