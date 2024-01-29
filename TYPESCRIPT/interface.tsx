interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function setTodo(res) {
  const todo = res.data as Todo;
}
