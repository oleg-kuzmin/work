//# установка
/*
npm i react-router-dom (для браузеров)
npm i react-router-native (для мобильных)
*/

//# пример
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

/*
App
  BrowserRouter
    Router
      Navigation.provider
        Location.provider
          Routes
            RenderedRoute
              Route.Provider
                NotFound
*/

//# Свойства
//* <Route path="*"/>
// для всех остальных страниц

//* location
// Все компоненты имеют доступ к объекту location, полученной из ссылки, введенной в строке браузера.

//# Link (Ссылка на другие страницы)
/*
Отмена новых запросов на сервер при переходе по страницам.
Вместо внутренних ссылок нужно использовать компонент link, который создает тег <a> с логикой react-router-dom.
to="/"  // абсолютный путь
to="."  // относительный путь
to=".." // относительный путь
relative="path" // для относительного пути
*/

import { Link } from 'react-router-dom';

<>
  <a href="/">Go to home</a>
  <Link to="/">Go to home</Link>
</>;

//# Outlet (Использование вложенных маршрутов)
/*
Route вкладываются друг в друга, все пути дочерних Route строятся относительно родителя.
Компонент MainLayout является родительским компонентов для Home, About, Contacts, NotFound.
Содержимое Home, About, Contacts, NotFound при переходе на страницу отображается там, где находится Outlet у MainLayout.
У Home не нужно указывать путь, но нужно указать index={true} или index.
*/

//* /src/App.jsx
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//* /src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <>
      <Menu />
      <Outlet />;
    </>
  );
}

//* /src/components/Menu.jsx
import { Link } from 'react-router-dom';
// Ссылки относительно родительского MainLayout.
function Menu() {
  return (
    <nav>
      <Link to=".">Home</Link>
      <Link to="about">About</Link>
      <Link to="contacts">Contacts</Link>
    </nav>
  );
}

//* /src/components/Home.jsx
function Home() {
  return <h1>Home</h1>;
}

//# 1 вариант стилизации активной ссылки (NavLink)
//* /src/App.jsx
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//* /src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <>
      <Menu />
      <Outlet />;
    </>
  );
}

//* /src/components/Menu.jsx
// Ссылки относительно родительского MainLayout.
// end - мы хотим изменять стили для этой страницы, только если мы находимся на корневой странице.
// NavLink автоматически добавляет класс active для активной ссылки.

import { NavLink } from 'react-router-dom';
function Menu() {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
}

//* /src/components/Home.jsx
function Home() {
  return <h1>Home</h1>;
}

//* styles.css
// .active {}

//# 2 вариант стилизации активной ссылки
//* /src/components/Menu.jsx
// Ссылки относительно родительского MainLayout.
// end - мы хотим изменять стили для этой страницы, только если мы находимся на корневой странице.
// NavLink автоматически добавляет класс active для активной ссылки.
// Значение className в виде функции доступно только для компонента NavLink

import { NavLink } from 'react-router-dom';
function Menu() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => {
          isActive ? 'linkActive' : 'link';
        }}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
}

//# 3 вариант стилизации активной ссылки
//* /src/components/Menu.jsx
// Ссылки относительно родительского MainLayout.
// end - мы хотим изменять стили для этой страницы, только если мы находимся на корневой странице.
// NavLink автоматически добавляет класс active для активной ссылки.
// Значение className в виде функции доступно только для компонента NavLink

import { NavLink } from 'react-router-dom';
function Menu() {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => {
          isActive ? { color: 'white', textDecoration: 'none' } : {};
        }}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
}

//# динамический путь с параметрами
{
  /* <Route path="courses/:slug" element={<Contacts />} /> */
}

//* /src/components/Menu.jsx
import { NavLink } from 'react-router-dom';
function Menu() {
  return (
    <nav>
      <NavLink to="courses">Курсы</NavLink>
    </nav>
  );
}

//* /src/App.jsx
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses/:slug" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//# хук useParams
import { useParams } from 'react-router-dom';

<Route path="courses/:slug" element={<Contacts />} />;

function SingleCourse() {
  const params = useParams();
  console.log(params); // {slug: ""}
  return <h1>Hello</h1>;
}

//# хук useNavigate
import { useNavigate } from 'react-router-dom';
/*
Нужно вызывать функцию useNavigate в useEffect. Возвращает функцию. В качестве параметров:
1) указывается путь, куда мы хотим перенаправить пользователя.
2) опции
*/

function SingleCourse() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!course) {
      return navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  return <h1>Hello</h1>;
}

//# хук useLocation
import { useLocation } from 'react-router-dom';

function SingleCourse() {
  const location = useLocation();

  return <h1>Hello</h1>;
}
