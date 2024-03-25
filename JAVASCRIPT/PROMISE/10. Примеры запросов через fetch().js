//# Пример GET-запроса
// GET — самый распространённый метод. Данные обычно получают именно этим методом. Если метод не прописать явно, fetch будет отправлять запросы методом GET.

//* Пример 1
fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.json());

//* Пример 2
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

//# Пример POST-запроса
// POST — второй по распространённости метод. Его используют для отправки данных на сервер. Чтобы послать запрос методом POST, нужно указать этот метод в объекте опций — втором аргументе метода fetch. Поскольку метод POST отправляет данные, эти данные нужно как-то хранить в запросе. Для этого их нужно перевести в формат JSON и записать в свойство body объекта опций.

//* Пример 1
const newPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
  body: JSON.stringify(newPost), // Тело запроса в JSON-формате
  headers: {
    // Добавляем необходимые заголовки
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // {title: "foo", body: "bar", userId: 1, id: 101}
  });

//* Пример 2
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

//# Пример PUT-запроса
// Предназначен для полного обновления указанного ресурса. Например, если в каталоге книг вы решили заменить одну книгу другой.

fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
  method: 'PUT',
  headers: this.headers,
}).then(this.checkResponse);

//# Пример PATCH-запроса
// Для частичного обновления ресурса. Например, при обновлении профиля пользователя

fetch(`${this.baseUrl}/users/me/avatar`, {
  method: 'PATCH',
  headers: this.headers,
  body: JSON.stringify({
    avatar: objectInputValues.avatarUrl,
  }),
}).then(this.checkResponse);

//# Пример DELETE-запроса
// Для удаления ресурса с сервера
fetch(`${this.baseUrl}/cards/${idCard}`, {
  method: 'DELETE',
  headers: this.headers,
}).then(this.checkResponse);

//# Пример обработки ошибок
fetch('https://jsonplaceholder.typicode.com/there-is-no-such-route')
  .then(response => {
    // Проверяем успешность запроса и выкидываем ошибку
    if (!response.ok) {
      throw new Error('Error occurred!');
    }

    return response.json();
  })
  // Теперь попадём сюда, т.к выбросили ошибку
  .catch(err => {
    console.log(err);
  }); // Error: Error occurred!

//# Как еще передать данные на сервер
//* В параметрах запроса
fetch('https://example.com/images/random?type=portrait&name=DorianGrey', {
  method: 'GET',
});

//* Прямо в URL
fetch('https://example.com/images/ewfh23d832jnf2903', {
  // ewfh23d832jnf2903 — идентификатор картинки
  method: 'GET',
});
