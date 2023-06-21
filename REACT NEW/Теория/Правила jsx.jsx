//# Скобки
// Чтобы разделить код и вёрстку, рекомендуется обрамлять JSX в круглые скобки:
ReactDOM.render((
  <h1>
    I Want To Believe 🛸
  </h1>
), document.querySelector('#root'));

//# Встраивание выражений
const person = "Арамишка";
ReactDOM.render((
  <span>
    Поздоровайся, это моя подружка {person}
  </span>
), document.querySelector('#root'));

const onlyGoodNewsClassName = "good-news post only-good pet-news"
ReactDOM.render((
  <section className={onlyGoodNewsClassName}>
    Блок хороших новостей
  </section>
), document.querySelector('#root'));

//# Функции
const renderAddress = (street, house) => {
  return (
    <div>
      <p>Улица {street}</p>
      <p>Дом {house}</p>
    </div>
  );
}

ReactDOM.render((
  <section>
    <p>Я проживаю по адресу:</p>
    {renderAddress("Пушкина", "Колотушкина")}
  </section>
), document.querySelector('#root'));

//# Фрагменты
// Блок JSX-кода по правилам должен содержать только один элемент верхнего уровня. Чтобы JSX-код работал правильно, мы «оборачиваем» элементы во фрагмент. <React.Fragment>...</React.Fragment> или его более ёмкий вариант <>...</>.
ReactDOM.render((
  <>
    <div id="myElement">Click me!</div>
    <div id="myAnotherElement">It was clicked!</div>
  </>
), document.querySelector('#root'));

//# Условная логика
// В JSX внутри фигурных скобок можно писать любые JavaScript-выражения
ReactDOM.render((
  <div>
    {isDaylight ? (
      <h2>Добрый день!</h2>
    ) : (
      <h2>Спокойной ночи!</h2>
    )}
  </div>
), document.querySelector('#root'));

// Бывает, что в таких конструкциях возвращают null, в этом случае в DOM ничего не попадёт
ReactDOM.render((
  <React.Fragment>
    {userName ? (<h2>Добро пожаловать, {userName}!</h2>) : null}
  </React.Fragment>
), document.querySelector('#root'));

//# Оператор && (логическое И) —
// Используется, если нужно отобразить часть JSX разметки только при определённом условии, в противном случае вообще ничего не отображать:
ReactDOM.render((
  <div>
    {isLunchTime && <h2>Время обеда!</h2>}
  </div>
), document.querySelector('#root'));

// Оба оператора могут содержать составные условия:
ReactDOM.render((
  <div>
    {isThursday && wasRaining && <h2>Пора вернуть долг!</h2>}
  </div>
), document.querySelector('#root'));

ReactDOM.render((
  <div>
    {(isFrost && isSun) ? (
      <h2>День чудесный</h2>
    ) : (
      <h2>День обычный</h2>
    )}
  </div>
), document.querySelector('#root'));

//# Свойства элементов
// Для задания CSS-класса вместо class используется атрибут className. Для всех остальных свойств в JSX используется camelCase стиль вместо обычных имён HTML-атрибутов.
ReactDOM.render((
  <div>
    <div className="proletariat">
      Шаг держи революционный!
      Близок враг неугомонный!
      Вперёд, вперёд, вперёд,
      Рабочий народ!
    </div>
    <div className="bourgeoisie">
      Ешь ананасы, рябчиков жуй,
      День твой последний приходит, буржуй.
    </div>
  </div>
), document.querySelector('#root'));

// Ещё в JSX отличается атрибут for у label
ReactDOM.render((
  <div>
    <label htmlFor="title">
      <input id="title" type="text" />
    </label>
</div>
), document.querySelector('#root'));

//# Стили с переменной
const styles = {
  width: 6792,
  height: 6752,
  borderRadius: '50%',
  background: '#934838',
  color: 'black',
};
ReactDOM.render((
  <div style={styles}>Какая я планета?</div>
), document.querySelector('#root'));

//# Стили без переменной. Используем {{...}}.
// Т.е. стили это объект, первые скобки {} означают что мы пишем js код, вторые {} - что это объект
ReactDOM.render((
  <div style={{
      width: 3475,
      height: 3472,
      borderRadius: '50%',
      background: '#d0d5d2',
      color: '#444444',
  }}>
      Я тоже хочу быть планетой!
  </div>
), document.querySelector('#root'));

//# Самозакрывающиеся теги
// Любой открывающий тег должен иметь свою пару — закрывающий тег. Если у элемента нет внутреннего содержимого, то тег должен быть самозакрывающимся. Для этого ставят слеш / перед его закрывающей скобкой:
<img src="logo.png" />

//# Комментарии в JSX
ReactDOM.render((
  <div>
    {/* Это комментарий к элементу label */}
    <label htmlFor="title">
      {/*
        Этот комментарий многострочный,
        в нём можно написать подсказку для коллег.
      */}
      <input id="title" type="text" />
    </label>
  </div>
), document.querySelector('#root'));
