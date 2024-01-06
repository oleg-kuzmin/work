//# Атрибут property и content
// Есть отдельная категория метаразметки — OG-разметка. OG расшифровывается как open graph. Такая разметка нужна для того, чтобы при вставке ссылки на ваш сайт в соцсетях в превью отображалась красивая карточка.

//# Пример
// Стандартный набор метатегов для красивой карточки в Facebook
<head>
  <meta property="og:title" content="Лучший сайт в интернете" />
  <meta property="og:description" content="Посетите лучший сайт в интернете и познайте тщетность бытия" />
  <meta property="og:image" content="http://best-site/thumbnail.jpg" />
  <meta property="og:url" content="http://best-site/index.htm" />
</head>;

//# Значения
//* property="og:title" (обязательное свойство)
<meta property="og:title" content="Заголовок страницы - Мой сайт" />;
// Уникальный заголовок страницы, оптимальный размер ~65 символов.

//* property="og:type" (обязательное свойство)
<meta property="og:type" content="website" />;
/* Нужен для определения типа контента, в большинстве случаев можно использовать website.
Возможные значения:
- content="website"
- content="article"
- content="audio"
- content="image"
- content="video"
*/

//* property="og:url" (обязательное свойство)
<meta property="og:url" content="https://example.com/page" />;
// Адрес текущей страницы сайта.

//* property="og:image" (обязательное свойство)
<meta property="og:image" content="https://example.com/image.jpg" />;
// Основное изображение вашей карточки. Размер рекомендуется использовать не менее 600*315.

//* property="og:description" (дополнительное свойство)
<meta property="og:description" content="Описание страницы" />;
// Описание страницы. Оптимальный размер ~165 символов.

//* property="og:image:alt"
<meta property="og:image:alt" content="Описание изображения" />;
// Используется для описания изображения карточки.

//* property="og:locale"
<meta property="og:locale" content="ru_RU" />;
// Указывает на используемый язык текущей страницы.
