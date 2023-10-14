//# Условное рендеринг
// Ваши компоненты часто должны отображать разные вещи в зависимости от различных условий. В React вы можете условно выводить JSX, используя синтаксис JavaScript, такой как операторы if, && и ?:

/* Вы узнаете
- Как возвращать различные JSX в зависимости от условия
- Как условно включить или исключить фрагмент JSX
- Общие сокращения условного синтаксиса, которые вы можете встретить в кодовых базах React
*/

//# Условное возвращение JSX
// Допустим, у вас есть компонент PackingList, отображающий несколько Item, которые могут быть помечены как упакованные или нет:

//* App.js
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// Обратите внимание, что у некоторых компонентов Item свойство isPacked установлено в true вместо false. Вы хотите добавить галочку (✔) к упакованным элементам, если isPacked={true}.

// Вы можете написать это в виде if/else оператора, например, так:
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;

// Если параметр isPacked имеет значение true, этот код возвращает другое JSX-дерево. С этим изменением некоторые элементы получают галочку в конце:

//* App.js
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// Попробуйте изменить то, что будет возвращено в любом случае, и посмотрите, как изменится результат!

// Обратите внимание, как вы создаете разветвленную логику с помощью операторов JavaScript if и return. В React поток управления (как и условия) обрабатывается JavaScript.

//# Условное возвращение ничего с null

