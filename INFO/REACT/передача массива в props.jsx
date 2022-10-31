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
