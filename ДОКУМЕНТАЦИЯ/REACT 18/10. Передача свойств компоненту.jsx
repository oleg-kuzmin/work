//# Передача свойств компоненту
// Компоненты React используют свойства (props) для связи друг с другом. Каждый родительский компонент может передавать некоторую информацию своим дочерним компонентам, предоставляя им props. Свойства могут напоминать вам атрибуты HTML, но вы можете передавать через них любое значение JavaScript, включая объекты, массивы и функции.

/* Вы выучите:
- Как передать props компоненту
- Как читать реквизиты из компонента
- Как указать значения по умолчанию для реквизита
- Как передать JSX компоненту
- Как реквизит меняется со временем
*/

//# Знакомые свойства
// Свойства — это информация, которую вы передаете тегу JSX. Например, className, src, alt, width, и height - некоторые реквизиты, которые вы можете передать в <img>:

function Avatar() {
  return <img className="avatar" src="https://i.imgur.com/1bX5QH6.jpg" alt="Lin Lanying" width={100} height={100} />;
}

function Profile() {
  return <Avatar />;
}

// Свойства, которые вы можете передать тегу <img>, предопределены стандарту HTML (ReactDOM соответствует стандарту HTML). Но вы можете передать любые свойства своим собственным компонентам, таким как <Avatar>, чтобы настроить их. Вот как!

//# Передача props компоненту
// В этом коде компонент Profile не передает никаких свойств своему дочернему компоненту Avatar:

function Profile() {
  return <Avatar />;
}

// Вы можете передать Avatar некоторые свойства в два этапа.

//* Шаг 1: Передайте свойства дочернему компоненту
// Во-первых, передайте некоторые свойства Avatar. Например, давайте передадим два свойства: person (объект) и size (число):

function Profile() {
  return <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />;
}

// Теперь вы можете прочитать эти props внутри компонента Avatar.

//* Примечание
// Если вас смущают двойные фигурные скобки после person=, вспомните, что это всего лишь объект внутри фигурных скобок JSX.

//* Шаг 2: Прочтите свойства дочернего компонента
// Вы можете прочитать эти реквизиты, перечислив их имена, person, size, разделенные запятыми внутри ({}) непосредственно после function Avatar. Это позволяет использовать их внутри Avatar кода, как если бы вы использовали переменную.

function Avatar({ person, size }) {
  // person and size are available here
}

// Добавьте немного логики Avatar, которая использует свойства person и size для рендеринга, и все готово.

// Теперь вы можете настроить рендеринг Avatar разными способами с разными реквизитами.

// Свойства позволяют вам думать о родительских и дочерних компонентах независимо друг от друга. Например, вы можете изменить person или size свойства внутри Profile, не задумываясь о том, как Avatar будет их использовать. Точно так же вы можете изменить способ использования Avatarом этих реквизитов, не глядя на файл Profile.

// Вы можете думать о props как о «ручках», которые вы можете регулировать. Они выполняют ту же роль, что и аргументы для функций — фактически props — это единственный аргумент для вашего компонента! Функции компонента React принимают один аргумент, объект props:

function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

// Обычно вам не нужен весь объект props целиком, поэтому вы разбиваете его на отдельные реквизиты.

//* Примечание
// Не пропустите скобки {} и () при объявлении props:
function Avatar({ person, size }) {
  // ...
}

// Этот синтаксис называется «деструктурированием» и эквивалентен чтению свойств из параметра функции:
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

//# Указание значения по умолчанию для props
// Если вы хотите присвоить props значение по умолчанию, чтобы вернуться к нему, когда значение не указано, вы можете сделать это с помощью деструктуризации, поставив = и значение по умолчанию сразу после параметра:

function Avatar({ person, size = 100 }) {
  // ...
}

// Теперь, если <Avatar person={...} />рендерится без свойства size, size будет установлено значение 100 по умолчанию.

// Значение по умолчанию используется только в том случае, если свойство size отсутствует или если вы передаете size={undefined}. Но если вы передадите size={null} или size={0}, значение по умолчанию не будет использоваться.

//# Пересылка props с синтаксисом распространения JSX
// Иногда прохождение props становится очень повторяющимся:

function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar person={person} size={size} isSepia={isSepia} thickBorder={thickBorder} />
    </div>
  );
}

// Нет ничего плохого в повторяющемся коде — он может быть более разборчивым. Но иногда вы можете оценить краткость. Некоторые компоненты передают ВСЕ свои props своим дочерним элементам, например, как Profile с Avatar. Поскольку они не используют никакие свои props напрямую, может иметь смысл использовать более краткий синтаксис спред-оператора:

function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

// Это перенаправляет Avatar все props Profile без перечисления каждого из их имен.

// Используйте спред-оператор с ограничениями. Если вы используете его в любом другом компоненте, что-то не так. Часто это указывает на то, что вы должны разделить свои компоненты и передать дочерние элементы как JSX. Подробнее об этом далее!

//# Передача JSX в качестве children
// Обычно встроенные теги браузера вкладывают друг в друга:

<div>
  <img />
</div>;

// Иногда вы захотите вложить свои собственные компоненты таким же образом:

<Card>
  <Avatar />
</Card>;

// Когда вы вкладываете контент в тег JSX, родительский компонент получит этот контент в props с именем children. Например, Card компонент ниже получит children набор свойств <Avatar /> и отобразит его в div-оболочке:

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
    </Card>
  );
}

// Попробуйте заменить <Avatar> текстом, чтобы увидеть, как Card компонент может обернуть любое вложенное содержимое. Ему не нужно «знать», что рендерится внутри него. Вы увидите этот гибкий шаблон во многих местах.

// Вы можете думать о компоненте с children свойством как о «дыре», которую можно «заполнить» родительскими компонентами с произвольным JSX. Вы часто будете использовать children props для визуальных оберток: панелей, сеток и т. д.

//# Как props меняется со временем\
// Компонент Clock ниже получает два props от своего родительского компонента: color и time. (Код родительского компонента опущен, поскольку он использует состояние, в которое мы пока не будем углубляться.)

function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}
