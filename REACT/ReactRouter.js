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
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//# Свойства
//* <Route path="*"/>
// для всех остальных страниц
