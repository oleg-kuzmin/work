//# head (head) (голова)
/*
- Элемент <head> содержит основную информацию о документе: метаданные (например, заголовок окна или кодировку), ссылки на скрипты и таблицы стилей.
- Эта информация не отображается на странице браузера. Пользователи увидят только заголовок окна страницы — его задаёт тег <title>, ну и фавиконку, если вы её поставите.
- Кроме <title>, внутри контейнера <head> можно разместить и другие элементы: <base>, <link>, <meta>, <script>, <style>.
- <head> — это мозги, которые всем управляют. Метаданные и стили, которые прописываются в <head>, указывают, как ваша страница ведёт себя в тех или иных случаях.
*/

//# Пример
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Заголовок страницы</title>
    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    <meta name="author" content="Oleg Kuzmin" />
    <meta property="og:title" content="Заголовок страницы - Мой сайт" />
  </head>
</html>;
