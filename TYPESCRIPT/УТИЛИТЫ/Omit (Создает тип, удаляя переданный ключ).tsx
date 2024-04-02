//# Omit (Создает тип, удаляя переданный ключ)
// Создает тип, выбирая все свойства из типа и затем удаляя ключи (строковый литерал или union строковых литералов). Противоположность Pick.

//# Синтаксис: Omit<MyType, "key">
//* MyType - исходный тип
//* "key" - удаляемый ключ

//# Пример
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

//# Пример 2
type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};
