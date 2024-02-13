//# Создание интерфейса
//* Жестко заданный интерфейс
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//* Жестко заданный интерфейс
interface myType1 {
  a: number;
  b: number;
  c: string;
}

//* Опциональное свойство
interface myType2 {
  a: number;
  b: number;
  c?: string;
}

//* Только для чтения
interface myType3 {
  readonly a: number;
  b: number;
  c: string;
}

//* Добавление метода
interface myType4 {
  a: number;
  b: number;
  c: string;
  print(): number; // нельзя сделать опциональной
  print1: () => number; // можно сделать опциональной
}

//* Еще могут быть дополнительные ключи
interface myType5 {
  a: number;
  b: number;
  c: string;
  [key: string]: string | number;
}

//# Использование интерфейса
function setTodo(res) {
  const todo = res.data as Todo;
}

//# Объединение интерфейсов
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const john: Person = {
  name: 'John',
  age: 100,
};

//# Наследование
interface IPerson {
  name: string;
}

//* extends ****** - один или несколько через запятую
interface IPersonDevelop extends IPerson {
  email: string;
}
