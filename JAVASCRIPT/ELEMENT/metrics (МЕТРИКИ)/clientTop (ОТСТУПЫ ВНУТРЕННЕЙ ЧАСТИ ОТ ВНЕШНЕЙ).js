//# element.clientTop (ОТСТУПЫ ВНУТРЕННЕЙ ЧАСТИ ОТ ВНЕШНЕЙ)
/*
- По сути это рамки (border). Но на самом деле эти свойства – вовсе не ширины рамок, а отступы внутренней части элемента от внешней.
- Разница возникает, когда документ располагается справа налево (операционная система на арабском языке или иврите). Полоса прокрутки в этом случае находится слева, и тогда свойство clientLeft включает в себя ещё и ширину полосы прокрутки.
- Все свойства доступны только для чтения, кроме scrollLeft/scrollTop, изменение которых заставляет браузер прокручивать элемент.
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
//* Число - border/отступы внутренней части элемента от внешней в пикселях (сверху)

//# Пример
element.clientTop;
