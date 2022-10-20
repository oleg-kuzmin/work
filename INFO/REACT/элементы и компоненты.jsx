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

// TODO использование компонента
function UserGreeting(props) {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}

const element3 = <UserGreeting fullName="Павел Валерьевич" />;

ReactDOM.render(
  element,
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

