//# array
// Массив — это структура, в которой можно хранить коллекции элементов — чисел, строк, других массивов и так далее. Элементы нумеруются и хранятся в том порядке, в котором их поместили в массив. Элементов может быть сколько угодно, они могут быть какими угодно. Массивы очень похожи на нумерованные списки.

//# пример
const guestList = [];
const theGirlList = ["Серсея", "Илин Пейн", "Меррин Трант", "Дансен", "Гора"];
const infoArray = ["Россия", "Москва", 144.5, "Russian ruble", true];
const arrayOfArrays = ["Россия", ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"], [true, true, false, true]];

//# общая информация
/* Чтобы получить содержимое ячейки с этим номером, обратитесь к конкретному индексу. Если ячейка пустая или такой ячейки нет, то JavaScript вернёт undefined.*/

//# методы
/*
1. concat   Объединяет массивы и элементы
2. push     Добавляет элементы в конец массива
3. pop      Удаляет последний элемент массива и возвращает его значение
4. unshift  Добавляет элементы в начало массива
5. shift    Удаляет первый элемент массива и возвращает его значение
6. slice    Копирует часть массива и создаёт из неё новый массив
7. splice   Удаляет часть элементов, а на их место ставит новые
8. forEach  Перебирает элементы и для каждого выполняет свой код
9. map      Создаёт новый массив из элементов исходного
10. filter  Создаёт новый массив из исходного, выкидывая элементы по заданным правилам
11. some    Проверяет, есть ли в массиве хоть один элемент, соответствующий заданному правилу
12. every   Проверяет, все ли элементы массива соответствуют заданному правилу
13. find    Проверяет, есть ли в массиве определённый элемент
14. reduce  Сводит массив к какому-то одному значению
15. sort    Сортирует массив
*/
