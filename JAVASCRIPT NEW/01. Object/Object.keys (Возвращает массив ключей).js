//# Object.keys() (Возвращает массив ключей)
/*
- Массив ключей объекта удобно получить, передав объект как аргумент методу Object.keys.
- Лучше не полагаться на порядок ключей в объекте. Когда порядок элементов важен — используйте массивы.
*/

//# пример
Object.keys({ name: 'Алан', surname: 'Кей' }); // ["name", "surname"]
