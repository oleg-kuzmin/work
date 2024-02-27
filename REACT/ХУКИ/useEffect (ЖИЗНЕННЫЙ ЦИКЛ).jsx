//# useEffect (ЖИЗНЕННЫЙ ЦИКЛ)
/*
- Можем использовать несколько раз, но это редко бывает необходимо.
- Обычно пишется перед return.
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

    //* componentWillUnmount + componentDidUpdate
    return () => {
      // этот код будет выполнен при размонтировании компонента (componentWillUnmount)
      // а также после обновления любого элемента из массива зависимостей (componentDidUpdate)
    };
  }, []);
  return <div></div>;
}
