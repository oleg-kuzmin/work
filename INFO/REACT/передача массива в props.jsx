const { useState } = require("react");

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Cat" },
    { id: 2, title: "Second Cat" },
  ]);

  return (
    <div className="App">
      {posts.map((post) => (
        <Postitem post={post} key={post.id} />
      ))}
    </div>
  );
}

// Еще пример

import Joke from "./Joke";
import jokesData from "./jokesData";
function App() {
  const jokeComponents = jokesData
  .filter((joke) => joke.question)
  .map((joke) => (
    <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id} />
  ));
  return <div>{jokeComponents}</div>;
}
export default App;
