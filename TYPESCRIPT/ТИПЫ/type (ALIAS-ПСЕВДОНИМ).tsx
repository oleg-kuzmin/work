//# type (ALIAS-ПСЕВДОНИМ)
// Пишется по соглашению с большой буквы. Типы в отличие от интерфейсов могут включать в себя все что угодно.

//* псевдоним из двух типов
type MyBoolean = true | false;

//* комбинация псевдонимов
type Pair = [string, string];
type Pairs = Pair[];

//* псевдоним вместо интерфейса
type DiffCar = {
  wheels: number;
  brand: string;
  type?: string;
  isNew?: boolean;
  [key: string]: unknown;
};

//* интерфейс + тип
type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

//* Сложносоставной тип
type MyType = MyBoolean & Level;
