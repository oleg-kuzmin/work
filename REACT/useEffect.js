/*
1 аргумент - callback-функция
2 аргумент - массив зависимостей. Если он пустой, то реакт выполняет то, что написано в callback однократно при начальном рендеринге компонента. Будет менятся каждый раз, когда переменная, которая была передана как зависимость, будет изменяться.
Можно указать несколько переменных.
[todo1, todo2]
*/

import { useEffect, useState } from 'react';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res = res.json()))
      .then((data = setTodo(data)));
  }, []);

  return <div className="App"></div>;
}
