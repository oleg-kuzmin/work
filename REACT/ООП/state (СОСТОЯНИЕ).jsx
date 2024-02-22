//# state (СОСТОЯНИЕ)
/*

*/

//# Синтаксис this.state
// В классовом компоненте состояние хранится в this.state. Как правило this.state это объект. Инициализируется через конструктор.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
}

//# Синтаксис this.setState
// Для обновления состояния используется метод this.setState. Как аргумент принимает объект с новым состоянием.
handleClick = () => {
  this.setState({ count: this.state.count + 1 });
};

//# Привязка this
// Создавая метод класса (например this.handleClick), в котором планируется использовать this.setState​, метод this.handleClick можно связать с​ this через bind.

class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}
