// TODO для создания state раньше был нужен конструктор
class App extends Component() {
  constructor() {
    super();
    this.state = {};
  }
  render() {}
}
export default App;

// TODO сейчас можно так
class App extends Component() {
  state = {theme: "светлая"}
  render() {}
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

// TODO setState (асинхронный метод)
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



