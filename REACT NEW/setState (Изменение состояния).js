//# setState (Изменение состояния)
/*
- Если нас не интересует то, каким было предыдущее состояние компонента, то вsetState можно просто передать объект, который заменит состояние. В случаях, когда для изменения состояния нужно быть в курсе того, что в нём хранилось ранее, методу setState ​можно передать функцию, которая, в качестве параметра, получает предыдущую версию состояния. Назвать этот параметр можно как угодно, например​ prevState. Функция должна возвращать новую версию состояния

- В качестве аргумента this.setState принимает либо функцию, либо обновлённое состояние:
- Если использовать функцию, внутри будут доступны состояния компонента до обновления и текущие свойства компонента — props.
- В некоторых сложных компонентах пропсы могут быть использованы для реализации вариативной логики применения изменений.
- Но на практике вы редко будете сталкиваться с таким применением метода setState.

- У setState есть второй аргумент, но он необязательный.
- В качестве второго аргумента можно передать колбэк-функцию.
- Эта функция будет вызвана, когда изменения применятся к состоянию компонента.
- Второй аргумент метода setState следует использовать, когда нужно реализовать логирование или сложную последовательную логику изменения состояний в компонентах.
*/

//# пример
class ThemeToggle extends React.Component {
  state = { theme: 'светлая' };

  toggleForm = () => {
    this.setState(function (prevState, props) {
      return { showForm: !prevState.showForm };
    });

    this.setState({ showForm: !this.state.showForm });
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'светлая' ? 'тёмная' : 'светлая',
    });
  };

  render() {
    return (
      <div>
        <p>Включена {this.state.theme} тема</p>
      </div>
    );
  }
}

//# точечно меняем состояние, сохраняя предыдущее
class SettingsMenu extends React.Component {
  state = {
    theme: 'dark',
    userSettings: {
      notificationsEnabled: true,
      sidebar: {
        title: 'Боковая панель',
        enabled: false,
      },
    },
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      ...prevState,
      userSettings: {
        ...prevState.userSettings,
        sidebar: {
          ...prevState.sidebar,
          enabled: !this.state.userSettings.sidebar.enabled,
        },
      },
    }));
  };
}
