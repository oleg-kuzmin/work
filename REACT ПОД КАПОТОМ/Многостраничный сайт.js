// TODO 1. Подключить npm install react-router-dom

// TODO 2. Подключить npm install --save styled-components

// TODO 3. Структура файлов
// src/pages/Home.jsx       - старт
// src/pages/About.jsx      - другая страничка
// src/index.js             - начальный js
// src/components/Menu.jsx  - навигационное меню

// TODO 4. index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import About from "./pages/About";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// TODO 5. Home.jsx
import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Menu from "../components/Menu";
class Home extends React.Component {
  render() {
    return (
      <Page>
        <Header>Заголовок сайта</Header>
        <Menu />
      </Page>
    );
  }
}
export default Home;

// TODO 6. Menu.jsx
class Menu extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/about">О нас</NavLink>;
      </nav>
    );
  }
}