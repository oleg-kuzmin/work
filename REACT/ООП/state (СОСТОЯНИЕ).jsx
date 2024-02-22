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

// Также можно указывать состояние и без конструктора
class App extends React.Component {
  state = {
    count: 0,
  };
}

//# Синтаксис this.setState
// Для обновления состояния используется метод this.setState. Как аргумент принимает объект с новым состоянием. Выполняется асинхронно.
handleClick = () => {
  this.setState({ count: this.state.count + 1 });
};

// Может принимать функцию как аргумент, для обращения к промежуточному состоянию
handleClick = () => {
  this.setState(prevState => ({ count: prevState.count + 1 }));
};

// Может принимать второй параметр - функцию, которая произойдет после того, как изменится состояние.

//# Привязка this
// Создавая метод класса (например this.handleClick) в котором будет обычная (не стрелочная функция), в котором планируется использовать this.setState​, метод this.handleClick нужно связать с​ this через bind. Второй способ - использовать стрелочную функцию this.handleClick, в которой this привязывается навсегда к классу.

class UserGreeting extends React.Component {
  constructor(props) {
    super(props); // super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({});
  }

  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}
