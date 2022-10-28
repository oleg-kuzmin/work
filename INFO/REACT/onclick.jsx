const root = ReactDOM.createRoot(document.querySelector('#root'));

function App() {
  let [likes, setlikes] = useState(5);

  function increment() {
    setlikes(likes += 1)
  }

  function decrement() {
    setlikes(likes -= 1)
  }

  return(
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

