import React, { useState } from "react";

function App() {
  let [likes, setlikes] = useState(5);
  let [value, setValue] = useState("ТЕКСТ В ИНПУТЕ");

  function increment() {
    setlikes((likes += 1));
  }

  function decrement() {
    setlikes((likes -= 1));
  }

  return (
    <div>
      <h1>{likes}</h1>
      <p>{value}</p>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
