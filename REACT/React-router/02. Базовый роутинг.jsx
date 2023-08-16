//# index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//# app.jsx
/*
/         - корень сайта
basket    - страница basket
звездочка - все остальные страницы
*/

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="basket" element={<BasketPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

//# компонент с ссылкой
// Вместо тега <а></a> пишем компонент <Link></Link> с атрибутом to

import { Link } from 'react-router-dom';
<Link to="basket"></Link>;
