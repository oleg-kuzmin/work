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
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

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
// В некоторых ситуациях вы вообще не захотите ничего выводить. Например, вы не хотите показывать упакованные элементы вообще. Компонент должен что-то возвращать. В этом случае вы можете вернуть null:
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

// Если isPacked истинно, компонент не вернет ничего, null. В противном случае он вернет JSX для рендеринга.

//* App.js
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

// На практике возврат null из компонента не является обычным делом, поскольку это может удивить разработчика, пытающегося его отобразить. Чаще всего вы условно включаете или исключаете компонент в JSX родительского компонента. Вот как это сделать!

//# Условное включение JSX
// В предыдущем примере вы контролировали, какое (если вообще!) дерево JSX будет возвращено компонентом. Возможно, вы уже заметили дублирование в выводе рендера:
<li className="item">{name} ✔</li>;

// очень похожа на
<li className="item">{name}</li>;

// Обе условные ветви возвращают <li className="item">...</li>:

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// Хотя такое дублирование не вредно, оно может усложнить сопровождение вашего кода. Что если вы захотите изменить className? Вам придется делать это в двух местах в вашем коде! В такой ситуации вы можете условно включить немного JSX, чтобы сделать ваш код более DRY.

//# Условный (тернарный) оператор (?:)
// В JavaScript есть компактный синтаксис для записи условного выражения — условный оператор или "тернарный оператор".

// Вместо этого:
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// Вы можете написать это:
function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + ' ✔' : name}</li>;
}

// Вы можете прочитать это как "если isPacked истинно (?), то render name + ' ✔', иначе (:) render name".

//* Являются ли эти два примера полностью эквивалентными?
// Если вы знакомы с объектно-ориентированным программированием, вы можете предположить, что два приведенных выше примера мало чем отличаются друг от друга, поскольку один из них может создавать два разных "экземпляра" <li>. Но элементы JSX не являются "экземплярами", потому что они не хранят никакого внутреннего состояния и не являются реальными узлами DOM. Это легкие описания, как чертежи. Так что эти два примера, на самом деле, полностью эквивалентны. В сохранение и сброс состояния подробно описано, как это работает.
//* Являются ли эти два примера полностью эквивалентными?

// Теперь предположим, что вы хотите обернуть текст завершенного элемента в другой HTML-тег, например <del>, чтобы вычеркнуть его. Вы можете добавить еще больше новых строк и круглых скобок, чтобы было легче вложить больше JSX в каждом из случаев:

//* App.js
function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? <del>{name + ' ✔'}</del> : name}</li>;
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

// Этот стиль хорошо работает для простых условий, но используйте его умеренно. Если в ваших компонентах слишком много вложенной условной разметки, подумайте об извлечении дочерних компонентов, чтобы навести порядок. В React разметка является частью вашего кода, поэтому вы можете использовать такие инструменты, как переменные и функции, чтобы привести в порядок сложные выражения.

//# Логический оператор AND (&&)
