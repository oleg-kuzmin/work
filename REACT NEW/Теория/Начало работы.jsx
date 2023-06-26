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
// React
// https://unpkg.com/react@18/umd/react.development.js

// React DOM
// https://unpkg.com/react-dom@18/umd/react-dom.development.js

// Babel
// https://unpkg.com/babel-standalone@6/babel.min.js

// html
// <script type="text/babel"></script>
