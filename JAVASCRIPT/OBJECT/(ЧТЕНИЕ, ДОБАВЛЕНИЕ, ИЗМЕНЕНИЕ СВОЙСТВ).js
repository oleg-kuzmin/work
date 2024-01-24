//# (ЧТЕНИЕ, ДОБАВЛЕНИЕ, ИЗМЕНЕНИЕ СВОЙСТВ)
/*
- Если прочитать свойство, которого нет у объекта, то вернётся undefined.
- Если попытаться у свойства, котороe undefined, дальше получить еще какое-то свойство, то мы получим ошибку
!"Cannot read properties of undefined"
- Избежать этого можно использовав синтаксис опциональной цепочки.
- Если ключ содержит пробел, то обращаться к нему возможно только через квадратные скобки.
*/

const bookExample = {
  title: 'Капитанская дочка',
};

//* через точку (чтение)
console.log(`На полке стоит «${book.title}»`);

//* через квадратные скобки (чтение)
console.log(`На полке стоит «${book['title']}»`);
console.log(obj[key]);

//* через точку (добавление и изменение)
bookExample.author = 'А.С.Пушкин'; // добавляем новое свойство
bookExample.title = 'Сказка о царе Салтане'; // изменяем существующее

//* через квадратные скобки (добавление и изменение)
book['author'] = 'А.С.Пушкин'; // добавляем новое свойство
book['title'] = 'Сказка о царе Салтане'; // изменяем существующее