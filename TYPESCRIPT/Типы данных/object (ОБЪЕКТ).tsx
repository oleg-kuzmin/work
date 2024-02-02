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

const object: myType = { a: 123, b: 123, c: 'abc' };
