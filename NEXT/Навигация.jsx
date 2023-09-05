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

// Динамический роутинг - создать папку с [] вокруг названия, например [id].
//* [id]/page.js
