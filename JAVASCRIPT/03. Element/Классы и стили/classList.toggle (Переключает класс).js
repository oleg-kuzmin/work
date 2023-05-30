//# .classList.toggle()
/*
- Переключение класса. Метод toggle работает как add, если у элемента класс отсутствует, и как remove — если присутствует.
- Метод toggle() принимает только один класс для переключения. Опционально вторым аргументом можно передать boolean-значение: метод будет работать как add(), если передать true, и как remove(), если передать false.
*/

//# пример
const button = document.querySelector('button.submit'); // На кнопке есть класс submit
button.classList.toggle('submit', false); // Передаём вторым аргументом false и будет работать как remove()
console.log(button.classList[0]); // undefined, потому что класса больше нет
button.classList.toggle('submit', true); // Передаём true и теперь класс добавится
