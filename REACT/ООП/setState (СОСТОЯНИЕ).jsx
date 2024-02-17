//# setState (СОСТОЯНИЕ)

//* Создавая метод класса, в котором планируется использовать setState()​, метод можно связать с​ this через bind
class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}
