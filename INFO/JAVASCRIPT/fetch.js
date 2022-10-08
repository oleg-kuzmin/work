// Promise
let isLoading = true; // загрузка (например кружок)
fetch("https://jsonplaceholder.typicode.com/todos/1") // делаем запрос
  .then((response) => response.json()) // переводим в json ответ
  .then((json) => console.log(json)) // выводим в консоль
  .catch((error) => console.error(error)) // выводим ошибку
  .finally(() => {
    // произойдет в любом случае
    isLoading = false; // загрузка завершена
  });

// Async, await асинхронная функция
const fetchToDo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }
};
fetchToDo();