//# dblclick
// Возникает при двойном щелчке левой кнопкой. Обработчик отслеживает два срабатывания click подряд на одном элементе.

//# input
// Срабатывает при вводе или удалении каждого символа.

//# keydown
// Клавиша нажата. Сработает на любой клавише в тот момент, когда на неё нажмут. В таких случаях говорят, что клавиша «в нижнем положении».

//# keypress
// Нажатие на клавишу. Cработает при нажатии, но проигнорирует клавиши-модификаторы: alt, ctrl, shft и win — на Windows, и control, option, shift и command — на macOS.

//# keyup
// Клавиша отпущена. Сработает на любой клавише, но только когда её отпустят.


//# mousedown
// Возникает при щелчке мышью, когда кнопка в нижнем положении. События mousedown и mouseup срабатывают на все кнопки мыши: левую, правую и нажатие на колёсико. Они полезны для создания Drag'n'Drop — интерфейса, в котором элемент можно схватить и перетащить на другое место.

//# mouseout
/*
- Пользователь убрал указатель мыши с элемента.
- С помощью пары событий mouseover и mouseout можно делать выпадающие списки и меню. Но у таких меню могут быть проблемы с доступностью.
- Есть очень похожее событие mouseenter, но оно не всплывает. Вместо этого для каждого элемента в цепочке вложенности (с самого вложенного элемента, на котором произошло событие до <body>) создаётся собственное событие. Если у вас глубокое DOM-дерево, то таких событий может быть много. Это может привести к проблемам с производительностью.
*/

//# mouseover
/*
- Пользователь навёл указатель мыши на элемент.
- С помощью пары событий mouseover и mouseout можно делать выпадающие списки и меню. Но у таких меню могут быть проблемы с доступностью.
- Есть очень похожее событие mouseenter, но оно не всплывает. Вместо этого для каждого элемента в цепочке вложенности (с самого вложенного элемента, на котором произошло событие до <body>) создаётся собственное событие. Если у вас глубокое DOM-дерево, то таких событий может быть много. Это может привести к проблемам с производительностью.
*/

//# mouseup
/*
- Возникает при щелчке мышью, когда кнопка отпущена).
- При этом важно, только где она была отпущена, а не где нажата.
- Поэтому событие сработает, если щёлкнуть в произвольном месте, удерживать кнопку, навести на элемент и затем её отпустить.
- Событие mouseup сработает по-особенному для клика правой кнопкой: по умолчанию оно вызывает контекстное меню, в котором пользователь может скопировать текст, изображение или посмотреть код.
- События mousedown и mouseup срабатывают на все кнопки мыши: левую, правую и нажатие на колёсико. Они полезны для создания Drag'n'Drop — интерфейса, в котором элемент можно схватить и перетащить на другое место.
*/

//# orientationchange
window.addEventListener('orientationchange', () => {
  window.addEventListener('resize', function () {
    window.location.reload();
  });
});

//# resize
window.addEventListener('resize', function () {
  window.location.reload();
});

//# scroll
/*
- Пользователь прокручивает страницу или элемент в любой плоскости.
- Чтобы понять, насколько прокрутилась страница или элемент, этот элемент получают из DOM-дерева или ключевого слова this и запрашивают свойства scrollTop или scrollLeft.
*/
document.addEventListener('scroll', function (event) {
  console.log(event);
});
document.addEventListener('scroll', function () {
  // получаем высоту элемента, на котором произошло событие
  console.log(this.scrollTop);
});

//# submit
/*
- Событие submit возникает, когда пользователь отправляет валидную форму. Если форма невалидна и её нельзя отправить, то и submit не будет.
- За отправкой формы лучше всегда наблюдать через подписку именно на событие submit.
- Это удобнее и правильнее, ведь submit связан сразу с каждым элементом формы, а пользователь может отправить её разными способами. Например, нажать на клавишу Enter в поле ввода и не трогать вовсе красивую кнопку подтверждения. В то же время подписка на другие события, например на click по кнопке, будет лишь косвенно связано с отправкой формы.
- При отправке формы браузер «синтетически» кликает по кнопке на случай, если какое-то действие привязано к ней, а не к submit.
- Функция-обработчик срабатывает в момент отправки формы, когда все обязательные поля заполнены. К сожалению, при успешной отправке формы и отсутствующем атрибуте action страница перезагружается — это называется стандартным событием.
- Чтобы такого поведения не происходило — передайте в функцию-обработчик параметр evt. В самом начале тела функции вызовите метод evt.preventDefault() — это отменит стандартное событие.
*/
