//# .classList.replace()
/*
Замена класса. Метод позволяет заменить одно значение класса другим. Метод принимает 2 параметра:
1) название класса, который нужно заменить
2) название класса, на что нужно заменить

После выполнения replace() возвращает boolean-значение, которые сообщает нам об успешности операции:
- true если класс был заменён;
- false если ничего не изменилось.
*/

//# пример
const button = document.querySelector('button.hidden');
const result = button.classList.replace('hidden', 'visible');
console.log(result); // true
const resultAgain = button.classList.replace('hidden', 'visible');
console.log(result); // false
