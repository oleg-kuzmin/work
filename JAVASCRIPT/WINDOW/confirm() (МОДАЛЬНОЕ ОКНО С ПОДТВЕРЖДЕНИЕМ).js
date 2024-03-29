//# window.confirm (МОДАЛЬНОЕ ОКНО С ПОДТВЕРЖДЕНИЕМ)
/*
- При помощи функции confirm() можно вывести на экран пользователя модальное окно с текстом и кнопками «Ок» и «Отмена».
- Из-за того, что окно модальное — работа с интерфейсом браузера и страницами будет заблокирована. Это неудобно, плюс может восприниматься пользователем как попытка ограничивать его свободу. Модальное окно для пользователя — окно, которое блокирует работу пользователя с браузером до тех пор, пока пользователь это окно не закроет.
- Это крайне быстрый вариант кода, который взаимодействует с пользователем, но окно созданное таким образом не изменяется через CSS, а значит использовать его лучше только для прототипирования интерфейса. В финальном варианте веб-страницы использовать модальное окно нежелательно.
- Аргумент для confirm() должен быть строкой. Если это не так, то JavaScript автоматически приведёт его к строке. Такое поведение не доставляет проблем, пока аргумент является примитивом или встроенным типом, имеющим правила приведения к строке. Если же в функцию передать объект, то получится непонятно.
*/

//# Синтаксис
//* Строка - текст, который появится в модальном окне
confirm('Ты здесь главный?');

//* Результат работы confirm() можно записать в переменную
const answer = confirm('Подтвердите удаление');

//# Возвращает
//* BOOLEAN-значeние ответа на вопрос в модальном окне.
// Результат вызова confirm() — булево значение: true если нажать «Окей» и false если нажать «Отмена».
