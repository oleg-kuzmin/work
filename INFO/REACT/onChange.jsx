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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
