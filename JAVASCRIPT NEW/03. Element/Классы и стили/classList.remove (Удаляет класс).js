//# .classList.remove()
/*
- Удаление класса. Метод remove удаляет у элемента класс, переданный как аргумент:
- В remove() можно передать несколько аргументов и удалится несколько классов.
*/

//# пример
let garage = document.querySelector('.garage');
garage.classList.remove('jaguar');
garage.classList.remove('jaguar', 'porshe');
