//# removeEventListener (УДАЛЕНИЕ ОБРАБОТЧИКА)
// Переданные настройки влияют на удаление обработчика события. Рекомендуется повторять в точности те же параметры, которые использовались в .addEventListener(), чтобы браузер точно знал какой обработчик нужно удалить.

//# Cинтаксис
//* 1. Строка - cобытие, на которое нужно отреагировать
//* 2. Функция - будет вызвана, когда событие сработает
//* 3. { options } - объект дополнительных опций.
element.removeEventListener('event', handler, { options });

//# Пример
element.removeEventListener('click', showClick);
