//# установка
/*
npm i react-router-dom (для браузеров)
npm i react-router-native (для мобильных)
*/

//# импорт в файл
import { BrowserRouter } from 'react-router-dom';

//# компонент
function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
    </BrowserRouter>
  );
}

//# структура компонентов итого
/*
App
  BrowserRouter
    Router
      Navigation.Provider
        Location.Provider
*/
