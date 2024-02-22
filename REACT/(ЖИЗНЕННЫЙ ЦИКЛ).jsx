//# (ЖИЗНЕННЫЙ ЦИКЛ)

//# 1. Монтирование (сomponentDidMount)
// Происходит когда react нам что-то отрисовывает (через метод render).

//# 2. Обновление (сomponentDidUpdate)
// При получении новых props. Или при изменении состояния.

//# 3. Размонтирование (сomponentDidUnmount)

//# Пример
class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}
