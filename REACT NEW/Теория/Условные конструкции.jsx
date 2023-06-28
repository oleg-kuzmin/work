//# вариант 1 с переменной
function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet ? `My ${animal} is ${age} years old` : "I don't have an animal";

  return <h1>{text}</h1>;
}

//# вариант 2 с тернарным оператором
function PetInfo(props) {
  const { animal, age, hasPet } = props;

  return hasPet ? (
    <h1>
      My {animal} is {age} years old
    </h1>
  ) : (
    <h2>I don't have an animal</h2>
  );
}
