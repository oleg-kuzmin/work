// TODO onClick + onMouseOver
function handleClick() {
  console.log('Меня кликнули!')
}
function handleImgHover() {
  console.log('На меня смотрят?')
}
function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" onMouseOver={handleImgHover}/>
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// TODO onClick
const root = ReactDOM.createRoot(document.querySelector("#root"));
function App() {
  let [likes, setlikes] = useState(5);
  function increment() {
    setlikes((likes += 1));
  }
  function decrement() {
    setlikes((likes -= 1));
  }
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);