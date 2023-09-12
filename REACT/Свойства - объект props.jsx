//# Свойства - объект props
//* Чтение свойства внутри компонента (с деструктуризацией объекта)
function Avatar({ person, size }) {
  // аналогично записи let person = props.person;
  // аналогично записи let size = props.size;
  return <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />;
}

//* Чтение свойства внутри компонента (с деструктуризацией объекта и значением по умолчанию)
// свойство size отсутствует или size={undefined}
function Avatar({ person, size = 100 }) {
  return <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />;
}

//* Чтение свойства внутри компонента (с деструктуризацией объекта и контентом children)
function Card({ children }) {
  return <div className="card">{children}</div>;
}

//* Чтение свойства внутри компонента (без деструктуризации)
function Avatar(props) {
  return (
    <img
      className="avatar"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}

//* Передача свойства компоненту
function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
    </div>
  );
}

//* Передача всех свойств компоненту через спред-оператор
function Profile(props) {
  return (
    <div>
      <Avatar {...props} />
    </div>
  );
}

//* Передача частично свойств компоненту через спред-оператор
function Profile(props) {
  return (
    <div>
      <Avatar {...props.avatar} />
    </div>
  );
}

//* Фильтрация свойств и безопасная передача оставшихся компоненту через спред-оператор
function Profile(props) {
  const { size, userId, ...otherProps } = props;

  return (
    <div>
      <Avatar {...otherProps} />
    </div>
  );
}
