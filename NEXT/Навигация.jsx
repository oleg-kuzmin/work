//# Навигация

import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/contacts">Contacts</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}

//# структура
// Внутри app создаются папки - страницы. В каждой папке-странице будет файл page.js. Например src/app/about/page.js гарантирует наличие адреса localhost: 3000/about. Вложенность может быть любой.

/*
папка src
  папка app
    файл page.jsx
    файл page.module.css
    файл layout.jsx - главный
    файл globals.css
    папка about
      файл page.jsx
      файл layout.jsx - дополнительный
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

//# Layout
// Один layout.js в корне всегда должен лежать (т.к. next автоматически не добавляет всем страницам html и body).
//* Дополнительный файл src/app/about/layout.jsx

export const metadata = {
  title: 'Тестовая страница',
  description: 'Тестовая страница',
};

export default function AboutLayout({ children }) {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>Contacts</li>
        <li>Home</li>
      </ul>
      {children}
    </div>
  );
}
