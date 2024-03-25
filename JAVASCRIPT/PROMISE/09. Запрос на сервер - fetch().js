//# Запрос на сервер - fetch()
/*
- С помощью функции fetch() можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные. Метод возвращает промис с объектом ответа, где находится дополнительная информация (статус ответа, заголовки) и ответ на запрос.
- Браузер предоставляет глобальный API для работы с запросами и ответами HTTP. Раньше для подобной работы использовался XMLHttpRequest, однако fetch() более гибкая и мощная альтернатива, он понятнее и проще в использовании из-за того, что использует Promise.
- Метод fetch асинхронный. Когда вы его вызываете, он создаёт промис, а когда получает ответ — переводит промис в нужный статус. Ответ от сервера при этом записывается в промис, так что его можно использовать через then и catch.
*/

//# Синтаксис
fetch('url', options);

//* 1. Строка url - адрес, по которому нужно сделать запрос
// По умолчанию вызов fetch() делает GET-запрос по указанному адресу.

//* 2. Объект options - объект конфигурации, в котором можно настроить метод запроса, тело запроса, заголовки и многое другое (опционально)

const options = {
  // Здесь так же могут быть GET, PUT, DELETE
  method: 'POST',

  // Тело запроса в JSON-формате
  body: JSON.stringify(newPost),

  // Добавляем необходимые заголовки
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

  /**
   * По умолчанию fetch() запросы не включают в себя cookies и потому авторизованные запросы на сервере могут не пройти.
   * Для этого необходимо добавить в настройку поле credentials: 'include'
   * (или 'same-origin' если можно делать такие запросы только в пределах этого домена)
   */
  credentials: 'include',
};

//# Возвращает
//* Promise с объектом response
/*
- Результатом вызова fetch() будет Promise, в котором будет содержаться специальный объект ответа (response). У этого объекта есть следующие поля:
*/

//# response.status
// Код статуса ответа от сервера.
fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.status); // 200

//# response.statusText
// Сообщение статуса ответа от сервера - оно объясняет, что произошло.
fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.statusText); // OK

//# response.ok
/*
- Свойство принимает состояние и сообщает об успешности запроса:
1. true (если ответ успешный: начинается с 2)
2. false (в любом другом случае)
*/

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Что-то пошло не так: ${response.status}`);
    }
  })
  .then(data => data);

//# response.json()
// Асинхронный метод, вызов которого возвращает Promise c объектом ответа от сервера (преобразованного из json-формата в привычный объект JavaScript).

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => data);

//# response.text()
// Разбирает ответ от сервера как текст.

//# response.blob()
// Разбирает ответ от сервера как бинарные данные (это нужно при получении файлов: изображений, видео, pdf-документов).

//# response.headers.get()
// Для работы с заголовками есть специальные методы. Чтобы получить значение заголовка, есть метод get. заголовки ответа можно только читать, но нельзя редактировать.

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (res.headers.get('Content-Type').contains('application/json')) {
      return res.json();
    }
  })
  .then(data => data);

//# Функция для проверки ответа
function checkResponse(response) {
  return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}
