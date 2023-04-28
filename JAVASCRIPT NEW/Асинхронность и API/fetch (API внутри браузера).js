//# fetch (API внутри браузера)
/* Метод  создаёт запрос на сервер и возвращает его ответ. На вход fetch принимает два аргумента.

1) Первый — обязательный — URL запрашиваемого ресурса.
2) Второй аргумент — необязательный. Это объект опций. Чаще всего нужны опции method, headers и body: они отвечают за метод запроса, его заголовки и тело.

Метод fetch асинхронный. Когда вы его вызываете, он создаёт промис, а когда получает ответ — переводит промис в нужный статус. Ответ от сервера при этом записывается в промис, так что его можно использовать через then и catch. */

//# пример
fetch('https://swapi.nomoreparties.co/people').then((res) => console.log(res));

//# метод .json()
// Метод json читает ответ от сервера в формате json и возвращает промис. Из этого промиса потом можно доставать нужные нам данные. Метод json асинхронный.

//# status и statusText
// status - число статуса. После числа статуса идёт сообщение статуса — оно объясняет, что произошло. Код и сообщения статуса хранятся в свойствах объекта ответа status и statusText.
fetch('https://api.kanye.rest').then((res) => {
  console.log(res.status, res.statusText); // 200 OK
});

//# ok
// Для удобства также доступно булево свойство ok. Оно хранит в себе true, если ответ успешный (начинается с 2), и false — в любом другом случае.
fetch('https://api.kanye.rest').then((res) => {
  console.log(res.ok); // true
});

const quoteElement = document.querySelector('div.quote');

fetch('https://api.kanye.rest')
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
  .then((data) => {
    quoteElement.textContent = data.quote;
  })
  .catch((err) => {
    console.log(err);
  });

//# заголовки ответа (headers)
// Для работы с заголовками есть специальные методы. Чтобы получить значение заголовка, есть метод get. заголовки ответа можно только читать, но нельзя редактировать.
fetch('https://api.kanye.rest').then((res) => {
  if (res.headers.get('Content-Type').contains('application/json')) {
    return res.json();
  }
});

//# тело ответа
/*
res.json — разбирает JSON в объект, этот метод вы уже знаете;
res.text — разбирает тело как текст;
res.blob — разбирает тело ответа как бинарные данные: это нужно при получении файлов (изображений, видео, pdf-документов).
*/

//# GET
// GET — самый распространённый метод. Данные обычно получают именно этим методом. Если метод не прописать явно, fetch будет отправлять запросы методом GET.
fetch('https://example.com')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.user.name); // если мы попали в этот then, data — это объект
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });

//# POST
// POST — второй по распространённости метод. Его используют для отправки данных на сервер. Чтобы послать запрос методом POST, нужно указать этот метод в объекте опций — втором аргументе метода fetch.
// Поскольку метод POST отправляет данные, эти данные нужно как-то хранить в запросе. Для этого их нужно перевести в формат JSON и записать в свойство body объекта опций.
fetch('https://example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'ivan',
  }),
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(`Ошибка ${err}. Запрос не выполнен`);
  });

//# PUT
// предназначен для полного обновления указанного ресурса. Например, если в каталоге книг вы решили заменить одну книгу другой

//# PATCH
// для частичного обновления ресурса. Например, при обновлении профиля пользователя

//# DELETE
// для удаления ресурса с сервера

//# headers Content-Type
/*
text/plain (текст)
text/html  (html)
text/javascript (js)
text/css (css)
image/jpeg (картинка в формате jpg)
image/png  (картинка в формате png)
audio/mpeg (аудио в формате mpeg)
audio/ogg (аудио в формате ogg)
video/mp4 (аудио в формате mp4)
application/json (данные в формате JSON)
application/x-www-form-urlencoded (формат, который кодирует поля формы так, чтобы их можно было отправить в URL)
multipart/form-data (для отправки файлов на сервер. Подойдёт, если среди прочего вы отправляете через форму картинку)
*/

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
