//# Условный рендеринг
// Вашим компонентам часто придется отображать разные вещи в зависимости от разных условий. В React вы можете условно визуализировать JSX, используя синтаксис JavaScript if, такой как оператор или "&&" и тернарный оператор "?:".

/* Ты выучишь:
- Как вернуть разные JSX в зависимости от условия
- Как условно включить или исключить часть JSX
- Распространенные сочетания клавиш условного синтаксиса, которые вы встретите в кодовых базах React
*/

//# Условный возврат JSX
// Допустим, у вас есть компонент PackingList, отображающий несколько объектов Item, которые можно пометить как упакованные или нет:

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

// Обратите внимание, что для некоторых компонентов Item установлено значение isPacked = true вместо false. Вы хотите добавить галочку (✔) к упакованным товарам, если isPacked={true}.

// Вы можете написать это как оператор if/else вот так:

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// Если свойство isPacked имеет значение true, этот код возвращает другое дерево JSX. Благодаря этому изменению некоторые элементы получают галочку в конце:

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

// Попробуйте отредактировать то, что возвращается в любом случае, и посмотрите, как изменится результат!

// Обратите внимание, как вы создаете логику ветвления с помощью операторов if и return JavaScript. В React поток управления (например, условия) обрабатывается JavaScript.

//# Условно возвращающийся null
// В некоторых ситуациях вам вообще не захочется ничего рендерить. Например, предположим, что вы вообще не хотите показывать упакованные предметы. Компонент должен что-то возвращать. В этом случае вы можете вернуть null:

function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

// Если isPacked имеет значение true, компонент ничего не вернет, null. В противном случае он вернет JSX для рендеринга.

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

// На практике возврат значения null из компонента встречается нечасто, поскольку это может удивить разработчика, пытающегося его отобразить. Чаще всего вы условно включаете или исключаете компонент из JSX родительского компонента. Вот как это сделать!

//# Условно включаемый JSX
// В предыдущем примере вы контролировали, какое дерево JSX (если оно есть!) будет возвращено компонентом. Возможно, вы уже заметили некоторое дублирование в выводе рендеринга:

<li className="item">{name} ✔</li>;

// очень похоже на

<li className="item">{name}</li>;

// Обе условные ветки возвращают <li className="item">...</li>:

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// Хотя такое дублирование не является вредным, оно может усложнить поддержку вашего кода. Что делать, если вы хотите изменить className? Вам придется сделать это в двух местах вашего кода! В такой ситуации вы можете условно включить немного JSX, чтобы сделать ваш код более правильным (DRY).

//# Условный (тернарный) оператор (?:)

