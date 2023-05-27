//# .includes() (Проверка наличия элемента)
/*
- Этот метод определён у массивов и строк.
- Для строк: проверяет, есть ли искомая подстрока в строке.
- Возвращает true, если искомый элемент нашёлся и false — если нет.
- Используйте метод, когда нужно убедиться в том, что объект находится в массиве(строке).
- Например, чтобы не добавить одно и то же значение дважды.
- Будьте внимательны при передаче в includes() объектов.
- Если два объекта выглядят одинаково, это не обязательно один объект, потому что объекты хранятся по ссылке.
*/

//# пример
//* для строки
const text = 'Посмотри, ведь это рядом наша панда. Мы бежим с тобой как-будто от гепарда.';
console.log(text.includes('панда')); // true
console.log(text.includes('Обезьяна')); // false
console.log(text.includes('Панда')); // false (поиск идет с учетом регистра)
