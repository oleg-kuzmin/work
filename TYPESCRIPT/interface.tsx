//# Создание интерфейса
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//# Использование интерфейса
function setTodo(res) {
  const todo = res.data as Todo;
}
