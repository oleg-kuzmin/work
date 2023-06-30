//# установка
/*
npm i react-router-dom (для браузеров)
npm i react-router-native (для мобильных)
*/

//# импорт BrowserRouter, Routes, Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//* компонент
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//* структура компонентов итого
/*
App
  BrowserRouter
    Router
      Navigation.Provider
        Location.Provider
*/
