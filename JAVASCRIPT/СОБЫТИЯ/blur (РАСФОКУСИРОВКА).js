//# blur (РАСФОКУСИРОВКА)
// Событие возникает при снятии фокуса с элемента.

//# Пример
//* onblur
input.onblur = function () {
  console.log('Фокус снят');
};

//* addEventListener
input.addEventListener('blur', function () {
  console.log('Фокус снят');
});

//* Если пользователь переключил вкладку
window.addEventListener('blur', function () {
  console.log('пользователь переключил вкладку');
});
