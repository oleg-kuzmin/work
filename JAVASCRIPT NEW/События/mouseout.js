//# mouseout
// Пользователь убрал указатель мыши с элемента.

//# пример
const divEl = document.getElementsByTagName('div')[0];
divEl.addEventListener('mouseout', function () {
  console.log('курсор вышел за границы элемента!');
});

//# общая информация
/* - С помощью пары событий mouseover и mouseout можно делать выпадающие списки и меню. Но у таких меню могут быть проблемы с доступностью.
- Есть очень похожее событие mouseenter, но оно не всплывает. Вместо этого для каждого элемента в цепочке вложенности (с самого вложенного элемента, на котором произошло событие до <body>) создаётся собственное событие. Если у вас глубокое DOM-дерево, то таких событий может быть много. Это может привести к проблемам с производительностью.*/