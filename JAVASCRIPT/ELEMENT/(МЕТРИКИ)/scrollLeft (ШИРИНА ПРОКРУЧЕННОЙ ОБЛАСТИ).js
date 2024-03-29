//# element.scrollLeft (ШИРИНА ПРОКРУЧЕННОЙ ОБЛАСТИ)
/*
- Свойства scrollLeft/scrollTop – ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.
- Другими словами, свойство – это сколько уже прокручено.
- Свойства scrollLeft/scrollTop можно изменять
- В отличие от большинства свойств, которые доступны только для чтения, значения scrollLeft/scrollTop можно изменять, и браузер выполнит прокрутку элемента.
*/

/*
------------------offsetWidth--------------------
|                  clientTop                    | offsetHeight
| clientLeft *****clientWidth*****              |
|            *                   * clientHeight |
|            *                   *              |
|            *                   *              |
|            *                   * clientHeight |
|            *****clientWidth*****              | offsetHeight
------------------offsetWidth--------------------
*/

//# Возвращает
//* Число - сколько уже прокручено по горизонтали

//# Пример
element.scrollLeft;
