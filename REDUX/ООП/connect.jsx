import { connect } from 'react-redux';
import React from 'react';

//# Counter.js
//* Создание класса (добавляем нижнее подчеркивание)
class _Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>0</h2>
        <button>-</button>
        <button>+</button>
        <button>reset</button>
      </div>
    );
  }
}

//* Создаем функцию mapStateToProps - возвращает какие-то данные (если данные не нужны можно прописать null)
// Принимает state и возвращает объект с данными, которые мы хотим добавить в props.
const mapStateToProps = state => ({
  count: state.count,
});

//* Создаем функцию mapDispatchStateToProps - возвращает actions
const mapDispatchStateToProps = () => {};

//* Делаем как бы обертку вокруг Counter и записываем в новую переменную
// Коннект берет компонент и добавляет к нему еще какие-либо props согласно функциям.
export const Counter = connect(mapStateToProps, mapDispatchStateToProps)(_Counter);

//# Main.js
//* Использование класса
function Main() {
  return (
    <div>
      <h1>Hello connect</h1>
      <Counter />{' '}
    </div>
  );
}
