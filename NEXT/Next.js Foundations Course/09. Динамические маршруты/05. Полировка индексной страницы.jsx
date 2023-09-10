//# Полировка индексной страницы
// Далее давайте обновим нашу индексную страницу ( pages/index.js). Нам нужно добавить ссылки на каждую страницу публикации с помощью Link компонента.

// Откройте pages/index.js и добавьте следующий импорт в начало файла для Link и Date:

import Link from 'next/link';
import Date from '../components/date';

// Затем в нижней части компонента Home в том же файле замените li тег следующим:

<li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>{title}</Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>;

// Если вы перейдете по адресу http://localhost:3000, на странице теперь будут ссылки на каждую статью.

// Вот и все! Прежде чем завершить этот урок, давайте поговорим о некоторых советах по созданию динамических маршрутов на следующей странице.
