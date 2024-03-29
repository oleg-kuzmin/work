//# Outlet (Вынос базовой части в отдельный компонент)
//* Создаем компонент Layout, в который будем помещать общие элементы
//* Outlet - компонент, с помощью которого мы говорим куда вставить весь остальной контент
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/"></Link>
        <Link to="basket"></Link>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};

//* Создаем App и еще один Route, который будет включать в себя дочерние элементы
//* Вместо path='/' используем атрибут index
import { Routes, Route } from 'react-router-dom';
import Layout from '.components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
