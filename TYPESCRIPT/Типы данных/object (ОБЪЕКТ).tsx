//# object (ОБЪЕКТ)
//* Жестко заданный псевдоним
type myType = {
  a: number;
  b: number;
  c: string;
};

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
interface myType1 {
  a: number;
  b: number;
  c: string;
  [key: string]: string | number;
}

const object: myType = { a: 123, b: 123, c: 'abc' };
