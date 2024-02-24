//# React.createRef (СОЗДАЕТ REF)
// Представляет собой по сути некий объект, у которого есть свойство current. Из current мы всегда можем получить ссылку на узел. Изначально при создании createRef значение переменной null, устанавливаем через атрибут ref для элемента jsx. И после монтирования элемента jsx с атрибутом ref, мы получим ссылку на этот элемент jsx.

//# Пример
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //* Создание
    this.nameRef = React.createRef();
  }

  render() {
    //* Добавление атрибута
    return <input type="text" name="name" placeholder="name" ref={this.nameRef} />;
  }
}
