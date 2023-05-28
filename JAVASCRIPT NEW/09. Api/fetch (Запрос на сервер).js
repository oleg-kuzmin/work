//# fetch (Запрос на сервер)
/*
- С помощью функции fetch() можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные. Метод возвращает промис с объектом ответа, где находится дополнительная информация (статус ответа, заголовки) и ответ на запрос.
- Метод fetch асинхронный. Когда вы его вызываете, он создаёт промис, а когда получает ответ — переводит промис в нужный статус. Ответ от сервера при этом записывается в промис, так что его можно использовать через then и catch.
- Браузер предоставляет глобальный API для работы с запросами и ответами HTTP. Раньше для подобной работы использовался XMLHttpRequest, однако fetch() более гибкая и мощная альтернатива, он понятнее и проще в использовании из-за того, что использует Promise.
- По умолчанию вызов fetch() делает GET-запрос по указанному адресу.

- Функция fetch() принимает два параметра:
1) url — адрес, по которому нужно сделать запрос
2) options (необязательный) — объект конфигурации, в котором можно настроить метод запроса, тело запроса, заголовки и многое другое

- Результатом вызова fetch() будет Promise, в котором будет содержаться специальный объект ответа Response. У этого объекта есть два важных для нас поля:
1) ok — принимает состояние true или false и сообщает об успешности запроса;
2) json — метод, вызов которого, возвращает результат запроса в виде json.
*/

//# пример
fetch('https://swapi.nomoreparties.co/people').then(res => console.log(res));

//# метод .json()
// Метод json читает ответ от сервера в формате json и возвращает промис. Из этого промиса потом можно доставать нужные нам данные. Метод json асинхронный.

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => data);
// Получим ответ [{...}, {...}, {...}, ...]

//# метод .text()
// Разбирает тело (ответ от сервера) как текст.

//# метод .blob()
// Разбирает тело (ответ от сервера) как бинарные данные: это нужно при получении файлов (изображений, видео, pdf-документов).

//# .ok
// Для удобства также доступно булево свойство ok. Оно хранит в себе true, если ответ успешный (начинается с 2), и false — в любом другом случае.
fetch('https://api.kanye.rest').then(res => {
  console.log(res.ok); // true
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Что-то пошло не так: ${res.status}`)
    .then(data => {
      quoteElement.textContent = data.quote;
    })
    .catch(err => {
      console.log(err);
    });
});

//# .status и .statusText
// status - число статуса. После числа статуса идёт сообщение статуса — оно объясняет, что произошло. Код и сообщения статуса хранятся в свойствах объекта ответа status и statusText.
fetch('https://api.kanye.rest').then(res => {
  console.log(res.status, res.statusText); // 200 OK
});

//# headers.get заголовки ответа
// Для работы с заголовками есть специальные методы. Чтобы получить значение заголовка, есть метод get. заголовки ответа можно только читать, но нельзя редактировать.
fetch('https://api.kanye.rest').then(res => {
  if (res.headers.get('Content-Type').contains('application/json')) {
    return res.json();
  }
});

//# функция для проверки ответа
// Любой ответ на запрос через fetch() (например HTTP-код 400, 404 или 500) переводит Promise в состояние fulfilled. Промис перейдёт в состояние rejected только если запрос не случился из-за сбоя сети или что-то помешало выполнению fetch(). Поэтому после выполнения fetch проверяем статус ответа через свойство ok.
function checkResponse(response) {
  return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}

//# GET
// GET — самый распространённый метод. Данные обычно получают именно этим методом. Если метод не прописать явно, fetch будет отправлять запросы методом GET.

fetch('https://example.com')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data.user.name); // если мы попали в этот then, data — это объект
  })
  .catch(err => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });

//# POST
// POST — второй по распространённости метод. Его используют для отправки данных на сервер. Чтобы послать запрос методом POST, нужно указать этот метод в объекте опций — втором аргументе метода fetch. Поскольку метод POST отправляет данные, эти данные нужно как-то хранить в запросе. Для этого их нужно перевести в формат JSON и записать в свойство body объекта опций.

fetch('https://example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'ivan',
  }),
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(`Ошибка ${err}. Запрос не выполнен`);
  });

//# PUT
// Предназначен для полного обновления указанного ресурса. Например, если в каталоге книг вы решили заменить одну книгу другой.

fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
  method: 'PUT',
  headers: this.headers,
}).then(this.checkResponse);

//# PATCH
// Для частичного обновления ресурса. Например, при обновлении профиля пользователя

fetch(`${this.baseUrl}/users/me/avatar`, {
  method: 'PATCH',
  headers: this.headers,
  body: JSON.stringify({
    avatar: objectInputValues.avatarUrl,
  }),
}).then(this.checkResponse);

//# DELETE
// Для удаления ресурса с сервера
fetch(`${this.baseUrl}/cards/${idCard}`, {
  method: 'DELETE',
  headers: this.headers,
}).then(this.checkResponse);

//# Cookies
// По умолчанию fetch() запросы не включают в себя cookies и потому авторизованные запросы на сервере могут не пройти. Для этого необходимо добавить в настройку поле credentials:

fetch('https://somesite.com/admin', {
  method: 'GET',
  // или 'same-origin' если можно делать такие запросы только в пределах этого домена
  credentials: 'include',
});

//# Как передать данные на сервер
//* в теле запроса
fetch('https://example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'ivan',
  }),
});

//* В параметрах запроса
fetch('https://example.com/images/random?type=portrait&name=DorianGrey', {
  method: 'GET',
});

//* Прямо в URL
fetch('https://example.com/images/ewfh23d832jnf2903', {
  // ewfh23d832jnf2903 — идентификатор картинки
  method: 'GET',
});
