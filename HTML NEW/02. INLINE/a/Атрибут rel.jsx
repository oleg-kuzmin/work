//# Атрибут rel
/*
- Определяет отношение между страницей, где находится ссылка, и страницей или файлом, куда она ведёт.
- Обычно это очень техническая информация, которая нужна браузерам и разработчикам, чтобы определять, что находится по ссылке, и, в некоторых случаях, какое действие нужно выполнить сайту, который открывается по ссылке.
*/

//# Пример
<a rel="noopener noreferrer" target="_self"></a>;

//# Значения
//* rel="noopener noreferrer"
// Используйте rel="noopener noreferrer", чтобы в момент открытия внешние сайты не узнали лишнего про текущую страницу.

//* rel="alternate"
// Cсылка на альтернативную версию текущего документа (например, версия для печати, перевод, зеркало).

//* rel="author"
// Ссылка на автора документа.

//* rel="bookmark"
// Постоянный URL, используемый для создания закладки.

//* rel="help"
// Ссылка на страницу помощи.

//* rel="license"
// Ссылка на информацию об авторстве.

//* rel="next"
// Следующий документ в выборе.

//* rel="nofollow"
// Ссылка на неиндексируемый документ (это значение запрещает поисковым роботам некоторых поисковых систем переходить по данной ссылке для ее индексации и тем самым передавать ссылочный вес).

//* rel="noreferer"
// Определяет, что при переходе по ссылке браузер не должен отсылать HTTP заголовок источника запроса.

//* rel="prefetch"
// Определяет, что целевой документ должен быть кэширован.

//* rel="prev"
// Предыдущий документ в выборе.

//* rel="search"
// Ссылка на инструмент поиска по документу.

//* rel="tag"
// Тег (метка) для текущего документа.