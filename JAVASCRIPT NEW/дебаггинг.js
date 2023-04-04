//# Reference error
// Ошибка Reference Error (ошибка ссылки) возникает, если обратиться к необъявленной переменной или вызвать несуществующую функцию

//* ReferenceError: numdberFnc is not defined (англ. «Функция numdberFnc не объявлена»)
/*
function numberFunc(num) {
  if (num > 0) {
    return num;
  } else if (num < 0) {
    return -num;
  } else {
    return 0;
  }
}
numdberFnc(12); // название
*/

//# Syntax Error
// Ошибка Syntax Error означает, что был нарушен синтаксис языка. Обычно такие ошибки вызваны тем, что пропущена скобка или точка с запятой поставлена в неположенном месте.

//* Uncaught SyntaxError: Unexpected token ) (англ. «Неожиданная скобка»)
/*
function bugFunction(sum) {
  return sum + sum;
}); // скобка
*/

//* Uncaught SyntaxError: Unexpected token else (англ. «Неожиданный ключ else»)
/*
if (true) {
  console.log('Всё правильно');
}; else { // точки с запятой перед else быть не должно
  console.log('Что-то не так');
}
*/

//# Ошибка типизации: Type Error
// Ошибка Type Error возникает, когда переменная используется не по назначению. Например, мы записали в неё строку, но пытаемся вызвать эту переменную как функцию.

//* Uncaught TypeError: hut is not a function (англ. «Переменная hut не является функцией»)
/*
let hut = 'Избушка';
let mouse = hut('Мышка'); // это не функция
*/
