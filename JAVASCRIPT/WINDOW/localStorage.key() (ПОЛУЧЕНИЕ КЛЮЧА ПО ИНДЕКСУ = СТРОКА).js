//# window.localStorage.key() (ПОЛУЧЕНИЕ КЛЮЧА ПО ИНДЕКСУ = СТРОКА)
// Метод key() получает ключ по индексу. Значения в хранилище хранятся в порядке их добавления, поэтому значение, добавленное первым, будет храниться в позиции 0 и так далее.

//# Синтаксис
//* Число - индекс ключа
window.localStorage.key(0);

//# Пример
window.localStorage.setItem('name', 'Дока Дог');
console.log(window.localStorage.key(0)); // 'name'

//# Перебор всех значений
// Используя количество полей в хранилище и получение ключа по индексу, можно организовать перебор всех значений в хранилище.
const localStorageSize = window.localStorage.length;
for (let i = 0; i < localStorageSize; i++) {
  console.log(window.localStorage.getItem(localStorage.key(i)));
}
