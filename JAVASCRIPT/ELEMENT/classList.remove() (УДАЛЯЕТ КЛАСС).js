//# element.classList.remove() (УДАЛЯЕТ КЛАСС)
// Метод используется для удаления класса у элемента. В качестве аргумента нужно передавать строку с именем класса.

//# Синтаксис
//* Строка с именем класса
element.classList.remove('имя-класса');

//* Несколько строк
element.classList.remove('имя-класса', 'имя-класса');

//# Пример
const garage = document.querySelector('.garage');
garage.classList.remove('jaguar');
