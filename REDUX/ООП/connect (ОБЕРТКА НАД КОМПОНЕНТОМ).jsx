//# connect (ОБЕРТКА НАД КОМПОНЕНТОМ)
import { connect } from 'react-redux';
import React from 'react';

//* Создаем store, reducer, action
// Как обычно, за исключением, что action нужно проверить на то, являются ли они action creators или нет

//# Counter.js
//* Создаем класс (добавляем нижнее подчеркивание)
class _Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>0</h2>
        <button>-</button>
        <button onClick={this.props.dec}>+</button>
        <button>reset</button>
      </div>
    );
  }
}

//* Создаем функцию mapStateToProps() - возвращает какие-то данные (если данные не нужны можно прописать null)
// Принимает state и возвращает объект с данными, которые мы хотим добавить в props.
const mapStateToProps = state => ({
  count: state.count,
});

//* Создаем функцию mapDispatchStateToProps() - возвращает actions
/*
- 1 вариант (редко):
Если функцию не передать как второй параметр, то по умолчанию у класса будет props.dispatch).
Доступ можно получить так: const dispatch = this.props.dispatch.

- 2 вариант:
Если функцию указываем, то она возвращает объект с методами (которые запишутся в props).
Доступ можно получить так: onClick={this.props.dec}
*/

const mapDispatchStateToProps = dispatch => ({
  inc: () => dispatch(increment), // проверить dispatch(increment())
  dec: () => dispatch(decrement), // проверить dispatch(decrement())
  res: () => dispatch(reset), // проверить dispatch(reset())
});

//* Альтернативно - создаем объект mapDispatchStateToProps
// increment - обязательно action creator
const dispatchStateToProps = {
  inc: increment,
  dec: decrement,
  res: reset,
};

//* Делаем обертку вокруг Counter и записываем в новую переменную
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
