//# 0. Установка пакета
//* npx create-next-app .

//# 1. Импорт библиотек
import React from 'react';
import ReactDOM from 'react-dom/client';

//# 2. Создание корневого элемента root
const root = ReactDOM.createRoot(document.querySelector('#root'));

//# 3. Запуск рендеринга
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

//# 4. Использование внутри html
//* React
// https://unpkg.com/react@18/umd/react.development.js

//* React DOM
// https://unpkg.com/react-dom@18/umd/react-dom.development.js

//* Babel
// https://unpkg.com/babel-standalone@6/babel.min.js

//* html
// <script type="text/babel"></script>

//# 5. Запуск скриптов
//* npm start (запуск сервера для разработки)
//* npx serve -s build (запуск сервера для продакшна)
//* npm run build (создает версию для продакшн в папке build, ее можно выгружать на сервер)

