//# (СОЗДАНИЕ КОМПОНЕНТА)
//* Функциональный компонент (function declaration)
function UserGreeting(props) {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}

//* Функциональный компонент (function expression)
const UserGreeting = props => {
  return <h1>Здравствуйте, {props.fullName}</h1>;
};

//* Функциональный компонент (function expression, короткая запись)
const UserGreeting = props => <h1>Здравствуйте, {props.fullName}</h1>;
