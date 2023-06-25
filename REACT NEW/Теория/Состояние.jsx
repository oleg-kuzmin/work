//# для создания state раньше был нужен конструктор
class App extends Component() {
  constructor() {
    super();
    this.state = {}; // состояние это объект
    // создавая метод класса, в котором планируется использовать setState()​, этот метод нужно связать с​ this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: 1 });
  }
  render() {}
}
export default App;

//# сейчас можно так
class App extends Component() {
  state = { theme: 'светлая' };
  render() {}
}
