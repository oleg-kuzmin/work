/*
В начале react рендерит компонент, только затем вызывает useEffect.
useEffect должен возвращать либо undefined, либо другую функцию, она не может возвращать promise.

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
      .then(res => res.json())
      .then(data => setTodo(data));
  }, []);

  return <div className="App"></div>;
}

//# пример
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return <div className="App"></div>;
}

//# async await
function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  //* IIFE
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  //* или именованная функция
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return <div className="App"></div>;
}
