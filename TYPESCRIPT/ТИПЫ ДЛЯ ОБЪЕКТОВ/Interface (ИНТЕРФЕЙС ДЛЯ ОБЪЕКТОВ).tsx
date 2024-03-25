//# Interface (ИНТЕРФЕЙС ДЛЯ ОБЪЕКТОВ)
// Для предотвращения пересечения и объединения интерфейсов с какой-либо библиотекой существует соглашение добавлять букву I перед объявлением интерфейса, например interface IAccount {}

//* Создание интерфейса
interface Car {
  // обязательные поля
  wheels: number;
  brand: string;

  // необязательные поля
  type?: string;
  isNew?: boolean;

  // неограниченное количество полей
  [key: string]: unknown;

  // методы
  print(): number; // нельзя сделать опциональным
  print1?: () => number; // можно сделать опциональным
}

//* Применение интерфейса
const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: false,
  print: () => {
    return 123;
  },
};

//* Только для чтения
interface myType3 {
  readonly a: number;
  b: number;
  c: string;
}

//# Расширение (объединение) интерфейсов
// Возможно если задано одинаковое имя.
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

//* можно указать любое количество через запятую
interface IPersonDevelop extends IPerson, Person {
  email: string;
}
