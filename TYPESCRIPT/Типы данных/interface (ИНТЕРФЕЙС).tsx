//# Создание интерфейса
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

//* Дополнительные ключи
interface myType1 {
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
