//# Реагирование на события
// React позволяет добавлять обработчики событий в ваш JSX. Обработчики событий — это ваши собственные функции, которые будут запускаться в ответ на такие взаимодействия, как щелчок, наведение курсора, фокусировка на вводе формы и т. д.

/* Ты выучишь:
- Различные способы написания обработчика событий
- Как передать логику обработки событий из родительского компонента
- Как распространяются события и как их остановить
*/

//# Добавление обработчиков событий
// Чтобы добавить обработчик событий, нужно сначала определить функцию, а затем передать ее как свойство соответствующему тегу JSX. Например, вот кнопка, которая пока ничего не делает:

//* App.js
function Button() {
  return <button>I don't do anything</button>;
}

/* Вы можете заставить ее показывать сообщение, когда пользователь нажимает кнопку, выполнив следующие три шага:
1. Объявите функцию handleClick внутри компонента Button.
2. Реализуйте логику внутри этой функции (используйте alert для показа сообщения).
3. Добавьте onClick={handleClick} в <button> JSX.
*/

//* App.js
function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return <button onClick={handleClick}>Click me</button>;
}

/* Вы определили функцию handleClick, а затем передали ее в качестве props в <button>.
handleClick — это обработчик событий. У обработчика событий обычно следующие особенности:
- Обычно определяются внутри ваших компонентов.
- Нейминг функция начинается с handle, за которым следует имя события.
*/

// По соглашению обработчики событий обычно называют handle, за которыми следует имя события. Вы часто будете видеть onClick={handleClick}, onMouseEnter={handleMouseEnter} и так далее.

// Альтернативно вы можете создать функцию для обработчика событий прямо внутри onClick

<button
  onClick={function handleClick() {
    alert('You clicked me!');
  }}
/>;

// Или, более кратко, используя стрелочные функции:
<button
  onClick={() => {
    alert('You clicked me!');
  }}
></button>;

// Все эти стили эквивалентны. Функции для обработчика событий внутри onClick удобны для коротких записей.

//! Ловушка
/* В обработчик события передается сама функция, а не ее вызов.
Например:
передача функции (правильно)       вызов функции (неверно)
<button onClick={handleClick}>     <button onClick={handleClick()}>

Разница невелика. В первом примере функция handleClick передается в обработчик события onClick. Это говорит React запомнить это и вызывать вашу функцию только тогда, когда пользователь нажимает кнопку.

Во втором примере скобки () в конце handleClick() запускают функцию сразу во время рендеринга, без каких-либо щелчков мышью.
Это связано с тем, что JavaScript внутри JSX {} выполняется сразу.

Когда вы пишете код функции внутри, та же самая ловушка проявляется по-другому:
передача функции (правильно)             вызов функции (неверно)
<button onClick={() => alert('...')}>	   <button onClick={alert('...')}>

Передача встроенного кода, подобного этому, не будет срабатывать при нажатии — он срабатывает каждый раз при рендеринге компонента:

Этот alert срабатывает при рендеринге компонента, а не при нажатии!
<button onClick={alert('You clicked me!')}>

Если вы хотите использовать анонимную функцию используйте ее следующим образом:
<button onClick={() => alert('You clicked me!')}>

Вместо выполнения внутреннего кода при каждом рендеринге создается функция, которая будет вызываться позже.

В итоге функция передается следующим образом:
- <button onClick={handleClick}> передает функцию handleClick.
- <button onClick={() => alert('...')}> передает функцию () => alert('...').
*/
//! Ловушка

//# Чтение props в обработчиках событий
// Поскольку обработчики событий объявляются внутри компонента, они имеют доступ к свойствам компонента. Вот кнопка, при нажатии на которую отображается предупреждение с message:

//* App.js
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

// Это позволяет этим двум кнопкам отображать разные сообщения. Попробуйте изменить передаваемые им сообщения.

//# Передача самих обработчиков событий в качестве props
// Часто вам потребуется, чтобы родительский компонент указал обработчик событий дочернего компонента. Рассмотрим кнопки: в зависимости от того, где вы используете компонент Button, вам может потребоваться выполнить другую функцию — возможно, одна из них воспроизводит фильм, а другая загружает изображение.

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

/* Здесь компонент Toolbar отображает PlayButton и UploadButton:
- PlayButton передает handlePlayClick в качестве свойства onClick внутренней кнопке Button.
- UploadButton передает () => alert('Uploading!') в качестве свойства onClick для кнопки внутри.
*/

// Наконец, ваш компонент Button принимает свойство onClick. Он передает это свойство непосредственно во встроенный браузер <button> с помощью onClick={onClick}. Это говорит React вызывать переданную функцию при нажатии.

// Если вы используете design system, такие компоненты, как кнопки, обычно содержат стиль, но не определяют поведение. Вы можете создать такие компоненты, как PlayButton и UploadButton, которые будут передавать обработчики событий.

//# Именование свойств обработчика событий
// Встроенные компоненты, такие как <button> и <div>, поддерживают только имена событий браузера, например onClick. Однако, когда вы создаете свои собственные компоненты, вы можете назвать их свойства обработчика событий так, как вам нравится.

// По соглашению реквизиты обработчика событий должны начинаться с on, за которым следует заглавная буква.

// Например, свойство onClick компонента Button можно было бы назвать onSmash:

//* App.js
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

// В этом примере <button onClick={onSmash}> показывает, что тегу браузера <button> по-прежнему требуется свойство onClick, но имя свойства, полученное вашим пользовательским компонентом Button, зависит от вас!

// Если ваш компонент поддерживает несколько взаимодействий, вы можете назвать свойства обработчика событий для концепций, специфичных для приложения. Например, этот компонент Toolbar получает обработчики событий onPlayMovie и onUploadImage:

//* App.js
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

// Обратите внимание, что компоненту App не нужно знать, что Toolbar будет делать с onPlayMovie или onUploadImage. Это деталь реализации Toolbar.

//* Примечание

//* Примечание