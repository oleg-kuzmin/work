// Структура файлов

// Самый главный файл index.js создается в папке ./src/index.js
// в нем делаем import Index from "./scripts/Index";

// в файлах классов внизу делаем export default Index;

// 1. Импортируем библиотеки
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Создание корневого элемента root
const root = ReactDOM.createRoot(document.querySelector("#root"));

// 3. Запуск рендеринга
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);