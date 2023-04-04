//# submit
// Событие submit возникает, когда пользователь отправляет валидную форму. Если форма невалидна и её нельзя отправить, то и submit не будет.

//# пример
document.addEventListener('submit', function () {
  alert('Спасибо, что заполнили форму!');
});

//# общая информация
/* - За отправкой формы лучше всегда наблюдать через подписку именно на событие submit.
- Это удобнее и правильнее, ведь submit связан сразу с каждым элементом формы, а пользователь может отправить её разными способами. Например, нажать на клавишу Enter в поле ввода и не трогать вовсе красивую кнопку подтверждения. В то же время подписка на другие события, например на click по кнопке, будет лишь косвенно связано с отправкой формы.
- При отправке формы браузер «синтетически» кликает по кнопке на случай, если какое-то действие привязано к ней, а не к submit.
- Функция-обработчик срабатывает в момент отправки формы, когда все обязательные поля заполнены. К сожалению, при успешной отправке формы и отсутствующем атрибуте action страница перезагружается — это называется стандартным событием.
- Чтобы такого поведения не происходило — передайте в функцию-обработчик параметр evt. В самом начале тела функции вызовите метод evt.preventDefault() — это отменит стандартное событие.*/
