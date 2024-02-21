//# Решение
/*
- Создайте интерфейсы User и Admin.

- User должен содержать следующие ключи
1. login, email, password, isOnline, lastVisited
2. Admin содержит все те же ключи, плюс ключ role.

- Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
- Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.
*/

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: 'Oleg',
  email: 'info@oleg-kuzmin.ru',
  password: '12345',
  isOnline: false,
  lastVisited: new Date(2024, 2, 18),
};

const admin1: Admin = {
  login: 'Oleg',
  email: 'info@oleg-kuzmin.ru',
  password: '12345',
  isOnline: false,
  lastVisited: new Date(2024, 2, 18),
  role: 'superAdmin',
};

function login(user: { login: string; password: string }): void {
  if ((user.login.length > 0, user.password.length > 0)) {
    console.log(`Привет ${user.login}!`);
  }
}

login(user1);
login(admin1);
