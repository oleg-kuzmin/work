// создается компонент - функция, которая принимает на вход объект — props и рендерит разметку
// создается элемент, который объединяя их JSX-атрибуты в один объект — props и передает его в компонент

// TODO создание компонента

function UserGreeting(props) {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}

// или в виде стрелочной функции
const UserGreeting = (props) => {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}

// ещё компактнее
const UserGreeting = props => <h1>Здравствуйте, {props.fullName}</h1>;

// с помощью класса
class UserGreeting extends React.Component {
  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}

// TODO создание элемента и использование компонента
function UserGreeting(props) {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}

const element3 = <UserGreeting fullName="Павел Валерьевич" />; // передача пропсов в виде строки
const player = <Player children={{user: 'Alex'}} /> // передача пропсов в виде объекта
const price = <Player price={14299} /> // передача пропсов в виде числа

ReactDOM.render(
  element3,
  document.querySelector('#root')
);

// Еще пример
class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className="table__text">{this.props.children}</li>;
  }
}

class List extends React.Component {
  render() {
    return (
      <section className="table">
        <h1 className="table__title">
          Игроки киберспортивной команды <span className="table__span">NaVi</span>
        </h1>
        <ol className="table__content">
          <Player children="b1t" />
          <Player children="s1mple" />
          <Player children="electronic" />
          <Player children="sdy" />
          <Player children="Perfecto" />
        </ol>
      </section>
    );
  }
}

ReactDOM.render(<List />, document.querySelector('#team-container'));

