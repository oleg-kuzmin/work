// Синтаксис
fetch("url", { object });
// url - обязательный аргумент
// {object} - объект с настройками:

// GET ПОЛУЧИТЬ (ПО УМОЛЧАНИЮ)
// PATCH ИЗМЕНИТЬ
// POST	ОТПРАВИТЬ
// DELETE	УДАЛИТЬ
// PUT ОТПРАВИТЬ ЕДЕНИЧНЫЙ ЗАПРОС


function test() {
  return (
    fetch("https://yandex.ru", {
      // метод
      method: GET,
      // объект с заголовками
      headers: {
        // авторизация
        authorization: "f6f0e19f-3261-436f-8b67-2b9918fd933f",
        //тип передаваемого контента
        "Content-Type": "application/json",
      },
      // объект тела (всегда приводим к строке)
      body: JSON.stringify({
        user: "Oleg",
        age: "100",
      }),
      // для отправки cookie с клиента на сервер
      credentials: "include",
    })
      // получили данные с сервера если данные получили, то все ок иначе Promise с состоянием reject
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(res);
      })

      // обработаем ошибку, не прерывая Promise
      .catch((err) => {
        console.log(err);
        throw err; // исключение - проброска ошибки, чтобы не выполнялись следующие then
      })
  );
}

// упрощенный вариант
const makeRequest = (url, method, data) => {
  const requestOptions = { method };

  if (data) {
    requestOptions.headers["Content-type"] = "application/json";
    requestOptions.body = JSON.stringify(data);
  }
  return fetch(url, requestOptions).then((res) => {
    return res.ok ? res.json() : Promise.reject(res);
  });
};
// вызов функции тогда будет выглядить так:
makeRequest ('https://yandex.ru', 'GET', {user: "Oleg", age: "100"})

// Promise
// проверка статуса запроса
checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

let isLoading = true; // загрузка (например кружок)
fetch("https://jsonplaceholder.typicode.com/todos/1") // делаем запрос
  .then((response) => response.json()) // переводим в json ответ
  .then((json) => console.log(json)) // выводим в консоль
  .catch((error) => console.error(error)) // выводим ошибку
  .finally(() => {
    // произойдет в любом случае
    isLoading = false; // загрузка завершена
  });

// пример GET-запроса
function getProfileInformation() {
  return fetch(`${this.url}/users/me`, {
    headers: this.headers,
  }).then(this.checkResponse);
}

// пример PATCH-запроса
function editProfileInformation(profileInformation) {
  return fetch(`${this.url}/users/me`, {
    method: "PATCH",
    headers: this.headers,
    body: JSON.stringify(profileInformation),
  }).then(this.checkResponse);
}

// пример POST-запроса
function addCardToServer(data) {
  return fetch(`${this.url}/cards`, {
    method: "POST",
    headers: this.headers,
    body: JSON.stringify(data),
  }).then(this.checkResponse);
}

// пример DELETE-запроса
function removeCardToServer(cardId) {
  return fetch(`${this.url}/cards/${cardId}`, {
    headers: this.headers,
    method: "DELETE",
  }).then(this.checkResponse);
}

// пример PUT-запроса
function addLike(cardId) {
  return fetch(`${this.url}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: this.headers,
  }).then(this.checkResponse);
}

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
