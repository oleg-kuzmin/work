//# setInterval()
// Метод setInterval устанавливает циклический таймер. Он позволяет вызывать колбэк много раз, через заданные промежутки времени. Например, сделать автоматическую проверку почты.

function checkEmail() {
  // Тут код для проверки, не появилось ли на почтовом сервере новых писем.
}

setInterval(checkEmail, 10000); // Ящик будет обновляться каждые десять секунд

//# clearInterval()
// Когда таймер не нужен, его следует удалить, чтобы не тратить ресурсы браузера. Для этого нужно передать таймер методу clearInterval.

const interval = setInterval(checkEmail, 10000);

// Если пользователь переключил вкладку,
window.addEventListener('blur', function () {
  clearInterval(interval); // удаляем таймер.
});

// Если пользователь вернулся на вкладку,
window.addEventListener('focus', function () {
  interval = setInterval(checkEmail, 10000); // снова запускаем таймер.
});
