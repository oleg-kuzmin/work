//# 1. Импорт библиотек
import React from "react";
import ReactDOM from "react-dom/client";

//# 2. Создание корневого элемента root
const root = ReactDOM.createRoot(document.querySelector("#root"));

//# 3. Запуск рендеринга
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);