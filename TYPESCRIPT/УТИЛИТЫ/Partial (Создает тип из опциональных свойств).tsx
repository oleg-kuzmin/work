//# Partial (Создает тип из опциональных свойств)
// Делает все свойства опциональными. Создает новый тип со всеми свойствами Type, установленными как необязательные. Эта утилита вернет тип, представляющий все подмножества данного типа.

//# Пример
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

console.log(todo1); // {title: 'organize desk', description: 'clear clutter'}
console.log(todo2); // {title: 'organize desk', description: 'throw out trash'}
