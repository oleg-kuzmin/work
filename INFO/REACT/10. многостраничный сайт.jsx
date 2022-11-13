// 1. Подключить npm install react-router-dom

// ? 2. Подключить npm install --save styled-components

// 3. App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

// 4. Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list__element">
          <NavLink className="nav-list__link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-list__element">
          <NavLink className="nav-list__link" to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-list__element">
          <NavLink className="nav-list__link" to="/blogs">
            Blogs
          </NavLink>
        </li>
        <li className="nav-list__element">
          <NavLink className="nav-list__link" to="/sign-up">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
