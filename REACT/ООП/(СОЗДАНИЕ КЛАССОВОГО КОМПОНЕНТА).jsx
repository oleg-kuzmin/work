//# (СОЗДАНИЕ КЛАССОВОГО КОМПОНЕНТА)
//* Классовый компонент
class UserGreeting extends React.Component {
  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}
