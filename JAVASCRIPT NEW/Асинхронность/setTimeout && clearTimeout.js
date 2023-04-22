//# setTimeout()
// Установка таймера - Метод setTimeout ждёт определённое время, после чего исполняет какой-то код.

//# синтаксис
/* На вход этот метод принимает:
1) первым аргументом колбэк: код, который нужно выполнить;
2) вторым аргументом — паузу в миллисекундах, которую нужно выждать, прежде чем исполнять код колбэка;
3) аргументы, которые нужно передать колбэку на вход. */

function showMessage(message) {
  console.log(message);
}

setTimeout(showMessage, 10000, 'С загрузки страницы прошло 10 секунд');
// Через 10 секунд (то есть 10 тысяч миллисекунд) после загрузки страницы в консоли появится сообщение.

//# clearTimeout()
// Нужно записать setTimeout в переменную

function logOut() {
  // здесь логика «выкидывания» пользователя из системы
}

// через 300 секунд выкинем пользователя
let timer = setTimeout(logOut, 300000);

// если пользователь кликнул куда-то, сбросим таймер и будем ждать заново
window.addEventListener('click', function () {
  clearTimeout(timer);
  timer = setTimeout(logOut, 300000);
});
