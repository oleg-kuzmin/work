//# Условный рендеринг
//* Возврат null
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

//* Тернарный оператор для простых условий
function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + ' ✔' : name}</li>;
}

//* Логический оператор &&
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

//* Использование переменной
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + ' ✔';
  }
  return <li className="item">{itemContent}</li>;
}
