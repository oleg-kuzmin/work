//# useLayoutEffect (ЖИЗНЕННЫЙ ЦИКЛ ДО ОТРИСОВКИ)
/*
- По сути тоже самое что и useEffect, но выполняется синхронно, может затормозить то, что выводится на страницу. Лучше предпочитать стандатный useEffect.
- useEffect применяется после render (Virtual Dom) и ПОСЛЕ отрисовки в браузере.
- useLayoutEffect применяется после render (Virtual Dom) и ДО отрисовки в браузере.
*/

//# Синтаксис
useLayoutEffect(() => {}, []);
//* 1. Функция callback
//* 2. Массив зависимостей (не обязателен, но лучше чтобы был всегда)
// При каких условиях мы должны продолжать вызывать функцию callback. Если он пустой, то реакт выполняет то, что написано в callback однократно при начальном рендеринге компонента. Будет менятся каждый раз, когда переменная, которая была передана как зависимость, будет изменяться.

//# Пример
//* импорт
import { useLayoutEffect } from 'react';

function App() {
  useLayoutEffect(() => {
    //* componentDidMount
    // этот код будет выполнен при монтировании компонента (componentDidMount)

    //* componentDidUpdate
    // а также после обновления любого элемента из массива зависимостей (componentDidUpdate)

    //* componentWillUnmount + componentDidUpdate (при наличии элементов в массиве зависимостей)
    return () => {
      // этот код будет выполнен при размонтировании компонента (componentWillUnmount)
      // а также после обновления любого элемента из массива зависимостей (componentDidUpdate)
      // т.е. если ДАН ПУСТОЙ МАССИВ, то return выполнится только один раз
    };
  }, []);
  return <div></div>;
}

//# Пример
//* Использование имени функции при нескольких useEffect для самодокументирования
function App() {
  useLayoutEffect(function initPlugin() {
    plugin.start();
    return () => plugin.end();
  }, []);

  useLayoutEffect(function getApi() {
    api.start();
    return () => api.end();
  }, []);

  return <div></div>;
}
