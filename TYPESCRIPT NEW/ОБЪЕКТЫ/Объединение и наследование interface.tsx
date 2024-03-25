//# Объединение interface
// interface объединяются если им задано одинаковое имя.

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

//# Наследование interface
// Можно указать любое количество после extends через запятую.

interface PersonDevelop extends Person {
  email: string;
}
