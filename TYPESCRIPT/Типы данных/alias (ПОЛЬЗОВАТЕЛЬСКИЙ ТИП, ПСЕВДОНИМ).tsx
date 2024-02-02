//# alias (ПОЛЬЗОВАТЕЛЬСКИЙ ТИП, ПСЕВДОНИМ)
type Name = string | number;
let userName: Name;

//* Жестко заданный псевдоним
type myType = {
  a: number;
  b: number;
  c: string;
};

type myType11 = {
  a: number;
  b: number;
  c: string;
};

//* Сложносоставной тип
type myType111 = myType & myType11;

const object: myType = { a: 123, b: 123, c: 'abc' };
