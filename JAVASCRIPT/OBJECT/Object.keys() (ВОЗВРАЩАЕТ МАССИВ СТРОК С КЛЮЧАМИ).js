//# Object.keys() (ВОЗВРАЩАЕТ МАССИВ СТРОК С КЛЮЧАМИ)
/*
- Массив ключей объекта удобно получить, передав объект как аргумент методу Object.keys.
- Лучше не полагаться на порядок ключей в объекте. Когда порядок элементов важен — используйте массивы.
*/

//# Синтаксис
//* Объект - ключи из которого нужно достать
Object.keys(object);

//# Возвращает
//* Массив строк с ключами.

//# Пример
const user = { name: 'Алан', surname: 'Кей' };
Object.keys(user); // ["name", "surname"]
