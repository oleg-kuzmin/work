//# (ИСПОЛЬЗОВАНИЕ REACT ROUTER)
//* Импорт в компонент
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//* Оборачиваем контент
function App() {
  return (
    <>
      <Header />
      <main className="containter content">
        <Router>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Router>
      </main>
      <Footer />
    </>
  );
}

//# Route
//* path="/"
// Путь - корневая страница

//* component={Home}
// Какой компонент соответствует пути
