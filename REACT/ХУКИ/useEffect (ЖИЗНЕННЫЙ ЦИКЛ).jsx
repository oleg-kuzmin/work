//# useEffect (ЖИЗНЕННЫЙ ЦИКЛ)
/*
- Можем использовать несколько раз, но это редко бывает необходимо.
- Обычно пишется перед return.
- Хук полностью асинхронный.
*/

//# Синтаксис
//* 1. Функция callback
//* 2. Массив зависимостей (не обязателен, но лучше чтобы был всегда)
// При каких условиях мы должны продолжать вызывать функцию callback
useEffect(() => {}, []);

//# Пример
//* импорт
import { useEffect } from 'react';

function App() {
  useEffect(() => {
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
  useEffect(function initPlugin() {
    plugin.start();
    return () => plugin.end();
  }, []);

  useEffect(function getApi() {
    api.start();
    return () => api.end();
  }, []);

  return <div></div>;
}
