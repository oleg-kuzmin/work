//# для создания state в конструкторе раньше был нужен конструктор
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

//# функциональный компонент
const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');
  const [classesList, setClassesList] = React.useState('');

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('newClass');
  };

  return (
    <div>
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};
