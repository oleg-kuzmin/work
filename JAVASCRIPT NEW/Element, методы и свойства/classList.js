//# classList
// Для работы с классами элемента есть удобные методы, доступные через свойство classList.
//* добавить класс — метод add().
//* удалить класс — метод remove().

const element = document.getElementsByTagName("div")[0];
element.classList.add("hello");
element.classList.remove("bye");
