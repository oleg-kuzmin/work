//# Доступность mark
// У <mark> есть встроенная роль mark. Хотя скринридеры не рассказывают про роль пользователям и не выделяют содержимое с помощью изменения интонации, она добавляет тегу семантический вес и потенциал с точки зрения доступности.

// Чтобы тег в текущей реализации стал более доступным, нужно задействовать магию CSS — псевдоэлементы ::before, ::after и свойство content.

/*
mark::before {
  content: " [начало выделения] ";
}

mark::after {
  content: " [конец выделения] ";
}
*/

// Благодаря этому хаку пользователи узнают о выделениях в тексте, если в скринридере выбрана специальная настройка, благодаря которой технология зачитывает содержимое из content. Старайтесь использовать хак только когда это действительно нужно.

// Если поддерживаете режим высокой контрастности в Windows, не забудьте задать <mark> системный цвет с помощью значения forced-colors у директивы @media. Благодаря этому цвет выделения заменится на системный и будет таким же контрастным, как остальные цвета.

/*
@media (forced-colors: active) {
  mark {
    color: HighlightText;
    background-color: Highlight;
  }
}
*/
