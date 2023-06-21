// React-компонент - функция, которая принимает на вход объект — props и возвращает элемент (разметку html)
// React-элемент - разметка html

//# создание компонента
//* declaration
function UserGreeting(props) {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}

//* expression
const UserGreeting = props => {
  return <h1>Здравствуйте, {props.fullName}</h1>;
};
const UserGreeting = props => <h1>Здравствуйте, {props.fullName}</h1>;

//* class
class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}

//# использование компонента
//* создание компонента
function UserGreeting(props) {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}

//* передача пропсов в виде строки
const element = <UserGreeting fullName="Павел Валерьевич" />;

//* передача пропсов в виде объекта
const player = <Player children={{ user: 'Alex' }} />;

//* передача пропсов в виде числа
const price = <Player price={14299} />;

//* рендеринг
ReactDOM.render(element, document.querySelector('#root'));
