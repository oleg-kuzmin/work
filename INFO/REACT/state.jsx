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