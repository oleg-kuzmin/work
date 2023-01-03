// TODO для создания state раньше был нужен конструктор
class App extends Component() {
  constructor() {
    super();
    this.state = {}; // состояние это объект
    // создавая метод класса, в котором планируется использовать setState()​, этот метод нужно связать с​ this.
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({count: 1})
  }
  render() {}
}
export default App;

// TODO сейчас можно так
class App extends Component() {
  state = {theme: "светлая"}
  render() {}
}

// 1. Если нас не интересует то, каким было предыдущее состояние компонента,
// то этому методу можно просто передать объект, который заменит состояние

// 2. В случаях, когда для изменения состояния нужно быть в курсе того, что в нём хранилось ранее,
// методу setState()​можно передать функцию, которая, в качестве параметра, получает предыдущую версию состояния.
// Назвать этот параметр можно как угодно, например​ prevState.
// Функция должна возвращать новую версию состояния
// Заготовка этой функции будет выглядеть так:
function handleClick() {
  this.setState(prevState => {
    return {
      count: prevState.count + 1
    }
  })
}

// TODO state
class ThemeToggle extends React.Component {
  state = { theme: "светлая" };
  render() {
    return (
      <div className={this.state.theme === "светлая" ? "th-light" : "th-dark"}>
        <p>Включена {this.state.theme} тема</p>
      </div>
    );
  }
}

// TODO состояние изменяется при помощи асинхронного метода setState()
class ThemeToggle extends React.Component {

  state = { theme: "светлая" };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "светлая" ? "тёмная" : "светлая"
    });
  };

  render() {
    return (
      <div className={this.state.theme === "светлая" ? "th-light" : "th-dark"}>
        <p>Включена {this.state.theme} тема</p>
        <button onClick={this.toggleTheme}>
          {this.state.theme === "светлая" ? "🌚" : "🌞"}
        </button>
      </div>
    );
  }
}

// TODO аргументы setState
// В качестве аргумента this.setState принимает либо функцию, либо обновлённое состояние:
this.setState(function(prevState, props){
  return { showForm: !prevState.showForm }
});
// либо
this.setState({ showForm: !this.state.showForm });

// У setState есть второй аргумент, но он необязательный. В качестве второго аргумента можно передать колбэк-функцию. Эта функция будет вызвана, когда изменения применятся к состоянию компонента. Второй аргумент метода setState следует использовать, когда нужно реализовать логирование или сложную последовательную логику изменения состояний в компонентах:
this.setState(
  { showForm: !this.state.showForm },
  () => {
    this.myCustomLogger("Состояние компонента изменилось!")
  }
);

// TODO точечно меняем состояние, сохраняя предыдущее
class SettingsMenu extends React.Component {
  state = {
    theme: 'dark',
    userSettings: {
      notificationsEnabled: true,
      sidebar: {
        title: 'Боковая панель',
        enabled: false
      }
    }
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      ...prevState,
      userSettings: {
        ...prevState.userSettings,
        sidebar: {
          ...prevState.sidebar,
          enabled: !this.state.userSettings.sidebar.enabled
        }
      }
    }));
  };

  render() {
    const { enabled } = this.state.userSettings.sidebar;
    return (
      <>
        {enabled && <aside className="aside" />}
        <section className="content">
          <button className="content__button" onClick={this.toggleSidebar}>
            {enabled ? 'Выключить' : 'Включить'}
          </button>
        </section>
      </>
    );
  }
}

ReactDOM.render(<SettingsMenu />, document.querySelector('#root'));



