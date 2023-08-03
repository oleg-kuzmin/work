//# Условный рендеринг
// Ваши компоненты часто должны отображать разные вещи в зависимости от различных условий. В React вы можете условно визуализировать JSX, используя синтаксис JavaScript if, а также операторы "&&" и "? :"

/* Вы выучите:
- Как вернуть разные JSX в зависимости от условия
- Как условно включить или исключить часть JSX
- Общие сочетания клавиш условного синтаксиса, с которыми вы столкнетесь в кодовых базах React
*/

//# Условно возвращаемый JSX
// Допустим, у вас есть PackingList компонент, отображающий несколько Items, которые могут быть помечены как упакованные или нет:

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

// Обратите внимание, что для некоторых Item компонентов свойство isPacked установлено в значение true вместо false. Вы хотите добавить галочку (✔) к упакованным предметам, если isPacked={true}.

// Вы можете написать это как оператор if else следующим образом:

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// Если isPacked равен true, этот код возвращает другое дерево JSX. С этим изменением некоторые элементы получают галочку в конце:

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

// Обратите внимание, как вы создаете логику ветвления с помощью операторов JavaScript if и return. В React поток управления (например, условия) обрабатывается JavaScript.

//# Условно ничего не возвращаемый JSX с null
// В некоторых ситуациях вам вообще не нужно ничего рендерить. Например, предположим, что вы вообще не хотите показывать упакованные предметы. Компонент должен что-то возвращать. В этом случае вы можете вернуть null:

function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

// Если isPacked true, компонент ничего не вернет, т.к. мы написали null. В противном случае он вернет JSX для рендеринга.

function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
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

// На практике возврат null из компонента не является обычным явлением, потому что это может удивить разработчика, пытающегося отобразить его. Чаще вы условно включаете или исключаете компонент в JSX родительского компонента. Вот как это сделать!

//# Условно включаемый JSX
// В предыдущем примере вы контролировали, какое дерево JSX (если оно есть!) будет возвращено компонентом. Возможно, вы уже заметили некоторое дублирование в выводе рендеринга:

<li className="item">{name} ✔</li>;

// очень похоже на

<li className="item">{name}</li>;

// Обе условные ветви возвращают <li className="item">...</li>:

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}


