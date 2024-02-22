//# (СОЗДАНИЕ КЛАССОВОГО КОМПОНЕНТА)
// По умолчанию конструктор можно не писать (обычно включен в сборку).

import React from 'react';

//* Классовый компонент
class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}

export default UserGreeting;
