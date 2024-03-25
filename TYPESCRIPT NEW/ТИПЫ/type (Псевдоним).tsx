//# type (Псевдоним)
/*
- Создает некий свой собственный тип. Пишется по соглашению с большой буквы. 
- type в отличие от interface может включать в себя все что угодно.
*/

//* type из двух типов
type MyBoolean = true | false;

//* Комбинация type
type Pair = [string, string];
type Pairs = Pair[];

//* type для объекта
type DiffCar = {
  wheels: number;
  brand: string;
  type?: string;
  isNew?: boolean;
  [key: string]: unknown;
};

//* interface + type
type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

//* Составной type
type MyType = MyBoolean & Level;
