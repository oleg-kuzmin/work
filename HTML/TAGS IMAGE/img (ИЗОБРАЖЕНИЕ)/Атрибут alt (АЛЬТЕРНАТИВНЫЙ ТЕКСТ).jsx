//# Атрибут alt (АЛЬТЕРНАТИВНЫЙ ТЕКСТ)
/*
- Обязательный атрибут. Текст в alt называется альтернативным описанием изображения и рассказывает словами, что изображено. Это полезно, если картинка не загрузилась или пользователь не видит изображения.
- Если забыть добавить атрибут, то скринридер попытается прочесть название файла: в лучшем случае это будет logo-large, но может быть и b764b84c, что не очень информативно. Если оставить значение атрибута пустым, то скринридер посчитает это изображение декоративным, а не контентным. Если вы добиваетесь именно этого — отлично, но тогда, возможно, стоит вставить его как фоновую картинку с помощью CSS.
- Когда картинка по какой-то причине не загружается, браузеры отображают вместо неё альтернативный текст. Его даже можно стилизовать, если задать текстовые стили тегу <img>.
*/

//# Пример
<img alt="Логотип: собака, бегущая за мячом, изображено схематично" />;
