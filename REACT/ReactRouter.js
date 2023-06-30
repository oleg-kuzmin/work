//# установка
/*
npm i react-router-dom (для браузеров)
npm i react-router-native (для мобильных)
*/

//# пример
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

//# Link (Отмена новых запросов на сервер при переходе по страницам)
// Вместо внутренних ссылок нужно использовать компонент link, который создает тег <a> с логикой react-router-dom.
import { Link } from 'react-router-dom';

<>
  <a href="/">Go to home</a>
  <Link to="/">Go to home</Link>
</>;

//# Outlet (Использование вложенных маршрутов)
/*
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

//* /src/components/Home.jsx
function Home() {
  return <h1>Home</h1>;
}
