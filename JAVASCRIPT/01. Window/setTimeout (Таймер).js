//# setTimeout() (Таймер)
/*
- Установка таймера - Метод setTimeout ждёт определённое время, после чего исполняет какой-то код.

- На вход этот метод принимает:
1) первым аргументом колбэк: код, который нужно выполнить;
2) вторым аргументом — паузу в миллисекундах, которую нужно выждать, прежде чем исполнять код колбэка;
3) аргументы, которые нужно передать колбэку на вход.
*/

//# пример
function showMessage(message) {
  console.log(message);
}

setTimeout(showMessage, 10000, 'С загрузки страницы прошло 10 секунд');
// Через 10 секунд (то есть 10 тысяч миллисекунд) после загрузки страницы в консоли появится сообщение.

//# clearTimeout()
function logOut() {}
let timer = setTimeout(logOut, 300000);

// Если пользователь переключил вкладку
window.addEventListener('blur', function () {
  clearTimeout(timer); // удаляем таймер.
});
