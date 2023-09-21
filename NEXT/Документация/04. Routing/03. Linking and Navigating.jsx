//# Ссылки и навигация
/* Существует два способа навигации между маршрутами в Next.js:
- Использование компонента <Link>
- Использование хука useRouter
*/

// На этой странице будет описано, как использовать <Link>, useRouter(), и более подробно описывается, как работает навигация.

//# Компонент <Link>
// <Link> — это встроенный компонент, который расширяет HTML-тег <a>, обеспечивая предварительную выборку и навигацию между маршрутами на стороне клиента. Это основной способ навигации между маршрутами в Next.js.

// Вы можете использовать его, импортировав его из next/link и передав компоненту свойство href:

//* app/page.js
import Link from 'next/link';

function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}

// Есть и другие дополнительные реквизиты, которые вы можете передать в <Link>. Дополнительную информацию см. в API Reference.

//# Связывание с динамическими сегментами
// При связывании с динамическими сегментами вы можете использовать template и шаблонные строки для создания списка ссылок. Например, чтобы создать список сообщений в блоге:

//* app/blog/PostList.js
import Link from 'next/link';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

//# Проверка активных ссылок
// Вы можете использовать usePathname(), чтобы определить, активна ли ссылка. Например, чтобы добавить класс к активной ссылке, вы можете проверить, соответствует ли текущий путь href ссылки:

//* app/ui/Navigation.js
('use client');

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation({ navLinks }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname === link.href;

        return (
          <Link className={isActive ? 'text-blue' : 'text-black'} href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

//# Прокрутка до id
// По умолчанию маршрутизатор приложений Next.js выполняет прокрутку к началу нового маршрута или сохраняет положение прокрутки для навигации вперед и назад.

// Если вы хотите прокрутить до определенного идентификатора при навигации, вы можете добавить свой URL-адрес с хэш-ссылкой # или просто передать хеш-ссылку в свойство href. Это возможно, поскольку <Link> отображается в элемент <a>.

<Link href="/dashboard#settings">Settings</Link>;

//# Отключение восстановления прокрутки
// По умолчанию маршрутизатор приложений Next.js выполняет прокрутку к началу нового маршрута или сохраняет положение прокрутки для навигации вперед и назад. Если вы хотите отключить это поведение, вы можете передать scroll={false} компоненту <Link> или scroll: false для router.push() или router.replace().

//* next/link
<Link href="/dashboard" scroll={false}>
  Dashboard
</Link>;

//* useRouter
import { useRouter } from 'next/navigation';

const router = useRouter();

router.push('/dashboard', { scroll: false });

