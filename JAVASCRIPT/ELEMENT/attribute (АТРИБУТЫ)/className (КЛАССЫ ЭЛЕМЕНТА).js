//# element.className (КЛАССЫ ЭЛЕМЕНТА)
/*
- С его помощью можно прочитать или записать значение атрибута class.
- Если у элемента несколько классов, в свойстве className они будут разделены пробелами.
- className это строка с названиями классов в отличие от classList, который является псевдомассивом строк.
*/

//# Возвращает
//* Строка с значением атрибута || null - если атрибута нет.

//# Пример
<div class="cat">Мурзик</div>;
const cat = document.querySelector('.cat');
console.log(cat.className); // Мурзик
