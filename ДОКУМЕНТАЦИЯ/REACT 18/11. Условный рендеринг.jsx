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

// Хотя это дублирование не опасно, оно может усложнить поддержку вашего кода. Что делать, если вы хотите изменить className? Вам придется сделать это в двух местах вашего кода! В такой ситуации вы можете условно включить немного JSX, чтобы сделать ваш код "Don't repeat yourself" (DRY).

//# Условный (тернарный) оператор (? :)
// JavaScript имеет компактный синтаксис для написания условного выражения — условный оператор или «тернарный оператор».

// Вместо этого:
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// Вы можете написать это:
return <li className="item">{isPacked ? name + ' ✔' : name}</li>;

// Вы можете прочитать это так: если isPacked true, то (?) рендерить name + ' ✔', иначе (:) рендерить name.

//* Являются ли эти два примера полностью эквивалентными?
// Если вы имеете опыт объектно-ориентированного программирования, вы можете предположить, что два приведенных выше примера немного отличаются, поскольку один из них может создавать два разных «экземпляра» <li>. Но элементы JSX не являются «экземплярами», потому что они не содержат никакого внутреннего состояния и не являются настоящими узлами DOM. Это легкие описания, как чертежи. Так что эти два примера, по сути, полностью эквивалентны . Сохранение и сброс состояния подробно описывает, как это работает.

// Теперь предположим, что вы хотите поместить текст завершенного элемента в другой HTML-тег, например, <del>, чтобы зачеркнуть его. Вы можете добавить еще больше новых строк и круглых скобок, чтобы было проще вкладывать больше JSX в каждом из случаев:

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

// Этот стиль хорошо работает в простых условиях, но используйте его умеренно. Если ваши компоненты становятся беспорядочными из-за слишком большого количества вложенной условной разметки, рассмотрите возможность извлечения дочерних компонентов, чтобы навести порядок. В React разметка является частью вашего кода, поэтому вы можете использовать такие инструменты, как переменные и функции, для приведения в порядок сложных выражений.

//# Логический оператор И (&&)
// Другим распространенным сокращением, с которым вы столкнетесь, является логический оператор И (&&) в JavaScript. Внутри компонентов React это часто возникает, когда вы хотите отобразить какой-нибудь JSX, когда условие истинно, или ничего не отобразить в противном случае. С помощью && вы можете условно отобразить галочку, только если isPacked true:

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

// Вы можете прочитать это так: если isPacked true, то (&&) отображать галочку, иначе ничего не отображать.

// Вот он в действии:

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
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

// Выражение JavaScript && возвращает значение своей правой части (в нашем случае галочка), если левая сторона (наше условие) равно true. Но если условие false, то все выражение становится false. React воспринимает его false как «дыру» в дереве JSX, точно так же, как null или undefined, и ничего не отображает на его месте.

//* Примечание
// Не ставьте числа слева от &&.

// Чтобы проверить условие, JavaScript автоматически преобразует левую часть в логическое значение. Однако, если левая сторона равна 0, тогда все выражение получает это значение (0), и React будет счастливо отображать 0, а не ничего.

// Например, распространенной ошибкой является написание кода типа messageCount && <p>New messages</p>. Можно предположить, что он ничего не отображает, когда messageCount === 0, но на самом деле он отображает 0, т.е. самого себя!

// Чтобы это исправить, сделайте левую часть булевой: messageCount > 0 && <p>New messages</p>.

//# Условное присвоение JSX переменной
