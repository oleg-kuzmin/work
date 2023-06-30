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
Компонент Home является родительским компонентов для About, Contacts, NotFound.
Содержимое About при переходе на страницу отображается там, где находится Outlet.

*/

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Menu />
      <h1>Home</h1>
      <Outlet />
    </>
  );
}
