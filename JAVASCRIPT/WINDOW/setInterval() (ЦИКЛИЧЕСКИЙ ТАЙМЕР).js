//# window.setInterval() (ЦИКЛИЧЕСКИЙ ТАЙМЕР)
/*
- setInterval() позволяет регулярно исполнять функцию через указанный промежуток времени.
- Указанное вторым аргументом число в миллисекундах обозначает время между запусками функции. При этом не учитывается время работы самой функции.
- Нужно быть абсолютно уверенным, что выполняемая функция отрабатывает быстрее, чем указанный таймер.
- setInterval() не гарантирует точный запуск по таймеру, но гарантирует, что предыдущая функция завершила свою работу. Если функция работает дольше указанного времени, то вызовы станут идти один за другим без пауз.
- Если необходимо выжидать время не между запусками функций, как в setInterval(), а между завершениями, то этого можно достичь цепочкой вызовов setTimeout().
*/

//# Синтаксис
//* 1. Функция - которая будет регулярно выполняться при истечении таймера.
//* 2. Число - время в миллисекундах между запусками функции.
const intervalID = setInterval(function () {
  console.log('Я выполняюсь каждую секунду');
}, 1000);

//# Возвращает
//* Возвращает идентификатор установленного таймера (intervalID).
// Далее идентификатор можно передать в функцию window.clearInterval(), чтобы остановить регулярное выполнение функции.

//# Пример (автоматическая проверка почты)
function checkEmail() {
  // Тут код для проверки, не появилось ли на почтовом сервере новых писем.
}
setInterval(checkEmail, 10000); // Ящик будет обновляться каждые десять секунд
