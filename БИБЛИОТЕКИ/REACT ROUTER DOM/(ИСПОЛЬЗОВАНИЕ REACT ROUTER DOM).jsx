//# (ИСПОЛЬЗОВАНИЕ REACT ROUTER)
//* Импорт в компонент
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//* Оборачиваем контент
function Root() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>;
}

//# Route
//* path="/"
// Путь - корневая страница.

//* element={<App />}
// Какой компонент соответствует пути.
