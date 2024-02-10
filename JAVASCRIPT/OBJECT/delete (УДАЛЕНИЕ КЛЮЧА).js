//# delete (УДАЛЕНИЕ КЛЮЧА)
/*
- Удалится и ключ и значение.
- Если вы знаете наверняка, что ключ в объекте вам больше не понадобится, удаляйте его оператором delete.
- Чаще всего свойства не удаляют, а сбрасывают значение, устанавливая undefined или подходящее по смыслу
*/

//# Синтаксис
//* Свойство объекта
delete object.prop;
delete book['prop'];

//# Возвращает
//* NONE (undefined).

//# Пример
const book = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  pages: 1274,
  isFinished: true,
  usersReading: [1946, 1293, 7743],
};

delete book.usersReading;
delete book['isFinished'];
