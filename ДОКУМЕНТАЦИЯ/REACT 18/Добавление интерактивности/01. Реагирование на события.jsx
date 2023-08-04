//# Реагирование на события
// React позволяет добавлять обработчики событий в ваш JSX. Обработчики событий — это ваши собственные функции, которые будут запускаться в ответ на такие действия, как щелчок, наведение курсора, фокусировка ввода формы и т. д.

/* Вы выучите:
- Различные способы написания обработчика событий
- Как передать логику обработки событий из родительского компонента
- Как распространяются события и как их остановить
*/

//# Добавление обработчиков событий
// Чтобы добавить обработчик событий, сначала определите функцию, а затем передайте ее в качестве свойства соответствующему тегу JSX. Например, вот кнопка, которая еще ничего не делает:

function Button() {
  return <button>I don't do anything</button>;
}

/* Вы можете заставить его показывать сообщение, когда пользователь нажимает, выполнив следующие три шага:
1. Объявите функцию, вызываемую handleClick внутри вашего Button компонента.
2. Реализуйте логику внутри этой функции (используйте alert для отображения сообщения).
3. Добавьте onClick={handleClick} в <button> JSX.
*/

function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return <button onClick={handleClick}>Click me</button>;
}

/* Вы определили handleClick функцию, а затем передали ее в качестве props <button>.
handleClick является обработчиком событий.

Функции обработчика событий:
- Обычно определяются внутри ваших компонентов.
- Имеют имена, начинающиеся с handle, за которыми следует название события.
*/

// По соглашению принято именовать обработчики событий - handle, за которыми следует имя события. Вы часто будете видеть onClick={handleClick}, onMouseEnter={handleMouseEnter} и так далее.

// В качестве альтернативы вы можете определить встроенный обработчик событий в JSX:
function Button() {
  return (
    <button
      onClick={function handleClick() {
        alert('You clicked me!');
      }}
    >
      Click me
    </button>
  );
}

// Или, более кратко, используя функцию стрелки:
function Button() {
  return (
    <button
      onClick={() => {
        alert('You clicked me!');
      }}
    >
      Click me
    </button>
  );
}

// Все эти стили эквивалентны. Встроенные обработчики событий удобны для коротких функций.

//* Примечание
// Функции, передаваемые обработчикам событий, должны передаваться, а не вызываться. Например:

// передача функции (правильно) - <button onClick={handleClick}>
// вызов функции (неверно) - <button onClick={handleClick()}>

// Разница тонкая. В первом примере handleClick функция передается как onClick обработчик события. Это говорит React запомнить это и вызывать вашу функцию только тогда, когда пользователь нажимает кнопку.

// Во втором примере handleClick() запускает функцию сразу во время рендеринга, без каких-либо кликов. Это потому, что JavaScript внутри JSX и фигурных скобок {} выполняется сразу.

// Когда вы пишете встроенный код, та же ловушка проявляется по-другому:

// передача функции (правильно) - <button onClick={() => alert('...')}>
// вызов функции (неверно) - <button onClick={alert('...')}>

// Такой встроенный код не будет срабатывать по клику — он срабатывает каждый раз, когда компонент отрисовывается:

// This alert fires when the component renders, not when clicked!
<button onClick={alert('You clicked me!')} />;

// Если вы хотите определить встроенный обработчик событий, оберните его в анонимную функцию следующим образом:
<button onClick={() => alert('You clicked me!')} />;

// Вместо выполнения кода внутри при каждом рендеринге создается функция, которая будет вызываться позже.

// В итоге передеавать функцию нужно так:

// <button onClick={handleClick} />
// или
// <button onClick={() => alert('...')} />

//# Чтение props в обработчиках событий
// Поскольку обработчики событий объявляются внутри компонента, они имеют доступ к свойствам компонента. Вот кнопка, которая при нажатии показывает предупреждение со своим свойством message. Это позволяет этим двум кнопкам отображать разные сообщения.

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}

//# Передача обработчиков событий в качестве props
// Часто требуется, чтобы родительский компонент указывал обработчик событий дочернего элемента. Подумайте о кнопках: в зависимости от того, где вы используете компонент Button, вы можете выполнять разные функции — например, одна воспроизводит фильм, а другая загружает изображение.

// Для этого передайте свойство, которое компонент получает от своего родителя, в качестве обработчика событий, например:

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert('Uploading!')}>Upload Image</Button>;
}

function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

/* Здесь происходит рендер компонента Toolbar, который отображает PlayButton и UploadButton:
- PlayButton содержит обработчик handlePlayClick и передает его как props onClick далее внутрь Button.
- UploadButton содержит обработчик () => alert('Uploading!') и передает его как props onClick далее внутрь Button.
- Наконец, ваш компонент Button принимает свойство с именем onClick. Он передает этот props непосредственно во встроенный браузер для <button>. Это говорит React вызывать переданную функцию по клику.
*/

// Если вы используете дизайн-систему, такие компоненты, как кнопки, обычно содержат стили, но не определяют поведение. Вместо этого такие компоненты, как PlayButton и UploadButton, будут передавать обработчики событий вниз.

//# Именование свойств обработчика событий
// Встроенные компоненты, такие как <button> или <div> поддерживают только встроенные браузерные события, например такие как onClick. Однако, когда вы создаете свои собственные компоненты, вы можете называть свойства их обработчиков событий как угодно.

// По соглашению props обработчика событий должны начинаться с on, за которым следует заглавная буква.

// Например, свойство onClick компонента Button можно было бы назвать onSmash:

function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>Play Movie</Button>
      <Button onSmash={() => alert('Uploading!')}>Upload Image</Button>
    </div>
  );
}

// В этом примере <button onClick={onSmash}> показывает, что <button> (нижний регистр) по-прежнему требуется свойство onClick, но имя свойства, полученное вашим пользовательским компонентом Button, зависит от вас!

// Когда ваш компонент поддерживает несколько взаимодействий, вы можете назвать реквизиты обработчика событий для конкретных концепций приложения. Например, этот компонент Toolbar получает обработчики событий onPlayMovie и onUploadImage:

function App() {
  return <Toolbar onPlayMovie={() => alert('Playing!')} onUploadImage={() => alert('Uploading!')} />;
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

// Обратите внимание, что компоненту App не нужно знать, что Toolbar будет делать с onPlayMovie или onUploadImage. Это деталь реализации Toolbar. Здесь Toolbar передает их как onClick обработчики своим Buttons, но позже он также может запускать их с помощью сочетания клавиш. Именование свойств после взаимодействия с конкретным приложением, например, onPlayMovie дает вам возможность изменить то, как они используются позже.

//* Примечание
// Убедитесь, что вы используете соответствующие теги HTML для обработчиков событий. Например, для обработки кликов используйте <button onClick={handleClick}>вместо <div onClick={handleClick}>. Использование <button> позволяет использовать встроенные функции браузера, такие как навигация с помощью клавиатуры. Если вам не нравится стиль кнопки по умолчанию в браузере и вы хотите, чтобы она больше походила на ссылку или другой элемент пользовательского интерфейса, вы можете добиться этого с помощью CSS.

//# Распространение (всплытие) события
// Обработчики событий также будут перехватывать события от любых дочерних элементов вашего компонента. Мы говорим, что событие «пузырится» или «распространяется» вверх по дереву: оно начинается там, где произошло событие, а затем идет вверх по дереву.

// Этот <div> содержит две кнопки. И <div>, и каждая кнопка имеют свои собственные обработчики onClick. Как вы думаете, какие обработчики сработают, когда вы нажмете кнопку?

function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert('You clicked on the toolbar!');
      }}
    >
      <button onClick={() => alert('Playing!')}>Play Movie</button>
      <button onClick={() => alert('Uploading!')}>Upload Image</button>
    </div>
  );
}

// Если вы нажмете на любую кнопку, ее onClick будет запущен первым, а затем onClick родителя <div>. Таким образом, появятся два сообщения. Если вы щелкнете по самой панели инструментов, запустится onClick только родительского элемента <div>.

//* Важно
// Все события по умолчанию всплывают в React, кроме onScroll, который работает только с тегом JSX, к которому вы его прикрепляете.

//# Остановка распространения (всплытия) события
// Обработчики событий получают объект события в качестве единственного аргумента. По соглашению его обычно называют e, что означает «событие». Вы можете использовать этот объект для чтения информации о событии.

// Этот объект события также позволяет остановить распространение. Если вы хотите, чтобы событие не достигло родительских компонентов, вам нужно вызвать e.stopPropagation(), как это делает этот компонент Button:

function Button({ onClick, children }) {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert('You clicked on the toolbar!');
      }}
    >
      <Button onClick={() => alert('Playing!')}>Play Movie</Button>
      <Button onClick={() => alert('Uploading!')}>Upload Image</Button>
    </div>
  );
}

/* При нажатии на кнопку:
1. React вызывает обработчик onClick, переданный в <button>.
2. Этот обработчик, определенный в Button, делает следующее:
- Вызывает e.stopPropagation(), предотвращая дальнейшее всплытие события.
- Вызывает функцию onClick, которая является свойством, переданным из компонента Toolbar.
3. Эта функция, определенная в компоненте Toolbar, отображает собственное оповещение кнопки.
4. Поскольку всплытие было остановлено, обработчик onClick родительского элемента <div> не запускается.
*/

// В результате e.stopPropagation() при нажатии на кнопки теперь отображается только одно предупреждение (от <button>), а не два из них (от <button> и родительской панели инструментов <div>). Щелчок по кнопке — это не то же самое, что щелчок по окружающей панели инструментов, поэтому остановка распространения имеет смысл для этого пользовательского интерфейса.

//* Фазы захвата событий
// В редких случаях вам может понадобиться перехватывать все события дочерних элементов, даже если они прекратили всплытие. Например, может быть, вы хотите регистрировать каждый клик в аналитике, независимо от логики всплытия. Вы можете сделать это, добавив Capture в конце имени события:

<div
  onClickCapture={() => {
    /* this runs first */
  }}
>
  <button onClick={e => e.stopPropagation()} />
  <button onClick={e => e.stopPropagation()} />
</div>;

/* Каждое событие распространяется в три этапа:
1. перемещается вниз, вызывая все обработчики onClickCapture.
2. запускает обработчик onClick выбранного элемента.
3. перемещается вверх, вызывая все обработчики onClick.
*/

// События захвата полезны для кода, такого как маршрутизаторы или аналитика, но вы, вероятно, не будете использовать их в коде приложения.

//# Передача обработчиков как альтернатива всплытию
// Обратите внимание, как этот обработчик кликов запускает строку кода, а затем вызывает свойство onClick, переданное родителем:

function Button({ onClick, children }) {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

// Вы также можете добавить дополнительный код в этот обработчик перед вызовом родительского обработчика события onClick. Этот шаблон обеспечивает альтернативу всплытию. Это позволяет дочернему компоненту обрабатывать событие, а также позволяет родительскому компоненту указывать дополнительное поведение. В отличие от всплытия, оно не происходит автоматически. Но преимущество этого паттерна в том, что вы можете четко проследить всю цепочку кода, которая выполняется в результате какого-то события.

// Если вы полагаетесь на всплытие и сложно отследить, какие обработчики выполняются и почему, попробуйте вместо этого этот подход.

//# Предотвращение поведения по умолчанию
