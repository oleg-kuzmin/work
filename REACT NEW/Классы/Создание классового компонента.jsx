//# Создание классового компонента
class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}
